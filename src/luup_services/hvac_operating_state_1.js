module.exports = {
  serviceType: "hvac_operating_state_1",
  variables: {
    ModeState: {
      name: "ModeState",
      dataType: "string",
      defVal: "Off",
      values: [
        "Idle",
        "Heating",
        "Cooling",
        "FanOnly",
        "PendingHeat",
        "PendingCool",
        "Vent"
      ],
      shortCode: "hvacstate"
    }
  }};

