module.exports = {
  serviceType: "keypad_1",
  variables: {
    Status: {
      name: "Status",
      dataType: "boolean",
      shortCode: "locked"
    },
    PinCodes: {
      name: "PinCodes",
      dataType: "string",
      shortCode: "pincodes"
    },
    sl_UserCode: {
      name: "sl_UserCode",
      dataType: "string"
    },
    sl_PinFailed: {
      name: "sl_PinFailed",
      dataType: "boolean"
    },
    sl_CodeChanged: {
      name: "sl_CodeChanged",
      dataType: "int"
    },
    sl_LockButton: {
      name: "sl_LockButton",
      dataType: "boolean"
    },
    sl_LockFailure: {
      name: "sl_LockFailure",
      dataType: "boolean"
    },
    sl_UnauthUser: {
      name: "sl_UnauthUser",
      dataType: "string"
    },
    sl_LowBattery: {
      name: "sl_LowBattery",
      dataType: "boolean"
    },
    sl_VeryLowBattery: {
      name: "sl_VeryLowBattery",
      dataType: "boolean"
    },
    dateTime: {
      name: "dateTime",
      dataType: "dateTime"
    },
    ui4: {
      name: "ui4",
      dataType: "ui4"
    },
    ui1: {
      name: "ui1",
      dataType: "ui1"
    }
  },
  actions: {
    SetPin: {
      out: [
        { name: "json", stateVar: "PinCodes" },
        { name: "UserCodeName", stateVar: "sl_UserCode" },
        { name: "newPin", stateVar: "sl_UserCode" },
        { name: "UserCode", stateVar: "ui4" }
      ]
    },
    SetPinValidityDate: {
      out: [
        { name: "UserCode", stateVar: "ui4" },
        { name: "StartDate", stateVar: "dateTime" },
        { name: "StopDate", stateVar: "dateTime" },
        { name: "Replace", stateVar: "Target" },
        { name: "slotID", stateVar: "ui4" }
      ]
    },
    SetPinValidityWeekly: {
      out: [
        { name: "UserCode", stateVar: "ui4" },
        { name: "DayOfWeek", stateVar: "ui4" },
        { name: "StartHour", stateVar: "ui1" },
        { name: "StartMinute", stateVar: "ui1" },
        { name: "StopHour", stateVar: "ui1" },
        { name: "StopMinute", stateVar: "ui1" },
        { name: "Replace", stateVar: "Target" },
        { name: "slotID", stateVar: "ui4" }
      ]
    },
    ClearPinValidity: {
      in: [
        { name: "UserCode", stateVar: "ui4" },
        { name: "slotID", stateVar: "ui4" }
      ]
    },
    ClearPin: {
      in: [
        { name: "UserCode", stateVar: "sl_UserCode" }
      ]
    }
  }
};

