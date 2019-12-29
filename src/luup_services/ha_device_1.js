module.exports = {
  serviceType: "ha_device_1",
  variables: {
    CommFailure: {
      dataType: boolean,
      defVal: 0,
      shortCode: commFailure
    },
    Configured: {
      dataType: boolean,
      defVal: 0
    },
    ID: {
      dataType: string
    },
    PollingEnabled: {
      dataType: boolean,
      defVal: 1
    },
    PollMinDelay: {
      dataType: ui4,
      defVal: 60,
      min: 0,
      max: 600
    },
    sl_Alarm: {
      dataType: string
    },
    BatteryLevel: {
      dataType: i1,
      shortCode: batterylevel
    },
    sl_BatteryAlarm: {
      dataType: boolean
    },
    sl_TamperAlarm: {
      dataType: boolean
    },
    Commands: {
      dataType: string,
      shortCode: commands
    },
    sl_Hail: {
      dataType: i1
    }
  },
  actions: {
    Reconfigure: {},
    StressTest: {},
    Remove: {},
    Poll: {},
    ToggleState: {},
    SetPollFrequency: {
      in: {
        PollingEnabled: "PollingEnabled",
        PollMinDelay: "PollMinDelay"
      }
    },
    AllowPairing: {
      in: {
        Seconds: "PollMinDelay"
      }
    }
  }
};

