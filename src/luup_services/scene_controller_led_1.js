module.exports = {
  serviceType: "scene_controller_led_1",
  variables: {
    Light: {
      name: "Light",
      dataType: "ui1"
    }
  },
  actions: {
    SetLight: {
      in: [
        { name: "newValue", stateVar: "Light" },
        { name: "Indicator", stateVar: "Light" }
      ]
    }
  }
};

