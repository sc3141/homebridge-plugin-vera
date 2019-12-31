module.exports = {
  serviceType: "irrigation_1",
  variables: {
    SystemConfig: {
      dataType: "string"
    },
    ValveId: {
      dataType: "ui1"
    },
    MasterValve: {
      dataType: "boolean",
      defVal: 0
    },
    ValveConfig: {
      dataType: "string"
    },
    Duration: {
      dataType: "ui2"
    },
    ValveTable: {
      dataType: "string"
    },
    ValveTableId: {
      dataType: "ui1"
    },
    ValveTablesToRun: {
      dataType: "string"
    }
  },
  actions: {
    SetConfig: {
      in: {
        SystemConfig: "SystemConfig"
      }
    },
    SetValveConfig: {
      in: {
        ValveId: "ValveId",
        MasterValve: "MasterValve",
        ValveConfig: "ValveConfig"
      }
    },
    RunValve: {
      in: {
        ValveId: "ValveId",
        MasterValve: "MasterValve",
        Duration: "Duration"
      }
    },
    SetValveTable: {
      in: {
        ValveTableId: "ValveTableId",
        ValveTable: "ValveTable"
      }
    },
    RunValveTable: {
      in: {
        ValveTablesToRun: "ValveTablesToRun"
      }
    },
    Shutoff: {
      in: {
        Duration: "Duration"
      }
    }
  }
};

