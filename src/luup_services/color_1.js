module.exports = {
  serviceType: "color_1",
  variables: {
    CurrentColor: {
      dataType: string,
      eventable: false
    },
    TargetColor: {
      dataType: string,
      eventable: false
    },
    SupportedColors: {
      dataType: string,
      eventable: false
    },
    ColorChannelPriorities: {
      optional: true,
      dataType: string,
      eventable: false
    }
  },
  actions: {
    SetColor: {
      in: {
        newColorTarget: "TargetColor"
      }
    },
    SetColorRGB: {
      in: {
        newColorRGBTarget: "TargetColor"
      }
    },
    SetColorTemp: {
      in: {
        newColorTempTarget: "TargetColor"
      }
    }
  }
};

