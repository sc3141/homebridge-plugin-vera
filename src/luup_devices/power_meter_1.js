module.exports = {
  deviceType: "power_meter_1",
  upnpType: "urn:schemas-micasaverde-com:device:PowerMeter:1",
  services: {
    "urn:micasaverde-com:serviceId:EnergyMetering1": {
      api: require('../luup_services/energy_metering_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
