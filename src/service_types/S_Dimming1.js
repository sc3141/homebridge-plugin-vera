module.exports = {
  "serviceType": "S_Dimming1",
  "variables": {
    /*
    "LoadLevelTarget": {
      "eventable": false,
      "dataType": "ui1",
      "defVal": 0,
      "min": 0,
      "max": 100
    },
    "LoadLevelStatus": {
      "eventable": true,
      "dataType": "ui1",
      "defVal": 0,
      "shortCode": "level",
      "min": 0,
      "max": 100
    },
    "MinLevel": {
      "eventable": false,
      "dataType": "ui1",
      "defVal": 0,
      "min": 0,
      "max": 100
    },
    "OnEffectLevel": {
      "optional": true,
      "eventable": false,
      "dataType": "ui1",
      "defVal": 100,
      "min": 0,
      "max": 100
    },
    "OnEffect": {
      "optional": true,
      "eventable": false,
      "dataType": "string",
      "defVal": "Default",
      "enumeration": [
        "OnEffectLevel",
        "LastSetting",
        "Default"
      ]
    },
    "ValidOutputValues": {
      "optional": true,
      "eventable": false,
      "dataType": "string"
    },
    "StepDelta": {
      "optional": true,
      "eventable": true,
      "dataType": "ui1",
      "defVal": 0,
      "min": 1,
      "max": 100
    },
    "RampRate": {
      "optional": true,
      "eventable": true,
      "dataType": "ui1",
      "defVal": 0,
      "min": 0,
      "max": 100
    },
    "RampTime": {
      "optional": true,
      "eventable": false,
      "dataType": "ui4",
      "defVal": 0,
      "min": 0,
      "max": 4294967295
    },
    "IsRamping": {
      "optional": true,
      "eventable": true,
      "dataType": "boolean",
      "defVal": 0
    },
    "RampPaused": {
      "optional": true,
      "eventable": true,
      "dataType": "boolean",
      "defVal": 0
    },
    "TurnOnBeforeDim": {
      "optional": true,
      "dataType": "boolean",
      "defVal": 1
    },
    "AllowZeroLevel": {
      "optional": true,
      "dataType": "boolean",
      "defVal": 0
    },
    */
  },
  "actions": {
    /*
    "SetLoadLevelTarget": {
      "args": {
        "in": {
          "newLoadlevelTarget": {
            "var": "LoadLevelTarget"
          }
        }
      }
    },
    "GetLoadLevelTarget": {
      "args": {
        "out": {
          "GetLoadlevelTarget": {
            "var": "LoadLevelTarget"
          }
        }
      }
    },
    "GetLoadLevelStatus": {
      "args": {
        "out": {
          "retLoadlevelStatus": {
            "var": "LoadLevelStatus"
          }
        }
      }
    },
    "SetOnEffectLevel": {
      "optional": true,
      "args": {
        "in": {
          "newOnEffectLevel": {
            "var": "OnEffectLevel"
          }
        }
      }
    },
    "SetOnEffect": {
      "optional": true,
      "args": {
        "in": {
          "newOnEffect": {
            "var": "OnEffect"
          }
        }
      }
    },
    "GetOnEffectParameters": {
      "optional": true,
      "args": {
        "out": {
          "retOnEffect": {
            "var": "OnEffect"
          },
          "retOnEffectLevel": {
            "var": "OnEffectLevel"
          }
        }
      }
    },
    "StepUp": {
      "optional": true
    },
    "StepDown": {
      "optional": true
    },
    "StartRampUp": {
      "optional": true
    },
    "StartRampDown": {
      "optional": true
    },
    "StopRamp": {
      "optional": true
    },
    "StartRampToLevel": {
      "optional": true,
      "args": {
        "in": {
          "newLoadLevelTarget": {
            "var": "LoadLevelTarget"
          },
          "newRampTime": {
            "var": "RampTime"
          }
        }
      }
    },
    "SetStepDelta": {
      "optional": true,
      "args": {
        "in": {
          "newStepDelta": {
            "var": "StepDelta"
          }
        }
      }
    },
    "GetStepDelta": {
      "optional": true,
      "args": {
        "out": {
          "retStepDelta": {
            "var": "StepDelta"
          }
        }
      }
    },
    "SetRampRate": {
      "optional": true,
      "args": {
        "in": {
          "newRampRate": {
            "var": "RampRate"
          }
        }
      }
    },
    "GetRampRate": {
      "optional": true,
      "args": {
        "out": {
          "retRampRate": {
            "var": "RampRate"
          }
        }
      }
    },
    "PauseRamp": {
      "optional": true
    },
    "ResumeRamp": {
      "optional": true
    },
    "GetIsRamping": {
      "optional": true,
      "args": {
        "out": {
          "retIsRamping": {
            "var": "IsRamping"
          }
        }
      }
    },
    "GetRampPaused": {
      "optional": true,
      "args": {
        "out": {
          "retRampPaused": {
            "var": "RampPaused"
          }
        }
      }
    },
    "GetRampTime": {
      "optional": true,
      "args": {
        "out": {
          "retRampTime": {
            "var": "RampTime"
          }
        }
      }
    },
    */
  }
};
