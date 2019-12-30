module.exports = {
  deviceType: "scene_1",
  upnpType: "urn:schemas-micasaverde-com:device:Scene:1",
  services: {
    "urn:micasaverde-com:serviceId:Scene1": {
      api: require('../luup_services/scene_1')
    }
  }
};
