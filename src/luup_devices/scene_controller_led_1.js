module.exports = {
  deviceType: "scene_controller_led_1",
  upnpType: "urn:schemas-micasaverde-com:device:SceneControllerLED:1",
  services: {
    "urn:micasaverde-com:serviceId:SceneController1": {
      api: require('../luup_services/scene_controller_1')
    },
    "urn:micasaverde-com:serviceId:SceneControllerLED1": {
      api: require('../luup_services/scene_controller_led_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
