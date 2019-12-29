module.exports = {
  deviceType: "motion_sensor_1",
  upnpType: "urn:schemas-micasaverde-com:device:MotionSensor:1",
  services: {
    "urn:micasaverde-com:serviceId:SecuritySensor1": require('../luup_services/security_sensor_1'),
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1')
  }
};
