module.exports = {
  deviceType: "light_sensor_1",
  upnpType: "urn:schemas-micasaverde-com:device:LightSensor:1",
  services: {
    "urn:micasaverde-com:serviceId:LightSensor1": require('../luup_services/light_sensor_1'),
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1')
  }
};
