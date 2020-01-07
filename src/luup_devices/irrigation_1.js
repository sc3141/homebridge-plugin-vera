module.exports = {
  deviceType: "irrigation_1",
  upnpType: "urn:schemas-micasaverde-com:device:Irrigation:1",
  services: {
    "urn:micasaverde-com:serviceId:Irrigation1": {
      api: require('../luup_services/irrigation_1')
    },
    "urn:upnp-org:serviceId:SwitchPower1": {
      api: require('../luup_services/switch_power_1')
    },
    "urn:micasaverde-com:serviceId:EnergyMetering1": {
      api: require('../luup_services/energy_metering_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    },
    "urn:micasaverde-com:serviceId:Schedule1": {
      api: require('../luup_services/schedule_1')
    }
  }
};
