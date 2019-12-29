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
      in: {
        presetNumber: "ui1"
      }
    },
    SetPreset: {
      in: {
        presetNumber: "ui1"
      }
    }
  }
};

