const {
    pluginName,
    platformName,
    platformDesc,
    pluginVersion
  }               = require('./libs/Constants'),
  myUtils         = require('./libs/MyUtils'),
  VeraClient      = require('./VeraClient'),
  VeraAccessories = require('./VeraAccessories'),
  VeraDeviceTypes = require('./VeraDeviceTypes'),
  Logging         = require('./libs/Logger'),
  configSchema    = require('./config.schema.json'),
  Ajv             = require('ajv');

var PlatformAccessory;
// TODO: Verify/fix the removal of unused services from accessories where there Services change.
module.exports = class VeraPlatform {
  constructor(log, config, api) {
    if (config === undefined || config === null) {
      log(`${platformName} Plugin is not Configured | Skipping...`);
      return;
    }

    // validate config.json
    let ajv = new Ajv({allErrors: true});
    let validate = ajv.compile(configSchema);
    if (!validate(config)) {
      log.warn(`${platformName} Plugin config file:`);
      for (var error of validate.errors) {
        log.warn(`    ${error.message}`);
      }
      log.warn(`${platformName} Plugin config is not valid | Skipping...`);
      return;
    }

    this.config = config;
    this.homebridge = api;
    PlatformAccessory = api.platformAccessory;
    this.UUIDGen = api.hap.uuid;

    this.logConfig = this.getLogConfig();
    this.logging = new Logging(this, this.config["name"], this.logConfig);
    this.log = this.logging.getLogger();

    this.log.info(`Homebridge Version: ${api.version}`);
    this.log.info(`${platformName} Plugin Version: ${pluginVersion}`);

    this.updateIntervalSeconds = config["update_interval_seconds"] || 0;

    this.temperature_unit = this.config["temperature_unit"] || "F";

    this.myUtils = new myUtils(this);

    this.deviceCache = {};
    this.client = new VeraClient(this);
    this.veraDeviceTypes = new VeraDeviceTypes(this);
    this.accessories = new VeraAccessories(this);
    this.homebridge.on("didFinishLaunching", this.didFinishLaunching.bind(this));

    // check for a new version of the plugin at npmjs.com
    // no reason to do this right now ....
    //this.myUtils.checkVersion();
  }

  getLogConfig() {
    let config = this.config;
    return (config.logConfig) ? {
      debug: (config.logConfig.debug === true),
      showChanges: (config.logConfig.showChanges === true),
      hideTimestamp: (config.logConfig.hideTimestamp === true),
      hideNamePrefix: (config.logConfig.hideNamePrefix === true),
      file: {
        enabled: (config.logConfig.file && config.logConfig.file.enabled === true),
        level: (config.logConfig.file ? (config.logConfig.file.level || 'good') : 'good')
      }
    } : {debug: false, showChanges: true, hideTimestamp: false, hideNamePrefix: false};
  }

  getConfigItems() {
    return {
      debug:                      (this.config.debug === true),
      controller_ip:              this.config["controller_ip"],
      controller_port:            this.config["controller_port"] || 3480,
      excluded_vera_device_types: this.config['excluded_vera_device_types'] || [],
      excluded_vera_services:     this.config['excluded_vera_services'] || {}
    };
  }

  updateTempUnit(unit) {
    this.log.notice(`setting temperature_unit to (${unit})`);
    this.temperature_unit = unit;
  }

  getTempUnit() {
    return this.temperature_unit;
  }

  getDeviceCache() {
    return this.deviceCache || {};
  }

  getDeviceCacheItem(devid) {
    return this.deviceCache[devid] || undefined;
  }

  updDeviceCacheItem(devid, data) {
    this.deviceCache[devid] = data;
  }

  remDeviceCacheItem(devid) {
    delete this.deviceCache[devid];
  }

  didFinishLaunching() {
    this.log.info(`Fetching ${platformName} Devices. NOTICE: This may take a moment if you have a large number of device data is being loaded!`);

    if (this.updateIntervalSeconds)
      setInterval(this.refreshDevices.bind(this), this.updateIntervalSeconds * 1000);

    let that = this;
    this.refreshDevices()
      // TODO: no need right now to send a 'sendStartDirect' for a Vera Controller
      // possibly useful for upnp event subscriptions?
      /*
      .then(() => {
          that.client.sendStartDirect();
      })
      */
      .catch(err => {
        that.log.error(`didFinishLaunching | refreshDevices Exception:`, err.message);
      });
  }

  // TODO: change to support Vera controller
  refreshDevices() {
    let that = this;
    let starttime = new Date();
    return new Promise((resolve, reject) => {
      try {
        that.log.debug("Refreshing All Device Data");
        that.client.getDevices()
          .catch(err => {
            that.log.error('getDevices error:', err.message);
            that.log.error(err.stack);
            reject(err.message);
          })
          .then(resp => {
            if (resp && resp.devices && resp.devices instanceof Array) {
              that.log.info(`Received Device Data | ${resp.devices.length} device${resp.devices.length !== 1 ? 's' : ''}`);

              // TODO: remove debugging/developement use of slice ----------- vvvvv
              const devicesData = that.veraDeviceTypes.pruneDevices(resp.devices).slice(0,1);

              const toCreate = that.accessories.diffAdd(devicesData);
              const toUpdate = that.accessories.intersection(devicesData);
              const toRemove = that.accessories.diffRemove(devicesData);

              that.log.warn(`Devices to Remove: (${Object.keys(toRemove).length})`, toRemove.map(i => i.name));
              that.log.info(`Devices to Update: (${Object.keys(toUpdate).length})`);
              that.log.good(`Devices to Create: (${Object.keys(toCreate).length})`, toCreate.map(i => i.name));

              //TODO: reinstitute device registration / maintenance
              /*
              toRemove.forEach(accessory => that.removeAccessory(accessory));
              toUpdate.forEach(device => that.updateDevice(device));
              */
              toCreate.forEach(device => that.addDevice(device));
            }
            that.log.alert(`Total Initialization Time: (${Math.round((new Date() - starttime) / 1000)} seconds)`);
            that.log.info(`${platformDesc} DeviceCache Size: (${Object.keys(that.accessories.getAllAccessoriesFromCache()).length})`);
            resolve(true);
          })
          .catch(err => {
            that.log.error('getDevices post processing error:', err.message);
            that.log.error(err.stack);
            reject(err.message);
          });

      } catch (ex) {
        that.log.error("refreshDevices error: ", ex.message);
        that.log.error(ex.stack);
        resolve(false);
      }
    });
  }

  getNewAccessory(device, UUID) {
    let category = this.homebridge.hap.Accessory.Categories[device.api.category];
    let accessory = new PlatformAccessory(device.name, UUID, category);
    this.accessories.PopulateAccessory(accessory, device);
    return accessory;
  }

  addDevice(device) {
    let accessory;
    const new_uuid = this.UUIDGen.generate(`vera_${device.deviceid}`);
    this.log.debug(`Initializing New Device (${device.name} | ${device.deviceid})`);
    accessory = this.getNewAccessory(device, new_uuid);
    this.homebridge.registerPlatformAccessories(pluginName, platformName, [accessory]);
    this.accessories.addAccessoryToCache(accessory);
    this.log.info(`Added Device: (${accessory.name} | ${accessory.deviceid})`);
  }

  updateDevice(device) {
    let cacheDevice = this.accessories.getAccessoryFromCache(device);
    let accessory;
    this.log.info(`Loading Existing Device (${device.name}) | (${device.deviceid})`);
    accessory = this.accessories.loadAccessoryData(cacheDevice, device);
    this.accessories.addAccessoryToCache(accessory);
  }

  removeAccessory(accessory) {
    if (this.accessories.removeAccessoryFromCache(accessory)) {
      this.homebridge.unregisterPlatformAccessories(pluginName, platformName, [accessory]);
      this.log.info(`Removed: ${accessory.context.name} (${accessory.context.deviceid})`);
    }
  }

  configureAccessory(accessory) {
    this.log.info(`Configure Cached Accessory: ${accessory.displayName}, UUID: ${accessory.UUID}`);
    let cachedAccessory = this.accessories.CreateAccessoryFromHomebridgeCache(accessory, this);
    this.accessories.addAccessoryToCache(cachedAccessory);
  }
};
