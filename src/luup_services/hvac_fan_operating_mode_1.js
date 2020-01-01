module.exports = {
  serviceType: "hvac_fan_operating_mode_1",
  variables: {
    Mode: {
      name: "Mode",
      dataType: "string",
      defVal: "Auto",
      values: [
        "Auto",
        "ContinuousOn",
        "PeriodicOn"
      ],
      shortCode: "fanmode"
    },
    FanStatus: {
      name: "FanStatus",
      dataType: "string",
      defVal: "On",
      values: [
        "On",
        "Off"
      ],
      shortCode: "fan"
    },
    Name: {
      name: "Name",
      optional: true,
      dataType: "string",
      defVal: ""
    }
  },
  actions: {
    SetMode: {
      in: [
        { name: "NewMode", stateVar: "Mode" }
      ]
    },
    GetMode: {
      out: [
        { name: "CurrentMode", stateVar: "Mode" }
      ]
    },
    GetFanStatus: {
      out: [
        { name: "CurrentStatus", stateVar: "FanStatus" }
      ]
    },
    GetName: {
      out: [
        { name: "CurrentName", stateVar: "Name" }
      ]
    },
    SetName: {
      in: [
        { name: "NewName", stateVar: "Name" }
      ]
    }
  }
};

