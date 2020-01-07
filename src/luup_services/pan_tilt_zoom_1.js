module.exports = {
  serviceType: "pan_tilt_zoom_1",
  actions: {
    MoveLeft: {},
    MoveRight: {},
    MoveUp: {},
    MoveDown: {},
    ZoomIn: {},
    ZoomOut: {},
    HorizontalPatrol: {},
    VerticalPatrol: {},
    StopPatrol: {},
    GoToPreset: {
      in: [
        { name: "presetNumber", stateVar: "ui1" }
      ]
    },
    SetPreset: {
      in: [
        { name: "presetNumber", stateVar: "ui1" }
      ]
    }
  }
};

