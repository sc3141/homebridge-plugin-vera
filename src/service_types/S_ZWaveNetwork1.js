module.exports = {
  "serviceType": "S_ZWaveNetwork1",
  "variables": {
    /*
    "NetStatusID": {
      "dataType": "ui1"
    },
    "NetStatusText": {
      "dataType": "string"
    },
    "ActiveScenes": {
      "dataType": "string"
    },
    "LastError": {
      "dataType": "string"
    },
    "ResetMode": {
      "dataType": "string",
      "defVal": "SIS",
      "enumeration": [
        "SIS",
        "SUC",
        "None"
      ]
    },
    "InclusionMode": {
      "dataType": "string",
      "defVal": "LowPower",
      "enumeration": [
        "LowPower",
        "FullPower",
        "NetworkWide"
      ]
    },
    "NodeType": {
      "dataType": "string",
      "defVal": "Any",
      "enumeration": [
        "Any",
        "Controller",
        "Slave",
        "Stop"
      ]
    },
    "Timeout": {
      "dataType": "ui1",
      "defVal": 30,
      "min": 0,
      "max": 600
    },
    "Multiple": {
      "dataType": "boolean",
      "defVal": 0
    },
    "Node": {
      "dataType": "ui1",
      "min": 0,
      "max": 255
    },
    "Device": {
      "dataType": "ui4"
    },
    "PollingEnabled": {
      "dataType": "boolean",
      "defVal": 1
    },
    "PollDelayInitial": {
      "dataType": "ui1",
      "defVal": 10,
      "min": 0,
      "max": 600
    },
    "PollDelayDeadTime": {
      "dataType": "ui1",
      "defVal": 10,
      "min": 0,
      "max": 600
    },
    "PollMinDelay": {
      "dataType": "ui1",
      "defVal": 60,
      "min": 0,
      "max": 600
    },
    "PollFrequency": {
      "dataType": "ui1",
      "defVal": 10,
      "min": 0,
      "max": 600
    },
    "Reload": {
      "defVal": 1,
      "dataType": "boolean"
    },
    */
  },
  "actions": {
    /*
    "ResetNetwork": {
      "args": {
        "in": {
          "ResetMode": {
            "var": "ResetMode"
          },
          "HomeID": {
            "var": "NetStatusText"
          },
          "ZeroMemory": {
            "var": "Multiple"
          }
        }
      }
    },
    "PutByte": {
      "args": {
        "in": {
          "StartAddress": {
            "var": "NetStatusText"
          },
          "StopAddress": {
            "var": "NetStatusText"
          },
          "Value": {
            "var": "NetStatusText"
          }
        }
      }
    },
    "ReconfigureAllNodes": {
      "args": {
        "in": {
          "FailedOnly": {
            "var": "Multiple"
          }
        }
      }
    },
    "UpdateNetwork": {},
    "UpdateNeighbors": {
      "args": {
        "in": {
          "Device": {
            "var": "Device"
          }
        }
      }
    },
    "BackupDongle": {
      "args": {
        "in": {
          "Restore": {
            "var": "PollingEnabled"
          }
        }
      }
    },
    "PollAllNodes": {},
    "RemoveNodes": {
      "args": {
        "in": {
          "InclusionMode": {
            "var": "InclusionMode"
          },
          "NodeType": {
            "var": "NodeType"
          },
          "Timeout": {
            "var": "Timeout"
          },
          "Multiple": {
            "var": "Multiple"
          },
          "Reload": {
            "var": "Reload"
          }
        }
      }
    },
    "AddNodes": {
      "args": {
        "in": {
          "InclusionMode": {
            "var": "InclusionMode"
          },
          "NodeType": {
            "var": "NodeType"
          },
          "Timeout": {
            "var": "Timeout"
          },
          "Multiple": {
            "var": "Multiple"
          },
          "ControllerShift": {
            "var": "Multiple"
          },
          "Reload": {
            "var": "Reload"
          }
        }
      }
    },
    "DownloadNetwork": {},
    "HealNetwork": {
      "args": {
        "in": {
          "BatteryMinutes": {
            "var": "Timeout"
          },
          "Node": {
            "var": "Node"
          },
          "StressCycles": {
            "var": "Timeout"
          },
          "Configure": {
            "var": "Multiple"
          },
          "ManualRoute": {
            "var": "Multiple"
          },
          "StartStage": {
            "var": "Timeout"
          },
          "StopStage": {
            "var": "Timeout"
          }
        }
      }
    },
    "SetPolling": {
      "args": {
        "in": {
          "IsTemporary": {
            "var": "Multiple"
          },
          "PollingEnabled": {
            "var": "PollingEnabled"
          },
          "PollDelayInitial": {
            "var": "PollDelayInitial"
          },
          "PollDelayDeadTime": {
            "var": "PollDelayDeadTime"
          },
          "PollMinDelay": {
            "var": "PollMinDelay"
          },
          "PollFrequency": {
            "var": "PollFrequency"
          }
        }
      }
    },
    "SendData": {
      "args": {
        "in": {
          "Node": {
            "var": "Node"
          },
          "Data": {
            "var": "NetStatusText"
          }
        }
      }
    },
    "SimulateIncomingData": {
      "args": {
        "in": {
          "Data": {
            "var": "NetStatusText"
          }
        }
      }
    },
    */
  }
};
