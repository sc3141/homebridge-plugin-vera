module.exports = {
  deviceType: "binary_light_1",
  upnpType: "urn:schemas-upnp-org:device:BinaryLight:1",
  services: {
    "urn:upnp-org:serviceId:SwitchPower1": require('../luup_services/switch_power_1'),
    "urn:micasaverde-com:serviceId:EnergyMetering1": require('../luup_services/energy_metering_1'),
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1')
  }
};
