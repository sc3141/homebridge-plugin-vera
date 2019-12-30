module.exports = {
  deviceType: "humidity_sensor_1",
  upnpType: "urn:schemas-micasaverde-com:device:HumiditySensor:1",
  services: {
    "urn:micasaverde-com:serviceId:HumiditySensor1": {
      api: require('../luup_services/humidity_sensor_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
