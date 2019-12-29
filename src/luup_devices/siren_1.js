module.exports = {
  deviceType: "siren_1",
  upnpType: "urn:schemas-micasaverde-com:device:Siren:1",
  services: {
    "urn:upnp-org:serviceId:SwitchPower1": require('../luup_services/switch_power_1'),
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1'),
    "urn:micasaverde-com:serviceId:SecuritySensor1": require('../luup_services/security_sensor_1')
  }
};
