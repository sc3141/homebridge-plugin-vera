module.exports = {
  deviceType: "insteon_network",
  upnpType: "urn:schemas-micasaverde-com:device:InsteonNetwork:1",
  services: {
    "urn:micasaverde-com:serviceId:InsteonNetwork1": {
      api: require('../luup_services/insteon_network_1')
    }
  }
};
