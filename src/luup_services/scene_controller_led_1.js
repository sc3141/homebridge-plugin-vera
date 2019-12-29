module.exports = {
  serviceType: "scene_controller_led_1",
  variables: {
    Light: {
      dataType: ui1
    }
  },
  actions: {
    SetLight: {
      in: {
        newValue: "Light",
        Indicator: "Light"
      }
    }
  }
};

