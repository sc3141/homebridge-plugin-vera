module.exports = {
  serviceType: "ha_device_1",
  variables: {
    CommFailure: {
      name: "CommFailure",
      dataType: "boolean",
      defVal: 0,
      shortCode: "commFailure"
    },
    Configured: {
      name: "Configured",
      dataType: "boolean",
      defVal: 0
    },
    ID: {
      name: "ID",
      dataType: "string"
    },
    PollingEnabled: {
      name: "PollingEnabled",
      dataType: "boolean",
      defVal: 1
    },
    PollMinDelay: {
      name: "PollMinDelay",
      dataType: "ui4",
      defVal: 60,
      min: 0,
      max: 600
    },
    sl_Alarm: {
      name: "sl_Alarm",
      dataType: "string"
    },
    BatteryLevel: {
      name: "BatteryLevel",
      dataType: "i1",
      shortCode: "batterylevel"
    },
    sl_BatteryAlarm: {
      name: "sl_BatteryAlarm",
      dataType: "boolean"
    },
    sl_TamperAlarm: {
      name: "sl_TamperAlarm",
      dataType: "boolean"
    },
    Commands: {
      name: "Commands",
      dataType: "string",
      shortCode: "commands"
    },
    sl_Hail: {
      name: "sl_Hail",
      dataType: "i1"
    }
  },
  actions: {
    Reconfigure: {},
    StressTest: {},
    Remove: {},
    Poll: {},
    ToggleState: {},
    SetPollFrequency: {
      in: [
        { name: "PollingEnabled", stateVar: "PollingEnabled" },
        { name: "PollMinDelay", stateVar: "PollMinDelay" }
      ]
    },
    AllowPairing: {
      in: [
        { name: "Seconds", stateVar: "PollMinDelay" }
      ]
    }
  }
};

