module.exports = {
  serviceType: "digital_security_camera_settings_1",
  variables: {
    AutomaticWhiteBalance: {
      name: "AutomaticWhiteBalance",
      dataType: "boolean",
      defVal: 1,
      eventable: true
    },
    FixedWhiteBalance: {
      name: "FixedWhiteBalance",
      dataType: "ui4",
      defVal: 3000,
      min: 0,
      max: 10000,
      eventable: true
    },
    AvailableRotations: {
      name: "AvailableRotations",
      dataType: "string",
      eventable: false
    },
    DefaultRotation: {
      name: "DefaultRotation",
      dataType: "string",
      eventable: true
    },
    Brightness: {
      name: "Brightness",
      dataType: "ui1",
      defVal: 50,
      min: 0,
      max: 100,
      eventable: true
    },
    ColorSaturation: {
      name: "ColorSaturation",
      dataType: "ui1",
      defVal: 50,
      min: 0,
      max: 100,
      eventable: true
    }
  },
  actions: {
    SetAutomaticWhiteBalance: {
      in: [
        { name: "NewAutomaticWhiteBalance", stateVar: "AutomaticWhiteBalance" }
      ]
    },
    GetAutomaticWhiteBalance: {
      out: [
        { name: "RetAutomaticWhiteBalance", stateVar: "AutomaticWhiteBalance" }
      ]
    },
    SetFixedWhiteBalance: {
      in: [
        { name: "NewFixedWhiteBalance", stateVar: "FixedWhiteBalance" }
      ]
    },
    GetFixedWhiteBalance: {
      out: [
        { name: "RetFixedWhiteBalance", stateVar: "FixedWhiteBalance" }
      ]
    },
    GetAvailableRotations: {
      out: [
        { name: "RetAvailableRotations", stateVar: "AvailableRotations" }
      ]
    },
    SetDefaultRotation: {
      in: [
        { name: "NewRotation", stateVar: "DefaultRotation" }
      ]
    },
    GetDefaultRotation: {
      out: [
        { name: "RetRotation", stateVar: "DefaultRotation" }
      ]
    },
    SetBrightness: {
      in: [
        { name: "NewBrightness", stateVar: "Brightness" }
      ]
    },
    GetBrightness: {
      out: [
        { name: "RetBrightness", stateVar: "Brightness" }
      ]
    },
    IncreaseBrightness: {},
    DecreaseBrightness: {},
    SetColorSaturation: {
      in: [
        { name: "NewColorSaturation", stateVar: "ColorSaturation" }
      ]
    },
    GetColorSaturation: {
      out: [
        { name: "RetColorSaturation", stateVar: "ColorSaturation" }
      ]
    },
    IncreaseColorSaturation: {},
    DecreaseColorSaturation: {}
  }
};

