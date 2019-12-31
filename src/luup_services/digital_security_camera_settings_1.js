module.exports = {
  serviceType: "digital_security_camera_settings_1",
  variables: {
    AutomaticWhiteBalance: {
      dataType: "boolean",
      defVal: 1,
      eventable: true
    },
    FixedWhiteBalance: {
      dataType: "ui4",
      defVal: 3000,
      min: 0,
      max: 10000,
      eventable: true
    },
    AvailableRotations: {
      dataType: "string",
      eventable: false
    },
    DefaultRotation: {
      dataType: "string",
      eventable: true
    },
    Brightness: {
      dataType: "ui1",
      defVal: 50,
      min: 0,
      max: 100,
      eventable: true
    },
    ColorSaturation: {
      dataType: "ui1",
      defVal: 50,
      min: 0,
      max: 100,
      eventable: true
    }
  },
  actions: {
    SetAutomaticWhiteBalance: {
      in: {
        NewAutomaticWhiteBalance: "AutomaticWhiteBalance"
      }
    },
    GetAutomaticWhiteBalance: {
      out: {
        RetAutomaticWhiteBalance: "AutomaticWhiteBalance"
      }
    },
    SetFixedWhiteBalance: {
      in: {
        NewFixedWhiteBalance: "FixedWhiteBalance"
      }
    },
    GetFixedWhiteBalance: {
      out: {
        RetFixedWhiteBalance: "FixedWhiteBalance"
      }
    },
    GetAvailableRotations: {
      out: {
        RetAvailableRotations: "AvailableRotations"
      }
    },
    SetDefaultRotation: {
      in: {
        NewRotation: "DefaultRotation"
      }
    },
    GetDefaultRotation: {
      out: {
        RetRotation: "DefaultRotation"
      }
    },
    SetBrightness: {
      in: {
        NewBrightness: "Brightness"
      }
    },
    GetBrightness: {
      out: {
        RetBrightness: "Brightness"
      }
    },
    IncreaseBrightness: {},
    DecreaseBrightness: {},
    SetColorSaturation: {
      in: {
        NewColorSaturation: "ColorSaturation"
      }
    },
    GetColorSaturation: {
      out: {
        RetColorSaturation: "ColorSaturation"
      }
    },
    IncreaseColorSaturation: {},
    DecreaseColorSaturation: {}
  }
};

