module.exports = {
  serviceType: "protection_1",
  variables: {
    LocalProtectionStateTarget: {
      name: "LocalProtectionStateTarget",
      dataType: "string",
      eventable: false
    },
    LocalProtectionState: {
      name: "LocalProtectionState",
      dataType: "string",
      eventable: false
    },
    RFProtectionStateTarget: {
      name: "RFProtectionStateTarget",
      dataType: "string",
      eventable: false
    },
    RFProtectionState: {
      name: "RFProtectionState",
      dataType: "string",
      eventable: false
    }
  },
  actions: {
    SetLocalProtectionState: {
      in: [
        { name: "newTargetValue", stateVar: "LocalProtectionStateTarget" }
      ]
    },
    SetRFProtectionState: {
      in: [
        { name: "newTargetValue", stateVar: "LocalProtectionStateTarget" }
      ]
    }
  }
};

