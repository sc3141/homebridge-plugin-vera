module.exports = {
  serviceType: "home_automation_gateway_1",
  variables: {
    UserData: {
      dataType: "string"
    },
    DataFormat: {
      dataType: "string",
      defVal: "xml",
      values: [
        "json",
        "xml"
      ]
    },
    DeviceNum: {
      dataType: "ui4"
    },
    DataVersion: {
      dataType: "ui4"
    },
    UDN: {
      dataType: "string"
    },
    ActiveScenes: {
      dataType: "string"
    },
    DataVersionUserData: {
      dataType: "ui4"
    },
    DataVersionStatus: {
      dataType: "ui4"
    },
    Reload: {
      dataType: "boolean",
      defVal: 1
    }
  },
  actions: {
    Reload: {},
    GetUserData: {
      out: {
        UserData: "UserData",
        DataFormat: "DataFormat",
        DataVersion: "DataVersion"
      }
    },
    ModifyUserData: {
      out: {
        inUserData: "UserData",
        UserData: "UserData",
        DataFormat: "DataFormat",
        Reload: "Reload"
      }
    },
    SetVariable: {
      out: {
        DeviceNum: "DeviceNum",
        UDN: "UDN",
        Service: "UserData",
        Variable: "UserData",
        Value: "UserData"
      }
    },
    GetVariable: {
      out: {
        DeviceNum: "DeviceNum",
        UDN: "UDN",
        Service: "UserData",
        Variable: "UserData",
        Value: "UserData"
      }
    },
    GetStatus: {
      out: {
        Status: "UserData",
        DataFormat: "DataFormat",
        DeviceNum: "DeviceNum",
        UDN: "UDN"
      }
    },
    GetActions: {
      out: {
        DeviceNum: "DeviceNum",
        UDN: "UDN",
        DataFormat: "DataFormat",
        Actions: "UserData"
      }
    },
    RunScene: {
      in: {
        SceneNum: "DeviceNum"
      }
    },
    SceneOff: {
      in: {
        SceneNum: "DeviceNum"
      }
    },
    SetHouseMode: {
      in: {
        Mode: "DeviceNum"
      }
    },
    RunLua: {
      in: {
        DeviceNum: "DeviceNum",
        Code: "UDN"
      }
    },
    ProcessChildDevices: {
      in: {
        DeviceNumParent: "DeviceNum",
        DeviceList: "UDN"
      }
    },
    CreateDevice: {
      out: {
        DeviceNum: "DeviceNum",
        deviceType: "UDN",
        internalID: "UDN",
        Description: "UDN",
        UpnpDevFilename: "UDN",
        UpnpImplFilename: "UDN",
        IpAddress: "UDN",
        MacAddress: "UDN",
        DeviceNumParent: "DeviceNum",
        RoomNum: "DeviceNum",
        StateVariables: "UDN"
      }
    },
    DeleteDevice: {
      in: {
        DeviceNum: "DeviceNum",
        UDN: "UDN"
      }
    },
    CreatePlugin: {
      in: {
        PluginNum: "DeviceNum",
        StateVariables: "UDN"
      }
    },
    DeletePlugin: {
      in: {
        PluginNum: "DeviceNum"
      }
    },
    CreatePluginDevice: {
      in: {
        PluginNum: "DeviceNum",
        StateVariables: "UDN"
      }
    },
    ImportUpnpDevice: {
      out: {
        DeviceNum: "DeviceNum",
        UDN: "UDN",
        RoomNum: "DeviceNum"
      }
    },
    LogIpRequest: {
      in: {
        IpAddress: "UDN",
        MacAddress: "UDN"
      }
    }
  }
};

