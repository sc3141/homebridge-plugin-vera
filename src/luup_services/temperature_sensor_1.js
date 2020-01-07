module.exports = {
  serviceType: "temperature_sensor_1",
  variables: {
    CurrentTemperature: {
      name: "CurrentTemperature",
      dataType: "i4",
      defVal: 2000,
      min: 0,
      max: 4000,
      shortCode: "temperature",
      eventable: true
    },
    Application: {
      name: "Application",
      dataType: "string",
      defVal: "Room",
      values: [
        "Room",
        "Outdoor",
        "Pipe",
        "AirDuct"
      ],
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
    GetCurrentTemperature: {
      out: [
        { name: "CurrentTemp", stateVar: "CurrentTemperature" }
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

