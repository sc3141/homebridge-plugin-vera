module.exports = {
  serviceType: "fan_speed_1",
  variables: {
    FanSpeedTarget: {
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100,
      eventable: false
    },
    FanSpeedStatus: {
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100
    },
    DirectionTarget: {
      optional: true,
      dataType: "boolean",
      defVal: 0,
      eventable: false
    },
    DirectionStatus: {
      optional: true,
      dataType: "boolean",
      defVal: 0
    }
  },
  actions: {
    SetFanSpeed: {
      in: {
        NewFanSpeedTarget: "FanSpeedTarget"
      }
    },
    GetFanSpeed: {
      out: {
        CurrentFanSpeedStatus: "FanSpeedStatus"
      }
    },
    GetFanSpeedTarget: {
      out: {
        CurrentFanSpeedTarget: "FanSpeedTarget"
      }
    },
    SetFanDirection: {
      in: {
        NewDirectionTarget: "DirectionTarget"
      }
    },
    GetFanDirection: {
      out: {
        CurrentDirectionStatus: "DirectionStatus"
      }
    },
    GetFanDirectionTarget: {
      out: {
        CurrentDirectionTarget: "DirectionTarget"
      }
    }
  }
};

