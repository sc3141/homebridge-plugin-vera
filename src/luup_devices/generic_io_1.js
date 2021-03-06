module.exports = {
  deviceType: "generic_io_1",
  upnpType: "urn:schemas-micasaverde-com:device:GenericIO:1",
  services: {
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    },
    "urn:upnp-org:serviceId:SwitchPower1": {
      api: require('../luup_services/switch_power_1'),
      connect: {
        Switch: {
          On: {
            action: "SetTarget",
            stateVar: "Status"
          }
        }
      }
    }
  }
};
