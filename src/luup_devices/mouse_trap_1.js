module.exports = {
  deviceType: "mouse_trap_1",
  upnpType: "urn:schemas-micasaverde-com:device:MouseTrap:1",
  services: {
    "urn:micasaverde-com:serviceId:SecuritySensor1": {
      api: require('../luup_services/security_sensor_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
