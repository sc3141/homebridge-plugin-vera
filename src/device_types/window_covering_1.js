module.exports = {
  deviceType: "window_covering_1",
  upnpType: "urn:schemas-micasaverde-com:device:WindowCovering:1",
  services: {
    "urn:upnp-org:serviceId:SwitchPower1": require('../luup_services/switch_power_1'),
    "urn:upnp-org:serviceId:Dimming1": require('../luup_services/dimming_1'),
    "urn:upnp-org:serviceId:WindowCovering1": require('../luup_services/window_covering_1'),
    "urn:micasaverde-com:serviceId:Protection1": require('../luup_services/protection_1'),
    "urn:micasaverde-com:serviceId:EnergyMetering1": require('../luup_services/energy_metering_1'),
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1')
  }
};
