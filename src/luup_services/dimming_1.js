module.exports = {
  serviceType: "dimming_1",
  variables: {
    LoadLevelTarget: {
      name: "LoadLevelTarget",
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100,
      eventable: false
    },
    LoadLevelStatus: {
      name: "LoadLevelStatus",
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100,
      shortCode: "level",
      eventable: true
    },
    MinLevel: {
      name: "MinLevel",
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100,
      eventable: false
    },
    OnEffectLevel: {
      name: "OnEffectLevel",
      optional: true,
      dataType: "ui1",
      defVal: 100,
      min: 0,
      max: 100,
      eventable: false
    },
    OnEffect: {
      name: "OnEffect",
      optional: true,
      dataType: "string",
      defVal: "Default",
      values: [
        "OnEffectLevel",
        "LastSetting",
        "Default"
      ],
      eventable: false
    },
    ValidOutputValues: {
      name: "ValidOutputValues",
      optional: true,
      dataType: "string",
      eventable: false
    },
    StepDelta: {
      name: "StepDelta",
      optional: true,
      dataType: "ui1",
      defVal: 0,
      min: 1,
      max: 100,
      eventable: true
    },
    RampRate: {
      name: "RampRate",
      optional: true,
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100,
      eventable: true
    },
    RampTime: {
      name: "RampTime",
      optional: true,
      dataType: "ui4",
      defVal: 0,
      min: 0,
      max: 4294967295,
      eventable: false
    },
    IsRamping: {
      name: "IsRamping",
      optional: true,
      dataType: "boolean",
      defVal: 0,
      eventable: true
    },
    RampPaused: {
      name: "RampPaused",
      optional: true,
      dataType: "boolean",
      defVal: 0,
      eventable: true
    },
    TurnOnBeforeDim: {
      name: "TurnOnBeforeDim",
      optional: true,
      dataType: "boolean",
      defVal: 1
    },
    AllowZeroLevel: {
      name: "AllowZeroLevel",
      optional: true,
      dataType: "boolean",
      defVal: 0
    }
  },
  actions: {
    SetLoadLevelTarget: {
      in: [
        { name: "newLoadlevelTarget", stateVar: "LoadLevelTarget" }
      ]
    },
    GetLoadLevelTarget: {
      out: [
        { name: "GetLoadlevelTarget", stateVar: "LoadLevelTarget" }
      ]
    },
    GetLoadLevelStatus: {
      out: [
        { name: "retLoadlevelStatus", stateVar: "LoadLevelStatus" }
      ]
    },
    SetOnEffectLevel: {
      in: [
        { name: "newOnEffectLevel", stateVar: "OnEffectLevel" }
      ]
    },
    SetOnEffect: {
      in: [
        { name: "newOnEffect", stateVar: "OnEffect" }
      ]
    },
    GetOnEffectParameters: {
      out: [
        { name: "retOnEffect", stateVar: "OnEffect" },
        { name: "retOnEffectLevel", stateVar: "OnEffectLevel" }
      ]
    },
    StepUp: {},
    StepDown: {},
    StartRampUp: {},
    StartRampDown: {},
    StopRamp: {},
    StartRampToLevel: {
      in: [
        { name: "newLoadLevelTarget", stateVar: "LoadLevelTarget" },
        { name: "newRampTime", stateVar: "RampTime" }
      ]
    },
    SetStepDelta: {
      in: [
        { name: "newStepDelta", stateVar: "StepDelta" }
      ]
    },
    GetStepDelta: {
      out: [
        { name: "retStepDelta", stateVar: "StepDelta" }
      ]
    },
    SetRampRate: {
      in: [
        { name: "newRampRate", stateVar: "RampRate" }
      ]
    },
    GetRampRate: {
      out: [
        { name: "retRampRate", stateVar: "RampRate" }
      ]
    },
    PauseRamp: {},
    ResumeRamp: {},
    GetIsRamping: {
      out: [
        { name: "retIsRamping", stateVar: "IsRamping" }
      ]
    },
    GetRampPaused: {
      out: [
        { name: "retRampPaused", stateVar: "RampPaused" }
      ]
    },
    GetRampTime: {
      out: [
        { name: "retRampTime", stateVar: "RampTime" }
      ]
    }
  }
};

