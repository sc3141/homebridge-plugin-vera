module.exports = {
  deviceType: "z_wave_network",
  upnpType: "urn:schemas-micasaverde-com:device:ZWaveNetwork:1",
  services: {
    "urn:micasaverde-com:serviceId:ZWaveNetwork1": {
      api: require('../luup_services/z_wave_network_1')
    }
  }
};
