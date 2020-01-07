module.exports = {
  deviceType: "generic_sensor_1",
  upnpType: "urn:schemas-micasaverde-com:device:GenericSensor:1",
  services: {
    "urn:micasaverde-com:serviceId:GenericSensor1": {
      api: require('../luup_services/generic_sensor_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
