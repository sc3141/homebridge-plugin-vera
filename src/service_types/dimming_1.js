module.exports = {
  serviceType: "dimming_1",
  variables: {
    LoadLevelTarget: {
      dataType: ui1,
      defVal: 0,
      min: 0,
      max: 100,
      eventable: false
    },
    LoadLevelStatus: {
      dataType: ui1,
      defVal: 0,
      min: 0,
      max: 100,
      shortCode: level,
      eventable: true
    },
    MinLevel: {
      dataType: ui1,
      defVal: 0,
      min: 0,
      max: 100,
      eventable: false
    },
    OnEffectLevel: {
      optional: true,
      dataType: ui1,
      defVal: 100,
      min: 0,
      max: 100,
      eventable: false
    },
    OnEffect: {
      optional: true,
      dataType: string,
      defVal: "Default",
      values: [
        "OnEffectLevel",
        "LastSetting",
        "Default"
      ],
      eventable: false
    },
    ValidOutputValues: {
      optional: true,
      dataType: string,
      eventable: false
    },
    StepDelta: {
      optional: true,
      dataType: ui1,
      defVal: 0,
      min: 1,
      max: 100,
      eventable: true
    },
    RampRate: {
      optional: true,
      dataType: ui1,
      defVal: 0,
      min: 0,
      max: 100,
      eventable: true
    },
    RampTime: {
      optional: true,
      dataType: ui4,
      defVal: 0,
      min: 0,
      max: 4294967295,
      eventable: false
    },
    IsRamping: {
      optional: true,
      dataType: boolean,
      defVal: 0,
      eventable: true
    },
    RampPaused: {
      optional: true,
      dataType: boolean,
      defVal: 0,
      eventable: true
    },
    TurnOnBeforeDim: {
      optional: true,
      dataType: boolean,
      defVal: 1
    },
    AllowZeroLevel: {
      optional: true,
      dataType: boolean,
      defVal: 0
    }
  },
  actions: {
    SetLoadLevelTarget: {
      in: {
        newLoadlevelTarget: "LoadLevelTarget"
      }
    },
    GetLoadLevelTarget: {
      out: {
        GetLoadlevelTarget: "LoadLevelTarget"
      }
    },
    GetLoadLevelStatus: {
      out: {
        retLoadlevelStatus: "LoadLevelStatus"
      }
    },
    SetOnEffectLevel: {
      in: {
        newOnEffectLevel: "OnEffectLevel"
      }
    },
    SetOnEffect: {
      in: {
        newOnEffect: "OnEffect"
      }
    },
    GetOnEffectParameters: {
      out: {
        retOnEffect: "OnEffect",
        retOnEffectLevel: "OnEffectLevel"
      }
    },
    StepUp: {},
    StepDown: {},
    StartRampUp: {},
    StartRampDown: {},
    StopRamp: {},
    StartRampToLevel: {
      in: {
        newLoadLevelTarget: "LoadLevelTarget",
        newRampTime: "RampTime"
      }
    },
    SetStepDelta: {
      in: {
        newStepDelta: "StepDelta"
      }
    },
    GetStepDelta: {
      out: {
        retStepDelta: "StepDelta"
      }
    },
    SetRampRate: {
      in: {
        newRampRate: "RampRate"
      }
    },
    GetRampRate: {
      out: {
        retRampRate: "RampRate"
      }
    },
    PauseRamp: {},
    ResumeRamp: {},
    GetIsRamping: {
      out: {
        retIsRamping: "IsRamping"
      }
    },
    GetRampPaused: {
      out: {
        retRampPaused: "RampPaused"
      }
    },
    GetRampTime: {
      out: {
        retRampTime: "RampTime"
      }
    }
  }
};

