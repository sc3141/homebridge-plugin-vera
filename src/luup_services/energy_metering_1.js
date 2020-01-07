module.exports = {
  serviceType: "energy_metering_1",
  variables: {
    Watts: {
      name: "Watts",
      dataType: "ui4",
      shortCode: "watts"
    },
    ActualUsage: {
      name: "ActualUsage",
      dataType: "boolean"
    },
    WholeHouse: {
      name: "WholeHouse",
      dataType: "boolean",
      shortCode: "wholehouse"
    },
    Pulse: {
      name: "Pulse",
      dataType: "ui4",
      shortCode: "pulse"
    },
    UserSuppliedWattage: {
      name: "UserSuppliedWattage",
      dataType: "ui4"
    },
    KWH: {
      name: "KWH",
      dataType: "ui4",
      shortCode: "kwh"
    },
    DayKWH: {
      name: "DayKWH",
      dataType: "number"
    },
    WeekKWH: {
      name: "WeekKWH",
      dataType: "number"
    },
    MonthKWH: {
      name: "MonthKWH",
      dataType: "number"
    },
    YearKWH: {
      name: "YearKWH",
      dataType: "number"
    },
    LifeKWH: {
      name: "LifeKWH",
      dataType: "number"
    }
  },
  actions: {
    ResetKWH: {}
  }
};

