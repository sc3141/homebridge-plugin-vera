module.exports = {
  serviceType: "temperature_sensor_1",
  variables: {
    CurrentTemperature: {
      dataType: "i4",
      defVal: 2000,
      min: 0,
      max: 4000,
      shortCode: "temperature",
      eventable: true
    },
    Application: {
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
      optional: true,
      dataType: "string",
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
    GetCurrentTemperature: {
      out: {
        CurrentTemp: "CurrentTemperature"
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

