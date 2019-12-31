module.exports = {
  serviceType: "security_sensor_1",
  variables: {
    Tripped: {
      dataType: "boolean",
      defVal: false,
      shortCode: "tripped",
      eventable: true
    },
    Armed: {
      dataType: "boolean",
      defVal: 0,
      shortCode: "armed",
      eventable: true
    },
    ArmedTripped: {
      dataType: "boolean",
      defVal: 0,
      shortCode: "armedtripped",
      eventable: true
    },
    LastTrip: {
      dataType: "i4",
      shortCode: "lasttrip"
    }
  },
  actions: {
    SetArmed: {
      in: {
        newArmedValue: "Armed"
      }
    }
  }
};

