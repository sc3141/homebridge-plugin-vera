const {
    platformName
  }        = require('./libs/Constants'),
  rp       = require('request-promise-native'),
  UrlParse = require('url-parse'),
  _        = require('lodash'),
  path     = require('path');

module.exports = class VeraClient {
  constructor(platform) {
    this.platform = platform;
    this.log = platform.log;
    this.configItems = platform.getConfigItems();
    this.updateControllerURL(this.configItems.controller_ip, this.configItems.controller_port);
  }

  updateControllerURL(ip, port) {
    this.controller = {
      ip:   ip,
      port: port,
      baseURL: new UrlParse('http:', null, true)
        .set('slashes', true)
        .set('hostname', ip)
        .set('port', port)
    };
  }

  requestUri(queryParams = {}, pathName = '/data_request') {
    return new UrlParse(this.controller.baseURL, null, true)
      .set('pathname', pathName)
      .set('query', queryParams);
  }

  getDevices() {
    let that = this;
    return new Promise((resolve, reject) => {
      rp({
        uri: that.requestUri({id: 'objectget', key: 'devices'}).toString(),
        json: true
      })
      .catch(err => {
        that.log.error("getDevices request error: ", err.message);
        reject(err.message);
      })
      .then(body => {
        // TODO: more validation advised for returned data?
        if (body && body.devices && body.devices instanceof Array) {
          // rename 'id' to the less contextually ambiguous 'deviceid'
          for (var device of body.devices) {
            device['deviceid'] = device.id;
            delete device['id'];

            if (!device['manufacturer']) device['manufacturer'] = "";
            if (!device['model']) device['model'] = "";
          }
        }
        resolve(body);
      });
    });
  }

  getDevice(deviceid) {
    let that = this;
    return that.getDevices()
      .catch(err => {
        that.log.error("getDevice Error: ", err.message);
        reject(err);
      })
      .then(body => {
        let found = undefined;
        if (body && body.devices && body.devices instanceof Array) {
          found = body.devices.find(device => device.id === deviceid);
        }
        resolve(found);
      });
  }

  getStateVariable(callback, deviceid, serviceId, variableName, convert) {
    let that = this;
    let config = {
      uri: that.requestUri({
        id: 'variableget',
        DeviceNum: deviceid,
        serviceId: serviceId,
        Variable: variableName
      }).toString(),
      json: true
    };
    return new Promise((resolve, reject) => {
      that.log.notice(`Requesting State Variable: ${serviceId}:${variableName} | DeviceID: (${deviceid})`);
      rp(config)
        .catch((err) => {
          that.log.error(`getStateVariable error: deviceid (${deviceid}) | stateVar (${serviceId}:${variableName}) | `, err.message);
          if (callback) {
            callback();
            callback = undefined;
          }
          reject(err);
        })
        .then((body) => {
          that.log.debug(`getStateVariable response: deviceid (${deviceid}) | stateVar (${serviceId}:${variableName}) | `, body);
          callback(null, convert ? convert(body) : body);
          resolve(body);
        });
    });
  }

  sendAction(callback, deviceid, serviceId, actionName, argName, value, convert) {
    let that = this;
    let queryParams = {
      id: 'action',
      DeviceNum: deviceid,
      serviceId: serviceId,
      action: actionName
    };

    if (argName && value !== undefined) {
      queryParams[argName] = (convert ? convert(value) : value);
    }

    let config = {
      uri: that.requestUri(queryParams).toString(),
      json: true
    };

    return new Promise((resolve, reject) => {
      that.log.notice(`Sending Action: ${serviceId}:${actionName}`
        + ` | Value: ${JSON.stringify(queryParams[argName]) || 'Nothing'} | DeviceID: (${deviceid})`);
      rp(config)
        .catch((err) => {
          that.log.error(`sendAction error: deviceid (${deviceid}) | action (${serviceId}:${actionName}) | `, err.message);
          if (callback) {
            callback();
            callback = undefined;
          }
          reject(err);
        })
        .then((body) => {
          that.log.debug(`sendAction response: deviceid (${deviceid}) | action (${serviceId}:${actionName}) | `, body);
          callback(undefined);
          resolve(body);
        });
    });
  }
};