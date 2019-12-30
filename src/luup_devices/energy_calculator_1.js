module.exports = {
  deviceType: "energy_calculator_1",
  upnpType: "urn:schemas-micasaverde-com:device:EnergyCalculator:1",
  services: {
    "urn:upnp-org:serviceId:EnergyCalculator1": {
      api: require('../luup_services/energy_calculator_1')
    }
  }
};
