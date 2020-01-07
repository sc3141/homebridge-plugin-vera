module.exports = {
  deviceType: "relay_1",
  upnpType: "urn:schemas-micasaverde-com:device:Relay:1",
  services: {
    "urn:upnp-org:serviceId:SwitchPower1": {
      api: require('../luup_services/switch_power_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
