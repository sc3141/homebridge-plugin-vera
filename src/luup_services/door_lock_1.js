module.exports = {
  serviceType: "door_lock_1",
  variables: {
    Target: {
      dataType: boolean,
      eventable: false
    },
    Status: {
      dataType: boolean,
      shortCode: locked
    },
    PinCodes: {
      dataType: string,
      shortCode: pincodes
    },
    sl_UserCode: {
      dataType: string
    },
    sl_PinFailed: {
      dataType: boolean
    },
    sl_CodeChanged: {
      dataType: int
    },
    sl_LockButton: {
      dataType: boolean
    },
    sl_LockFailure: {
      dataType: boolean
    },
    sl_UnauthUser: {
      dataType: string
    },
    sl_PinProgramSuccess: {
      dataType: string
    },
    sl_PinRemoveSuccess: {
      dataType: string
    },
    sl_PinProgramFail: {
      dataType: string
    },
    sl_LockChanged: {
      dataType: string
    },
    sl_LowBattery: {
      dataType: boolean
    },
    sl_VeryLowBattery: {
      dataType: boolean
    },
    dateTime: {
      dataType: dateTime
    },
    ui4: {
      dataType: ui4
    },
    ui1: {
      dataType: ui1
    }
  },
  actions: {
    SetTarget: {
      in: {
        newTargetValue: "Target"
      }
    },
    SetPin: {
      out: {
        json: "PinCodes",
        UserCodeName: "sl_UserCode",
        newPin: "sl_UserCode",
        UserCode: "ui4"
      }
    },
    SetPinValidityDate: {
      out: {
        UserCode: "ui4",
        StartDate: "dateTime",
        StopDate: "dateTime",
        Replace: "Target",
        slotID: "ui4"
      }
    },
    SetPinValidityWeekly: {
      out: {
        UserCode: "ui4",
        DayOfWeek: "ui4",
        StartHour: "ui1",
        StartMinute: "ui1",
        StopHour: "ui1",
        StopMinute: "ui1",
        Replace: "Target",
        slotID: "ui4"
      }
    },
    ClearPinValidity: {
      in: {
        UserCode: "ui4",
        slotID: "ui4"
      }
    },
    ClearPin: {
      in: {
        UserCode: "sl_UserCode"
      }
    },
    RenamePin: {
      in: {
        UserCode: "sl_UserCode",
        UserCodeName: "sl_UserCode"
      }
    }
  }
};

