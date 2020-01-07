module.exports = {
  deviceType: "binary_light_1",
  upnpType: "urn:schemas-upnp-org:device:BinaryLight:1",
  services: {
    "urn:upnp-org:serviceId:SwitchPower1": {
      api: require('../luup_services/switch_power_1'),
      connect: {
        Lightbulb: {
          On: {
            action: "SetTarget",
            stateVar: "Status"
          }
        }
      }
    },
    "urn:micasaverde-com:serviceId:EnergyMetering1": {
      api: require('../luup_services/energy_metering_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
