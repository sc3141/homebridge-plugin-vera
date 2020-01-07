module.exports = {
  serviceType: "alarm_partition_2",
  variables: {
    ArmMode: {
      name: "ArmMode",
      dataType: "string",
      defVal: "Disarmed",
      values: [
        "Disarmed",
        "Armed"
      ],
      shortCode: "armmode"
    },
    DetailedArmMode: {
      name: "DetailedArmMode",
      dataType: "string",
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
      shortCode: "detailedarmmode"
    },
    Alarm: {
      name: "Alarm",
      dataType: "string",
      defVal: "None",
      values: [
        "None",
        "Active"
      ],
      shortCode: "alarm"
    },
    ChimeEnabled: {
      name: "ChimeEnabled",
      dataType: "boolean",
      defVal: false,
      shortCode: "chimeenabled"
    },
    AlarmMemory: {
      name: "AlarmMemory",
      dataType: "boolean",
      shortCode: "alarmmemory"
    },
    LastAlarmActive: {
      name: "LastAlarmActive",
      dataType: "ui4",
      defVal: 0,
      shortCode: "lastalarmactive"
    },
    LastUser: {
      name: "LastUser",
      dataType: "string",
      defVal: "",
      shortCode: "lastuser"
    },
    VendorStatus: {
      name: "VendorStatus",
      dataType: "string",
      defVal: "",
      shortCode: "vendorstatus"
    },
    VendorStatusCode: {
      name: "VendorStatusCode",
      dataType: "string",
      shortCode: "vendorstatuscode"
    },
    VendorStatusData: {
      name: "VendorStatusData",
      dataType: "string",
      shortCode: "vendorstatusdata"
    }
  },
  actions: {
    RequestArmMode: {
      in: [
        { name: "State", stateVar: "DetailedArmMode" },
        { name: "PINCode", stateVar: "string" }
      ]
    },
    RequestQuickArmMode: {
      in: [
        { name: "State", stateVar: "DetailedArmMode" }
      ]
    },
    RequestPanicMode: {
      in: [
        { name: "State", stateVar: "string" }
      ]
    }
  }
};

