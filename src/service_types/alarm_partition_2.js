module.exports = {
  serviceType: "alarm_partition_2",
  variables: {
    ArmMode: {
      dataType: string,
      defVal: "Disarmed",
      values: [
        "Disarmed",
        "Armed"
      ],
      shortCode: armmode
    },
    DetailedArmMode: {
      dataType: string,
      defVal: "Ready",
      values: [
        "Disarmed",
        "Armed",
        "ArmedInstant",
        "Stay",
        "StayInstant",
        "Night",
        "NightInstant",
        "Force",
        "Ready",
        "Vacation",
        "NotReady",
        "FailedToArm",
        "EntryDelay",
        "ExitDelay"
      ],
      shortCode: detailedarmmode
    },
    Alarm: {
      dataType: string,
      defVal: "None",
      values: [
        "None",
        "Active"
      ],
      shortCode: alarm
    },
    ChimeEnabled: {
      dataType: boolean,
      defVal: false,
      shortCode: chimeenabled
    },
    AlarmMemory: {
      dataType: boolean,
      shortCode: alarmmemory
    },
    LastAlarmActive: {
      dataType: ui4,
      defVal: 0,
      shortCode: lastalarmactive
    },
    LastUser: {
      dataType: string,
      defVal: "",
      shortCode: lastuser
    },
    VendorStatus: {
      dataType: string,
      defVal: "",
      shortCode: vendorstatus
    },
    VendorStatusCode: {
      dataType: string,
      shortCode: vendorstatuscode
    },
    VendorStatusData: {
      dataType: string,
      shortCode: vendorstatusdata
    }
  },
  actions: {
    RequestArmMode: {
      in: {
        State: "DetailedArmMode",
        PINCode: "string"
      }
    },
    RequestQuickArmMode: {
      in: {
        State: "DetailedArmMode"
      }
    },
    RequestPanicMode: {
      in: {
        State: "string"
      }
    }
  }
};

