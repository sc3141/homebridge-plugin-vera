module.exports = {
  deviceType: "dimmable_rgb_light_1",
  upnpType: "urn:schemas-upnp-org:device:DimmableRGBLight:1",
  services: {
    "urn:upnp-org:serviceId:SwitchPower1": {
      api: require('../luup_services/switch_power_1'),
      connect: {
        Lightbulb: {
          On: {
            changeOnly: true,
            action: "SetTarget",
            stateVar: "Status"
          }
        }
      }
    },
    "urn:upnp-org:serviceId:Dimming1": {
      api: require('../luup_services/dimming_1'),
      connect: {
        Lightbulb: {
          Brightness: {
            action: "SetLoadLevelTarget"
          }
        }
      }
    },
    "urn:micasaverde-com:serviceId:EnergyMetering1": {
      api: require('../luup_services/energy_metering_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    },
    "urn:micasaverde-com:serviceId:Color1": {
      api: require('../luup_services/color_1')
    }
  }
};
