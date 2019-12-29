module.exports = {
  deviceType: "dimmable_rgb_light_2",
  upnpType: "urn:schemas-upnp-org:device:DimmableRGBLight:2",
  services: {
    "urn:upnp-org:serviceId:SwitchPower1": require('../luup_services/switch_power_1'),
    "urn:upnp-org:serviceId:Dimming1": require('../luup_services/dimming_1'),
    "urn:micasaverde-com:serviceId:EnergyMetering1": require('../luup_services/energy_metering_1'),
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1'),
    "urn:micasaverde-com:serviceId:Color1": require('../luup_services/color_1')
  }
};
