module.exports = {
  deviceType: "zigbee_network",
  upnpType: "urn:schemas-micasaverde-com:device:ZigbeeNetwork:1",
  services: {
    "urn:micasaverde-com:serviceId:ZigbeeNetwork1": require('../luup_services/zigbee_network_1')
  }
};
