module.exports = {
  serviceType: "temperature_setpoint_1",
  variables: {
    Application: {
      name: "Application",
      dataType: "string",
      eventable: true
    },
    CurrentSetpoint: {
      name: "CurrentSetpoint",
      dataType: "i4",
      shortCode: "setpoint",
      eventable: true
    },
    SetpointAchieved: {
      name: "SetpointAchieved",
      optional: true,
      dataType: "boolean",
      defVal: 0,
      eventable: true
    },
    Name: {
      name: "Name",
      optional: true,
      dataType: "string",
      defVal: "",
      eventable: true
    }
  },
  actions: {
    GetApplication: {
      out: [
        { name: "CurrentApplication", stateVar: "Application" }
      ]
    },
    SetApplication: {
      in: [
        { name: "NewApplication", stateVar: "Application" }
      ]
    },
    SetCurrentSetpoint: {
      in: [
        { name: "NewCurrentSetpoint", stateVar: "CurrentSetpoint" }
      ]
    },
    GetCurrentSetpoint: {
      out: [
        { name: "CurrentSP", stateVar: "CurrentSetpoint" }
      ]
    },
    GetSetpointAchieved: {
      out: [
        { name: "CurrentSPA", stateVar: "SetpointAchieved" }
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

