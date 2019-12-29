module.exports = {
  deviceType: "lprf_network",
  upnpType: "urn:schemas-micasaverde-com:device:LPRFNetwork:1",
  services: {
    "urn:micasaverde-com:serviceId:LPRFNetwork1": require('../luup_services/lprf_network_1')
  }
};
