module.exports = {
  deviceType: "temp_leak_sensor_1",
  upnpType: "urn:schemas-micasaverde-com:device:TempLeakSensor:1",
  services: {
    "urn:upnp-org:serviceId:TemperatureSensor1": {
      api: require('../luup_services/temperature_sensor_1')
    },
    "urn:micasaverde-com:serviceId:SecuritySensor1": {
      api: require('../luup_services/security_sensor_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
