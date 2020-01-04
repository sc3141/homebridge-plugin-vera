const VeraConversions = require('./VeraConversions'),
  // debounce = require('debounce-promise'),
  path     = require('path'),
  _        = require('lodash');

module.exports = class DeviceTypes {
  constructor(platform) {
    this.configItems = platform.getConfigItems();
    this.log = platform.log;
    this.logConfig = platform.logConfig;
    this.homebridge = platform.homebridge;
    this.deviceDir = path.join(__dirname, 'luup_devices');
    this.client = platform.client;
    this.conversions = new VeraConversions(platform);

    // CommunityTypes defines two characteristics, KilowattHours and Watts.
    //this.CommunityTypes =
    //  require("./libs/CommunityTypes")(
    //    this.homebridge.hap.Service, this.homebridge.hap.Characteristic
    //  );

    // excluded device entries represent -prefixes-, can be completed names,
    // or can be matched against multiple device types
    this.excludedVeraDeviceTypes = [
      "urn:schemas-micasaverde-com:device:ZWaveNetwork",
      "urn:schemas-micasaverde-com:device:SceneController",
      "urn:schemas-micasaverde-com:device:HaDevice"
    ];

    this.excludedVeraDeviceTypes.concat(
      _.difference(
        this.configItems['excluded_vera_device_types'],
        this.excludedVeraDeviceTypes)
    );

    // excluded service entries are -not- prefixes. must be complete name
    this.excludedVeraServices = this.configItems['excluded_vera_services'];
  }

  log_change(attr, char, acc, chgObj) {
    if (this.logConfig.debug === true)
      this.log.notice(`[CHARACTERISTIC (${char}) CHANGE] ${attr} (${acc.displayName}) | LastUpdate: (${acc.context.lastUpdate}) | NewValue: (${chgObj.newValue}) | OldValue: (${chgObj.oldValue})`);
  }

  log_get(attr, char, acc, val) {
    if (this.logConfig.debug === true)
      this.log.good(`[CHARACTERISTIC (${char}) GET] ${attr} (${acc.displayName}) | LastUpdate: (${acc.context.lastUpdate}) | Value: (${val})`);
  }

  log_set(attr, char, acc, val) {
    if (this.logConfig.debug === true)
      this.log.warn(`[CHARACTERISTIC (${char}) SET] ${attr} (${acc.displayName}) | LastUpdate: (${acc.context.lastUpdate}) | Value: (${val})`);
  }

  pruneDevices(devicesData) {
    let that = this;
    return devicesData
      .filter(deviceData => {
        let included = !this.excludedVeraDeviceTypes.find(
          exclusion => deviceData.device_type.startsWith(exclusion)
        );
        if (!included)
          that.log.warn(
            `Excluding device due to type: ${deviceData.name} | ${deviceData.deviceid}`
          );
        return included;
      })
      .filter(deviceData => {
        let included = (_.isString(deviceData.device_file) && !_.isEmpty(deviceData.device_file));
        if (!included) {
          that.log.warn(`Excluding device for lack of device type: ${deviceData.name} | ${deviceData.deviceid}`);
        }
        return included;
      })
      .filter(deviceData => {
        let included = false;
        try {
          deviceData.module_name = that.moduleName(deviceData);
          require.resolve(path.join(that.deviceDir, deviceData.module_name));
          included = true;
        } catch(err) {
          if (err.code === 'MODULE_NOT_FOUND') {
            that.log.warn(`Excluding unsupported device '${deviceData.module_name}': ${deviceData.name} | ${deviceData.deviceid}`);
          } else {
            throw err;
          }
        }
        return included;
      })
      .filter(deviceData => {
        let included = false;
        try {
          deviceData.api = require(path.join(that.deviceDir, deviceData.module_name));
          included = !!deviceData.api;
        } catch(err) {
          that.log.error(`Error loading device API: '${deviceData.module_name}'`, err.message);
          that.log.debug(err.stack);
          that.log.warn(`Excluding device with broken API '${deviceData.module_name}': `
            + `${deviceData.name} | ${deviceData.deviceid}`);
        }
        return included;
      })
      .filter(deviceData => {
        let included = !!Object.entries(deviceData.api.services).find(([serviceId, svc]) => !!svc.connect);
        if (!included) {
          that.log.warn(`Excluding device '${deviceData.module_name}'`
            + ` w/o homekit support: ${deviceData.name} | ${deviceData.deviceid}`)
        }
        return included;
      });
  }

  moduleName(deviceData) {
    let filename = deviceData.device_file;
    if (filename.startsWith('D_')) filename = filename.slice(2);
    return _.snakeCase(path.posix.basename(filename, '.xml'));
  }

  bindAPI(devData, accessory) {
    devData.hasStateVar = this.hasStateVar.bind(devData);
    devData.getStateVarDef = this.getStateVarDef.bind(devData);

    for (let [veraServiceId, veraService] of Object.entries(devData.api.services)) {
      if (!veraService.connect) {
        // absence can be a normal condition
        continue;
      }

      for (let [hkSvcName, hkSvcChars] of Object.entries(veraService.connect)) {
        for (let [hkCharName, hkChar] of Object.entries(hkSvcChars)) {
          hkChar.veraServiceId = veraServiceId;

          // if the 'getter' state variable has not yet been bound and
          // a state variable has been specified (used in get operation),
          // confirm that it is useable.
          if (!hkChar.stateVarDef) {
            if (hkChar.stateVar) {
              if (!devData.hasStateVar(veraServiceId, hkChar.stateVar)) {
                this.log.warn(`Device missing state var ''${veraServiceId}:${hkChar.stateVar}'`
                  + `required for Characteristic '${hkSvcName}:${hkCharName}': ${devData.name} | ${devData.deviceid}`);
                continue;
              }
              hkChar.stateVarDef = devData.getStateVarDef(veraServiceId, hkChar.stateVar);
              if (!hkChar.stateVarDef) {
                this.log.warn(`Service '${veraServiceId}' API missing state var definition '${hkChar.stateVar}'`
                  + ` required for Characteristic '${hkSvcName}:${hkCharName}': ${devData.name} | ${devData.deviceid}`);
                continue;
              }
            }
          }

          // check to see if a useable action is available for the 'setter' part of the characteristic.
          // if no (getter) state variable has been explicitly specified,
          // attempt use the first referenced state variable (if any)
          if (!hkChar.actionDef) {
            if (hkChar.action) {
              let veraAction = veraService.api.actions[hkChar.action];
              if (veraAction) {
                // if there are input arguments for the action
                if (veraAction.in) {
                  // attempt to resolve the state variable associated with the argument, if any
                  for (let n = 0; n < veraAction.in.length; n++) {
                    let actionArg = veraAction.in[n];
                    // if the action arg has not already been resolved
                    if (!actionArg.stateVarDef) {
                      // ... and if it -should- be resolved
                      if (actionArg.stateVar) {
                        actionArg.stateVarDef = devData.getStateVarDef(veraServiceId, actionArg.stateVar);
                        if (!actionArg.stateVarDef) {
                          this.log.warn(`Service '${veraServiceId}' API missing state var definition`
                            + ` '${actionArg.stateVar}' for action '${hkChar.action}' used to set Characteristic`
                              + ` '${hkSvcName}:${hkCharName}': ${devData.name} | ${devData.deviceid}`);
                        } else if (n === 0 && !hkChar.stateVarDef) {
                          // -- for the first argument of the action --,
                          // if state var is included in the state variables of the device,
                          // then it is 'gettable'.  Therefore, it can be used by the Characteristic's 'getter' operation.
                          if (devData.hasStateVar(veraServiceId, actionArg.stateVar)) {
                            hkChar.stateVarDef = actionArg.stateVarDef;
                          } else {
                            this.log.warn(`Device missing stateVar '${veraServiceId}':'${actionArg.stateVar}'`
                              + ` used to get Characteristic '${hkSvcName}:${hkCharName}':`
                                + ` ${devData.name} | ${devData.deviceid}`);
                          }
                        }
                      }
                    }
                  }
                }
                hkChar.actionDef = veraAction;

              } else {
                this.log.warn(`Service '${veraServiceId}' API missing action '${hkChar.action}'`
                  + ` required for Characteristic '${hkSvcName}:${hkCharName}': ${devData.name} | ${devData.deviceid}`);
              }
            }
          }

          if (hkChar.actionDef || hkChar.stateVarDef)
            this.bindCharacteristic(devData, accessory, hkSvcName, hkCharName, hkChar);
        }
      }
    }

    return accessory;
  }
  
  hasStateVar(serviceId, name) {
    return this.states.find(state => serviceId === state.service && name === state.variable);
  }

  getStateVarDef(serviceId, stateVar) {
    let svc = this.api.services[serviceId];
    return svc ? _.get(svc, ['api', 'variables', stateVar].join('.')) : undefined;
  }

  bindCharacteristic(devData, accessory, hkSvcName, hkCharName, connectSpec) {
    let hkService = this.homebridge.hap.Service[hkSvcName];
    if (!hkService) {
      this.log.warn(`HomeKit Service '${hkSvcName}' not found: ${devData.name} | ${devData.deviceid}`);
      return;
    }
    let hkCharacteristic = this.homebridge.hap.Characteristic[hkCharName];
    if (!hkCharacteristic) {
      this.log.warn(`HomeKit Characteristic '${hkCharName}' not found: ${devData.name} | ${devData.deviceid}`);
      return;
    }
    let accessoryChar = accessory.getOrAddService(hkService).getCharacteristic(hkCharacteristic);
    if (!accessoryChar) {
      this.log.warn(`Accessory Characteristic '${hkSvcName}:${hkCharName}' not found: ${devData.name} | ${devData.deviceid}`);
      return;
    }

    if (connectSpec.stateVarDef) this.bindGet(accessoryChar, devData, connectSpec);
    if (connectSpec.actionDef) this.bindSet(accessoryChar, devData, connectSpec);
  }

  bindGet(accessoryChar, devData, connectSpec) {
    accessoryChar.on('get', this.createGetter(accessoryChar.props.format, devData, connectSpec));
  }

  bindSet(accessoryChar, devData, connectSpec) {
    if (connectSpec.changeOnly)
      accessoryChar.on('set', this.createChangeOnlySetter(accessoryChar.props.format, devData, connectSpec));
    else
      accessoryChar.on('set', this.createSetter(accessoryChar.props.format, devData, connectSpec));
  }

  createGetter(hkFormat, devData, connectSpec) {
    let convert = _.get(connectSpec, 'conversion.get');
    if (convert === undefined) {
      let veraType = connectSpec.stateVarDef.dataType;
      convert = _.get(this.conversions.between(hkFormat, veraType), 'get');
    }

    // at this point, convert may still be undefined ... (and a normal condition)
    return (callback) => {
      this.client.getStateVariable(
        callback,
        devData.deviceid,
        connectSpec.veraServiceId,
        connectSpec.stateVarDef.name,
        convert);
    };
  }

  createSetter(hkFormat, devData, connectSpec) {
    let convert = _.get(connectSpec, 'conversion.set');
    if (convert === undefined) {
      // use the data type of the first argument, if any
      let veraType = _.get(connectSpec.actionDef, 'in.0.stateVarDef.dataType');
      convert = _.get(this.conversions.between(hkFormat, veraType),'set');
    }

    // at this point, convert may still be undefined ... (and a normal condition)
    return (value, callback) => {
      this.client.sendAction(
        callback,
        devData.deviceid,
        connectSpec.veraServiceId,
        connectSpec.action,
        _.get(connectSpec.actionDef, 'in.0.name'),
        value,
        convert);
    }
  }

  createChangeOnlySetter(hkFormat, devData, connectSpec) {
    let getter = this.createGetter(hkFormat, devData, connectSpec);
    let setter = this.createSetter(hkFormat, devData, connectSpec);

    return (value, callback) => {
      getter((unused, gotten) => {
        if (gotten === value)
          callback(undefined);
        else
          setter(value, callback);
      });
    };
  }
};