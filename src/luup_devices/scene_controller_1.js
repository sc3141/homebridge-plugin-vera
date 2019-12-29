module.exports = {
  deviceType: "scene_controller_1",
  upnpType: "urn:schemas-micasaverde-com:device:SceneController:1",
  services: {
    "urn:micasaverde-com:serviceId:SceneController1": require('../luup_services/scene_controller_1'),
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1')
  }
};
