module.exports = {
  deviceType: "flood_sensor_vera_link_1",
  upnpType: "urn:schemas-micasaverde-com:device:FloodSensor:1",
  services: {
    "urn:micasaverde-com:serviceId:LPRFDevice1": {
      api: require('../luup_services/lprf_device_1')
    },
    "urn:micasaverde-com:serviceId:SecuritySensor1": {
      api: require('../luup_services/security_sensor_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
