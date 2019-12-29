module.exports = {
  deviceType: "ule_network_1",
  upnpType: "urn:schemas-micasaverde-com:device:UleNetwork:1",
  services: {
    "urn:micasaverde-com:serviceId:UleNetwork1": require('../luup_services/ule_network_1')
  }
};
