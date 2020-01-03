const _ = require("lodash");

module.exports = class VeraAccessories {
  constructor(platform) {
    this.log = platform.log;
    this.homebridge = platform.homebridge;
    this.UUIDGen = platform.UUIDGen;
    this.client = platform.client;
    this.veraDeviceTypes = platform.veraDeviceTypes;
    this.comparator = this.comparator.bind(this);
    this._accessories = {};
  }

  PopulateAccessory(accessory, deviceData) {
    try {
      accessory.deviceid = deviceData.deviceid;
      accessory.name = deviceData.name;
      accessory.state = {};
      accessory.context.deviceData = deviceData;
      accessory.context.name = deviceData.name;
      accessory.context.deviceid = deviceData.deviceid;
      accessory.context.uuid = accessory.UUID || this.UUIDGen.generate(`vera_${accessory.deviceid}`);
      accessory.getOrAddService = this.getOrAddService.bind(accessory);
      return this.initializeDeviceCharacteristics(accessory);
    } catch (ex) {
      this.log.error('PopulateAccessory Error:', ex.stack);
      return accessory;
    }
  }

  CreateAccessoryFromHomebridgeCache(accessory) {
    try {
      let deviceid = accessory.context.deviceid;
      let name = accessory.context.name;
      this.log.debug(`Initializing Cached Device ${deviceid}`);
      accessory.deviceid = deviceid;
      accessory.name = name;
      accessory.context.uuid = accessory.UUID || this.UUIDGen.generate(`vera_${accessory.deviceid}`);
      accessory.getOrAddService = this.getOrAddService.bind(accessory);
      return this.initializeDeviceCharacteristics(accessory);
    } catch (err) {
      this.log.error('CreateAccessoryFromHomebridgeCache Error:', err.message, err);
      return accessory;
    }
  }

  initializeDeviceCharacteristics(accessory) {
    let prevAccessory = accessory;

    let that = this;
    let devData = accessory.context.deviceData;
    accessory.reachable = true;
    accessory.context.lastUpdate = new Date();
    accessory
      .getOrAddService(this.homebridge.hap.Service.AccessoryInformation)
      .setCharacteristic(this.homebridge.hap.Characteristic.Manufacturer, devData.manufacturer)
      .setCharacteristic(this.homebridge.hap.Characteristic.Model, devData.model)
      .setCharacteristic(this.homebridge.hap.Characteristic.Name, devData.name)
      .on('identify', function (paired, callback) {
        that.log.info("%s - identify", accessory.displayName);
        callback();
      });

    // bind vera api to homebridge api
    if (devData.api) {
      this.veraDeviceTypes.bindAPI(devData, accessory);
    }

    accessory = this.removeUnusedServices(prevAccessory, accessory);
    return this.loadAccessoryData(accessory, devData) || accessory;
  }

  loadAccessoryData(accessory, deviceData) {
    let that = this;
    // return new Promise((resolve, reject) => {
    if (deviceData !== undefined) {
      this.log.debug("Setting device data from existing data");
      accessory.context.deviceData = deviceData;
      for (let i = 0; i < accessory.services.length; i++) {
        for (let j = 0; j < accessory.services[i].characteristics.length; j++) {
          accessory.services[i].characteristics[j].getValue();
        }
      }
      return accessory;
    } else {
      // TODO: make sure the refetching of data is robust ...
      this.log.warn("loadAccessoryData - Fetching Device Data --- untested");
      this.client
        .getDevice(accessory.deviceid)
        .then(data => {
          if (data === undefined) {
            return accessory;
          }
          // TODO: need to rebind api ala this.veraDeviceTypes.bindAPI ?
          accessory.context.deviceData = data;
          for (let i = 0; i < accessory.services.length; i++) {
            for (let j = 0; j < accessory.services[i].characteristics.length; j++) {
              accessory.services[i].characteristics[j].getValue();
            }
          }
          return accessory;
        })
        .catch(err => {
          that.log.error(`Failed to get Device Data for ${accessory.deviceid}: `, err);
          return accessory;
        });
    }
    // });
  }

  getOrAddService(svc) {
    return (this.getService(svc) || this.addService(svc));
  }

  getOrAddCharacteristic(service, characteristic) {
    return (service.getCharacteristic(characteristic) || service.addCharacteristic(characteristic));
  }

  getServices() {
    return this.services;
  }

  removeUnusedServices(accessory, newAccessory) {
    const configuredServices = newAccessory.services.map(s => s.UUID);
    let remove = accessory.services.filter(s => !configuredServices.includes(s.UUID));
    if (Object.keys(remove).length) {
      this.log.info('removeServices:', remove);
    }
    remove.forEach(s => accessory.removeService(s));
    return accessory;
  }

  getAccessoryId(accessory) {
    const id = accessory.deviceid || accessory.context.deviceid || undefined;
    return id;
  }

  getAccessoryFromCache(device) {
    const key = this.getAccessoryId(device);
    return this._accessories[key];
  }

  getAllAccessoriesFromCache() {
    return this._accessories;
  }

  addAccessoryToCache(accessory) {
    const key = this.getAccessoryId(accessory);
    this._accessories[key] = accessory;
    return true;
  }

  removeAccessoryFromCache(accessory) {
    const key = this.getAccessoryId(accessory);
    const _accessory = this._accessories[key];
    delete this._accessories[key];
    return _accessory;
  }

  forEach(fn) {
    return _.forEach(this._accessories, fn);
  }

  intersection(devices) {
    const accessories = _.values(this._accessories);
    return _.intersectionWith(devices, accessories, this.comparator);
  }

  diffAdd(devices) {
    const accessories = _.values(this._accessories);
    return _.differenceWith(devices, accessories, this.comparator);
  }

  diffRemove(devices) {
    const accessories = _.values(this._accessories);
    return _.differenceWith(accessories, devices, this.comparator);
  }

  comparator(accessory1, accessory2) {
    return this.getAccessoryId(accessory1) === this.getAccessoryId(accessory2);
  }
};