module.exports = {
  serviceType: "switch_power_1",
  variables: {
    Target: {
      dataType: "boolean",
      defVal: 0,
      eventable: false
    },
    Status: {
      dataType: "boolean",
      defVal: 0,
      shortCode: "status"
    }
  },
  actions: {
    SetTarget: {
      in: {
        newTargetValue: "Target"
      }
    },
    GetTarget: {
      out: {
        RetTargetValue: "Target"
      }
    },
    GetStatus: {
      out: {
        ResultStatus: "Status"
      }
    }
  }
};

