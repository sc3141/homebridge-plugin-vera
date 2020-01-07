module.exports = {
  serviceType: "color_1",
  variables: {
    CurrentColor: {
      name: "CurrentColor",
      dataType: "string",
      eventable: false
    },
    TargetColor: {
      name: "TargetColor",
      dataType: "string",
      eventable: false
    },
    SupportedColors: {
      name: "SupportedColors",
      dataType: "string",
      eventable: false
    },
    ColorChannelPriorities: {
      name: "ColorChannelPriorities",
      optional: true,
      dataType: "string",
      eventable: false
    }
  },
  actions: {
    SetColor: {
      in: [
        { name: "newColorTarget", stateVar: "TargetColor" }
      ]
    },
    SetColorRGB: {
      in: [
        { name: "newColorRGBTarget", stateVar: "TargetColor" }
      ]
    },
    SetColorTemp: {
      in: [
        { name: "newColorTempTarget", stateVar: "TargetColor" }
      ]
    }
  }
};

