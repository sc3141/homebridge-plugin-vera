module.exports = {
  serviceType: "home_automation_gateway_1",
  variables: {
    UserData: {
      name: "UserData",
      dataType: "string"
    },
    DataFormat: {
      name: "DataFormat",
      dataType: "string",
      defVal: "xml",
      values: [
        "json",
        "xml"
      ]
    },
    DeviceNum: {
      name: "DeviceNum",
      dataType: "ui4"
    },
    DataVersion: {
      name: "DataVersion",
      dataType: "ui4"
    },
    UDN: {
      name: "UDN",
      dataType: "string"
    },
    ActiveScenes: {
      name: "ActiveScenes",
      dataType: "string"
    },
    DataVersionUserData: {
      name: "DataVersionUserData",
      dataType: "ui4"
    },
    DataVersionStatus: {
      name: "DataVersionStatus",
      dataType: "ui4"
    },
    Reload: {
      name: "Reload",
      dataType: "boolean",
      defVal: 1
    }
  },
  actions: {
    Reload: {},
    GetUserData: {
      out: [
        { name: "UserData", stateVar: "UserData" },
        { name: "DataFormat", stateVar: "DataFormat" },
        { name: "DataVersion", stateVar: "DataVersion" }
      ]
    },
    ModifyUserData: {
      out: [
        { name: "inUserData", stateVar: "UserData" },
        { name: "UserData", stateVar: "UserData" },
        { name: "DataFormat", stateVar: "DataFormat" },
        { name: "Reload", stateVar: "Reload" }
      ]
    },
    SetVariable: {
      out: [
        { name: "DeviceNum", stateVar: "DeviceNum" },
        { name: "UDN", stateVar: "UDN" },
        { name: "Service", stateVar: "UserData" },
        { name: "Variable", stateVar: "UserData" },
        { name: "Value", stateVar: "UserData" }
      ]
    },
    GetVariable: {
      out: [
        { name: "DeviceNum", stateVar: "DeviceNum" },
        { name: "UDN", stateVar: "UDN" },
        { name: "Service", stateVar: "UserData" },
        { name: "Variable", stateVar: "UserData" },
        { name: "Value", stateVar: "UserData" }
      ]
    },
    GetStatus: {
      out: [
        { name: "Status", stateVar: "UserData" },
        { name: "DataFormat", stateVar: "DataFormat" },
        { name: "DeviceNum", stateVar: "DeviceNum" },
        { name: "UDN", stateVar: "UDN" }
      ]
    },
    GetActions: {
      out: [
        { name: "DeviceNum", stateVar: "DeviceNum" },
        { name: "UDN", stateVar: "UDN" },
        { name: "DataFormat", stateVar: "DataFormat" },
        { name: "Actions", stateVar: "UserData" }
      ]
    },
    RunScene: {
      in: [
        { name: "SceneNum", stateVar: "DeviceNum" }
      ]
    },
    SceneOff: {
      in: [
        { name: "SceneNum", stateVar: "DeviceNum" }
      ]
    },
    SetHouseMode: {
      in: [
        { name: "Mode", stateVar: "DeviceNum" }
      ]
    },
    RunLua: {
      in: [
        { name: "DeviceNum", stateVar: "DeviceNum" },
        { name: "Code", stateVar: "UDN" }
      ]
    },
    ProcessChildDevices: {
      in: [
        { name: "DeviceNumParent", stateVar: "DeviceNum" },
        { name: "DeviceList", stateVar: "UDN" }
      ]
    },
    CreateDevice: {
      out: [
        { name: "DeviceNum", stateVar: "DeviceNum" },
        { name: "deviceType", stateVar: "UDN" },
        { name: "internalID", stateVar: "UDN" },
        { name: "Description", stateVar: "UDN" },
        { name: "UpnpDevFilename", stateVar: "UDN" },
        { name: "UpnpImplFilename", stateVar: "UDN" },
        { name: "IpAddress", stateVar: "UDN" },
        { name: "MacAddress", stateVar: "UDN" },
        { name: "DeviceNumParent", stateVar: "DeviceNum" },
        { name: "RoomNum", stateVar: "DeviceNum" },
        { name: "StateVariables", stateVar: "UDN" }
      ]
    },
    DeleteDevice: {
      in: [
        { name: "DeviceNum", stateVar: "DeviceNum" },
        { name: "UDN", stateVar: "UDN" }
      ]
    },
    CreatePlugin: {
      in: [
        { name: "PluginNum", stateVar: "DeviceNum" },
        { name: "StateVariables", stateVar: "UDN" }
      ]
    },
    DeletePlugin: {
      in: [
        { name: "PluginNum", stateVar: "DeviceNum" }
      ]
    },
    CreatePluginDevice: {
      in: [
        { name: "PluginNum", stateVar: "DeviceNum" },
        { name: "StateVariables", stateVar: "UDN" }
      ]
    },
    ImportUpnpDevice: {
      out: [
        { name: "DeviceNum", stateVar: "DeviceNum" },
        { name: "UDN", stateVar: "UDN" },
        { name: "RoomNum", stateVar: "DeviceNum" }
      ]
    },
    LogIpRequest: {
      in: [
        { name: "IpAddress", stateVar: "UDN" },
        { name: "MacAddress", stateVar: "UDN" }
      ]
    }
  }
};

