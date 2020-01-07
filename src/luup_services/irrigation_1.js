module.exports = {
  serviceType: "irrigation_1",
  variables: {
    SystemConfig: {
      name: "SystemConfig",
      dataType: "string"
    },
    ValveId: {
      name: "ValveId",
      dataType: "ui1"
    },
    MasterValve: {
      name: "MasterValve",
      dataType: "boolean",
      defVal: 0
    },
    ValveConfig: {
      name: "ValveConfig",
      dataType: "string"
    },
    Duration: {
      name: "Duration",
      dataType: "ui2"
    },
    ValveTable: {
      name: "ValveTable",
      dataType: "string"
    },
    ValveTableId: {
      name: "ValveTableId",
      dataType: "ui1"
    },
    ValveTablesToRun: {
      name: "ValveTablesToRun",
      dataType: "string"
    }
  },
  actions: {
    SetConfig: {
      in: [
        { name: "SystemConfig", stateVar: "SystemConfig" }
      ]
    },
    SetValveConfig: {
      in: [
        { name: "ValveId", stateVar: "ValveId" },
        { name: "MasterValve", stateVar: "MasterValve" },
        { name: "ValveConfig", stateVar: "ValveConfig" }
      ]
    },
    RunValve: {
      in: [
        { name: "ValveId", stateVar: "ValveId" },
        { name: "MasterValve", stateVar: "MasterValve" },
        { name: "Duration", stateVar: "Duration" }
      ]
    },
    SetValveTable: {
      in: [
        { name: "ValveTableId", stateVar: "ValveTableId" },
        { name: "ValveTable", stateVar: "ValveTable" }
      ]
    },
    RunValveTable: {
      in: [
        { name: "ValveTablesToRun", stateVar: "ValveTablesToRun" }
      ]
    },
    Shutoff: {
      in: [
        { name: "Duration", stateVar: "Duration" }
      ]
    }
  }
};

