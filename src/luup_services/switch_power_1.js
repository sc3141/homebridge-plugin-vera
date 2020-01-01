module.exports = {
  serviceType: "switch_power_1",
  variables: {
    Target: {
      name: "Target",
      dataType: "boolean",
      defVal: 0,
      eventable: false
    },
    Status: {
      name: "Status",
      dataType: "boolean",
      defVal: 0,
      shortCode: "status"
    }
  },
  actions: {
    SetTarget: {
      in: [
        { name: "newTargetValue", stateVar: "Target" }
      ]
    },
    GetTarget: {
      out: [
        { name: "RetTargetValue", stateVar: "Target" }
      ]
    },
    GetStatus: {
      out: [
        { name: "ResultStatus", stateVar: "Status" }
      ]
    }
  }
};

