module.exports = {
  serviceType: "z_wave_network_1",
  variables: {
    NetStatusID: {
      dataType: "ui1"
    },
    NetStatusText: {
      dataType: "string"
    },
    ActiveScenes: {
      dataType: "string"
    },
    LastError: {
      dataType: "string"
    },
    ResetMode: {
      dataType: "string",
      defVal: "SIS",
      values: [
        "SIS",
        "SUC",
        "None"
      ]
    },
    InclusionMode: {
      dataType: "string",
      defVal: "LowPower",
      values: [
        "LowPower",
        "FullPower",
        "NetworkWide"
      ]
    },
    NodeType: {
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
      dataType: "ui1",
      defVal: 30,
      min: 0,
      max: 600
    },
    Multiple: {
      dataType: "boolean",
      defVal: 0
    },
    Node: {
      dataType: "ui1",
      min: 0,
      max: 255
    },
    Device: {
      dataType: "ui4"
    },
    PollingEnabled: {
      dataType: "boolean",
      defVal: 1
    },
    PollDelayInitial: {
      dataType: "ui1",
      defVal: 10,
      min: 0,
      max: 600
    },
    PollDelayDeadTime: {
      dataType: "ui1",
      defVal: 10,
      min: 0,
      max: 600
    },
    PollMinDelay: {
      dataType: "ui1",
      defVal: 60,
      min: 0,
      max: 600
    },
    PollFrequency: {
      dataType: "ui1",
      defVal: 10,
      min: 0,
      max: 600
    },
    Reload: {
      dataType: "boolean",
      defVal: 1
    }
  },
  actions: {
    ResetNetwork: {
      in: {
        ResetMode: "ResetMode",
        HomeID: "NetStatusText",
        ZeroMemory: "Multiple"
      }
    },
    PutByte: {
      in: {
        StartAddress: "NetStatusText",
        StopAddress: "NetStatusText",
        Value: "NetStatusText"
      }
    },
    ReconfigureAllNodes: {
      in: {
        FailedOnly: "Multiple"
      }
    },
    UpdateNetwork: {},
    UpdateNeighbors: {
      in: {
        Device: "Device"
      }
    },
    BackupDongle: {
      in: {
        Restore: "PollingEnabled"
      }
    },
    PollAllNodes: {},
    RemoveNodes: {
      in: {
        InclusionMode: "InclusionMode",
        NodeType: "NodeType",
        Timeout: "Timeout",
        Multiple: "Multiple",
        Reload: "Reload"
      }
    },
    AddNodes: {
      in: {
        InclusionMode: "InclusionMode",
        NodeType: "NodeType",
        Timeout: "Timeout",
        Multiple: "Multiple",
        ControllerShift: "Multiple",
        Reload: "Reload"
      }
    },
    DownloadNetwork: {},
    HealNetwork: {
      in: {
        BatteryMinutes: "Timeout",
        Node: "Node",
        StressCycles: "Timeout",
        Configure: "Multiple",
        ManualRoute: "Multiple",
        StartStage: "Timeout",
        StopStage: "Timeout"
      }
    },
    SetPolling: {
      in: {
        IsTemporary: "Multiple",
        PollingEnabled: "PollingEnabled",
        PollDelayInitial: "PollDelayInitial",
        PollDelayDeadTime: "PollDelayDeadTime",
        PollMinDelay: "PollMinDelay",
        PollFrequency: "PollFrequency"
      }
    },
    SendData: {
      in: {
        Node: "Node",
        Data: "NetStatusText"
      }
    },
    SimulateIncomingData: {
      in: {
        Data: "NetStatusText"
      }
    }
  }
};

