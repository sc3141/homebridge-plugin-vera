module.exports = {
  deviceType: "temperature_sensor_1",
  upnpType: "urn:schemas-micasaverde-com:device:TemperatureSensor:1",
  services: {
    "urn:upnp-org:serviceId:TemperatureSensor1": {
      api: require('../luup_services/temperature_sensor_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
