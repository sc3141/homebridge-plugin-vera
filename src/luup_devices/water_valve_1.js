module.exports = {
  deviceType: "water_valve_1",
  upnpType: "urn:schemas-micasaverde-com:device:WaterValve:1",
  services: {
    "urn:upnp-org:serviceId:SwitchPower1": {
      api: require('../luup_services/switch_power_1'),
      connect: {
        Valve: {
          Active: {
            action: "SetTarget",
            stateVar: "Status"
          },
          InUse: {
            stateVar: "Status"
          }
        }
      }
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
