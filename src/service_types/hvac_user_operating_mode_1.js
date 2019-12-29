module.exports = {
  serviceType: "hvac_user_operating_mode_1",
  variables: {
    ModeTarget: {
      dataType: string,
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
      dataType: string,
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
      shortCode: mode
    },
    EnergyModeTarget: {
      dataType: string,
      defVal: "Normal",
      values: [
        "Normal",
        "EnergySavingsMode"
      ]
    },
    EnergyModeStatus: {
      dataType: string,
      defVal: "Normal",
      values: [
        "Normal",
        "EnergySavingsMode"
      ]
    },
    Name: {
      optional: true,
      dataType: string,
      defVal: ""
    },
    A_ARG_TYPE_r4: {
      dataType: r4
    }
  },
  actions: {
    SetModeTarget: {
      in: {
        NewModeTarget: "ModeTarget",
        NewHeatSetpoint: "A_ARG_TYPE_r4",
        NewCoolSetpoint: "A_ARG_TYPE_r4"
      }
    },
    SetEnergyModeTarget: {
      in: {
        NewModeTarget: "EnergyModeTarget"
      }
    },
    GetModeTarget: {
      out: {
        CurrentModeTarget: "ModeTarget"
      }
    },
    GetModeStatus: {
      out: {
        CurrentModeStatus: "ModeStatus"
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

