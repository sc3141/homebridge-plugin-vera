module.exports = {
  serviceType: "hvac_fan_operating_mode_1",
  variables: {
    Mode: {
      dataType: string,
      defVal: "Auto",
      values: [
        "Auto",
        "ContinuousOn",
        "PeriodicOn"
      ],
      shortCode: fanmode
    },
    FanStatus: {
      dataType: string,
      defVal: "On",
      values: [
        "On",
        "Off"
      ],
      shortCode: fan
    },
    Name: {
      optional: true,
      dataType: string,
      defVal: ""
    }
  },
  actions: {
    SetMode: {
      in: {
        NewMode: "Mode"
      }
    },
    GetMode: {
      out: {
        CurrentMode: "Mode"
      }
    },
    GetFanStatus: {
      out: {
        CurrentStatus: "FanStatus"
      }
    },
    GetName: {
      out: {
        CurrentName: "Name"
      }
    },
    SetName: {
      in: {
        NewName: "Name"
      }
    }
  }
};

