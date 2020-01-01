module.exports = {
  serviceType: "fan_speed_1",
  variables: {
    FanSpeedTarget: {
      name: "FanSpeedTarget",
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100,
      eventable: false
    },
    FanSpeedStatus: {
      name: "FanSpeedStatus",
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100
    },
    DirectionTarget: {
      name: "DirectionTarget",
      optional: true,
      dataType: "boolean",
      defVal: 0,
      eventable: false
    },
    DirectionStatus: {
      name: "DirectionStatus",
      optional: true,
      dataType: "boolean",
      defVal: 0
    }
  },
  actions: {
    SetFanSpeed: {
      in: [
        { name: "NewFanSpeedTarget", stateVar: "FanSpeedTarget" }
      ]
    },
    GetFanSpeed: {
      out: [
        { name: "CurrentFanSpeedStatus", stateVar: "FanSpeedStatus" }
      ]
    },
    GetFanSpeedTarget: {
      out: [
        { name: "CurrentFanSpeedTarget", stateVar: "FanSpeedTarget" }
      ]
    },
    SetFanDirection: {
      in: [
        { name: "NewDirectionTarget", stateVar: "DirectionTarget" }
      ]
    },
    GetFanDirection: {
      out: [
        { name: "CurrentDirectionStatus", stateVar: "DirectionStatus" }
      ]
    },
    GetFanDirectionTarget: {
      out: [
        { name: "CurrentDirectionTarget", stateVar: "DirectionTarget" }
      ]
    }
  }
};

