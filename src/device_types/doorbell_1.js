module.exports = {
  deviceType: "doorbell_1",
  upnpType: "urn:schemas-micasaverde-com:device:Doorbell:1",
  services: {
    "urn:micasaverde-com:serviceId:SecuritySensor1": require('../luup_services/security_sensor_1'),
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1'),
    "urn:micasaverde-com:serviceId:LPRFDevice1": require('../luup_services/lprf_device_1')
  }
};
