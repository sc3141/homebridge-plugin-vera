module.exports = {
  serviceType: "hvac_user_operating_mode_1",
  variables: {
    ModeTarget: {
      name: "ModeTarget",
      dataType: "string",
      defVal: "Off",
      values: [
        "Off",
        "HeatOn",
        "CoolOn",
        "AutoChangeOver",
        "AuxHeatOn",
        "EconomyHeatOn",
        "EmergencyHeatOn",
        "AuxCoolOn",
        "EconomyCoolOn",
        "BuildingProtection",
        "EnergySavingsMode"
      ]
    },
    ModeStatus: {
      name: "ModeStatus",
      dataType: "string",
      defVal: "Off",
      values: [
        "Off",
        "InDeadBand",
        "HeatOn",
        "CoolOn",
        "AutoChangeOver",
        "AuxHeatOn",
        "EconomyHeatOn",
        "EmergencyHeatOn",
        "AuxCoolOn",
        "EconomyCoolOn",
        "BuildingProtection",
        "EnergySavingsHeating",
        "EnergySavingsCooling"
      ],
      shortCode: "mode"
    },
    EnergyModeTarget: {
      name: "EnergyModeTarget",
      dataType: "string",
      defVal: "Normal",
      values: [
        "Normal",
        "EnergySavingsMode"
      ]
    },
    EnergyModeStatus: {
      name: "EnergyModeStatus",
      dataType: "string",
      defVal: "Normal",
      values: [
        "Normal",
        "EnergySavingsMode"
      ]
    },
    Name: {
      name: "Name",
      optional: true,
      dataType: "string",
      defVal: ""
    },
    A_ARG_TYPE_r4: {
      name: "A_ARG_TYPE_r4",
      dataType: "r4"
    }
  },
  actions: {
    SetModeTarget: {
      in: [
        { name: "NewModeTarget", stateVar: "ModeTarget" },
        { name: "NewHeatSetpoint", stateVar: "A_ARG_TYPE_r4" },
        { name: "NewCoolSetpoint", stateVar: "A_ARG_TYPE_r4" }
      ]
    },
    SetEnergyModeTarget: {
      in: [
        { name: "NewModeTarget", stateVar: "EnergyModeTarget" }
      ]
    },
    GetModeTarget: {
      out: [
        { name: "CurrentModeTarget", stateVar: "ModeTarget" }
      ]
    },
    GetModeStatus: {
      out: [
        { name: "CurrentModeStatus", stateVar: "ModeStatus" }
      ]
    },
    GetName: {
      out: [
        { name: "CurrentName", stateVar: "Name" }
      ]
    },
    SetName: {
      in: [
        { name: "NewName", stateVar: "Name" }
      ]
    }
  }
};

