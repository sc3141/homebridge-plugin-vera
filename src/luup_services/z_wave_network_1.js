module.exports = {
  serviceType: "z_wave_network_1",
  variables: {
    NetStatusID: {
      name: "NetStatusID",
      dataType: "ui1"
    },
    NetStatusText: {
      name: "NetStatusText",
      dataType: "string"
    },
    ActiveScenes: {
      name: "ActiveScenes",
      dataType: "string"
    },
    LastError: {
      name: "LastError",
      dataType: "string"
    },
    ResetMode: {
      name: "ResetMode",
      dataType: "string",
      defVal: "SIS",
      values: [
        "SIS",
        "SUC",
        "None"
      ]
    },
    InclusionMode: {
      name: "InclusionMode",
      dataType: "string",
      defVal: "LowPower",
      values: [
        "LowPower",
        "FullPower",
        "NetworkWide"
      ]
    },
    NodeType: {
      name: "NodeType",
      dataType: "string",
      defVal: "Any",
      values: [
        "Any",
        "Controller",
        "Slave",
        "Stop"
      ]
    },
    Timeout: {
      name: "Timeout",
      dataType: "ui1",
      defVal: 30,
      min: 0,
      max: 600
    },
    Multiple: {
      name: "Multiple",
      dataType: "boolean",
      defVal: 0
    },
    Node: {
      name: "Node",
      dataType: "ui1",
      min: 0,
      max: 255
    },
    Device: {
      name: "Device",
      dataType: "ui4"
    },
    PollingEnabled: {
      name: "PollingEnabled",
      dataType: "boolean",
      defVal: 1
    },
    PollDelayInitial: {
      name: "PollDelayInitial",
      dataType: "ui1",
      defVal: 10,
      min: 0,
      max: 600
    },
    PollDelayDeadTime: {
      name: "PollDelayDeadTime",
      dataType: "ui1",
      defVal: 10,
      min: 0,
      max: 600
    },
    PollMinDelay: {
      name: "PollMinDelay",
      dataType: "ui1",
      defVal: 60,
      min: 0,
      max: 600
    },
    PollFrequency: {
      name: "PollFrequency",
      dataType: "ui1",
      defVal: 10,
      min: 0,
      max: 600
    },
    Reload: {
      name: "Reload",
      dataType: "boolean",
      defVal: 1
    }
  },
  actions: {
    ResetNetwork: {
      in: [
        { name: "ResetMode", stateVar: "ResetMode" },
        { name: "HomeID", stateVar: "NetStatusText" },
        { name: "ZeroMemory", stateVar: "Multiple" }
      ]
    },
    PutByte: {
      in: [
        { name: "StartAddress", stateVar: "NetStatusText" },
        { name: "StopAddress", stateVar: "NetStatusText" },
        { name: "Value", stateVar: "NetStatusText" }
      ]
    },
    ReconfigureAllNodes: {
      in: [
        { name: "FailedOnly", stateVar: "Multiple" }
      ]
    },
    UpdateNetwork: {},
    UpdateNeighbors: {
      in: [
        { name: "Device", stateVar: "Device" }
      ]
    },
    BackupDongle: {
      in: [
        { name: "Restore", stateVar: "PollingEnabled" }
      ]
    },
    PollAllNodes: {},
    RemoveNodes: {
      in: [
        { name: "InclusionMode", stateVar: "InclusionMode" },
        { name: "NodeType", stateVar: "NodeType" },
        { name: "Timeout", stateVar: "Timeout" },
        { name: "Multiple", stateVar: "Multiple" },
        { name: "Reload", stateVar: "Reload" }
      ]
    },
    AddNodes: {
      in: [
        { name: "InclusionMode", stateVar: "InclusionMode" },
        { name: "NodeType", stateVar: "NodeType" },
        { name: "Timeout", stateVar: "Timeout" },
        { name: "Multiple", stateVar: "Multiple" },
        { name: "ControllerShift", stateVar: "Multiple" },
        { name: "Reload", stateVar: "Reload" }
      ]
    },
    DownloadNetwork: {},
    HealNetwork: {
      in: [
        { name: "BatteryMinutes", stateVar: "Timeout" },
        { name: "Node", stateVar: "Node" },
        { name: "StressCycles", stateVar: "Timeout" },
        { name: "Configure", stateVar: "Multiple" },
        { name: "ManualRoute", stateVar: "Multiple" },
        { name: "StartStage", stateVar: "Timeout" },
        { name: "StopStage", stateVar: "Timeout" }
      ]
    },
    SetPolling: {
      in: [
        { name: "IsTemporary", stateVar: "Multiple" },
        { name: "PollingEnabled", stateVar: "PollingEnabled" },
        { name: "PollDelayInitial", stateVar: "PollDelayInitial" },
        { name: "PollDelayDeadTime", stateVar: "PollDelayDeadTime" },
        { name: "PollMinDelay", stateVar: "PollMinDelay" },
        { name: "PollFrequency", stateVar: "PollFrequency" }
      ]
    },
    SendData: {
      in: [
        { name: "Node", stateVar: "Node" },
        { name: "Data", stateVar: "NetStatusText" }
      ]
    },
    SimulateIncomingData: {
      in: [
        { name: "Data", stateVar: "NetStatusText" }
      ]
    }
  }
};

