module.exports = {
  serviceType: "temperature_setpoint_1",
  variables: {
    Application: {
      dataType: string,
      eventable: true
    },
    CurrentSetpoint: {
      dataType: i4,
      shortCode: setpoint,
      eventable: true
    },
    SetpointAchieved: {
      optional: true,
      dataType: boolean,
      defVal: 0,
      eventable: true
    },
    Name: {
      optional: true,
      dataType: string,
      defVal: "",
      eventable: true
    }
  },
  actions: {
    GetApplication: {
      out: {
        CurrentApplication: "Application"
      }
    },
    SetApplication: {
      in: {
        NewApplication: "Application"
      }
    },
    SetCurrentSetpoint: {
      in: {
        NewCurrentSetpoint: "CurrentSetpoint"
      }
    },
    GetCurrentSetpoint: {
      out: {
        CurrentSP: "CurrentSetpoint"
      }
    },
    GetSetpointAchieved: {
      out: {
        CurrentSPA: "SetpointAchieved"
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

