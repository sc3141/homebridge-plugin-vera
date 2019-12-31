module.exports = {
  serviceType: "protection_1",
  variables: {
    LocalProtectionStateTarget: {
      dataType: "string",
      eventable: false
    },
    LocalProtectionState: {
      dataType: "string",
      eventable: false
    },
    RFProtectionStateTarget: {
      dataType: "string",
      eventable: false
    },
    RFProtectionState: {
      dataType: "string",
      eventable: false
    }
  },
  actions: {
    SetLocalProtectionState: {
      in: {
        newTargetValue: "LocalProtectionStateTarget"
      }
    },
    SetRFProtectionState: {
      in: {
        newTargetValue: "LocalProtectionStateTarget"
      }
    }
  }
};

