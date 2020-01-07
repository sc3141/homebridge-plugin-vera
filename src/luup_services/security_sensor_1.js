module.exports = {
  serviceType: "security_sensor_1",
  variables: {
    Tripped: {
      name: "Tripped",
      dataType: "boolean",
      defVal: false,
      shortCode: "tripped",
      eventable: true
    },
    Armed: {
      name: "Armed",
      dataType: "boolean",
      defVal: 0,
      shortCode: "armed",
      eventable: true
    },
    ArmedTripped: {
      name: "ArmedTripped",
      dataType: "boolean",
      defVal: 0,
      shortCode: "armedtripped",
      eventable: true
    },
    LastTrip: {
      name: "LastTrip",
      dataType: "i4",
      shortCode: "lasttrip"
    }
  },
  actions: {
    SetArmed: {
      in: [
        { name: "newArmedValue", stateVar: "Armed" }
      ]
    }
  }
};

