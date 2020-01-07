module.exports = {
  serviceType: "ule_network_1",
  variables: {
    Address: {
      name: "Address",
      dataType: "string"
    }
  },
  actions: {
    OpenRegistration: {
      in: [
        { name: "Mode" },
        { name: "Duration" }
      ]
    },
    GetAttribute: {
      in: [
        { name: "DeviceId" },
        { name: "UnitId" },
        { name: "Interface" },
        { name: "Attribute" }
      ]
    },
    GetAllAttributes: {
      in: [
        { name: "DeviceId" },
        { name: "UnitId" },
        { name: "Interface" }
      ]
    },
    SetAttribute: {
      in: [
        { name: "DeviceId" },
        { name: "UnitId" },
        { name: "Interface" },
        { name: "Attribute" },
        { name: "Value" }
      ]
    },
    GetDeviceInfo: {
      in: [
        { name: "DeviceId" }
      ]
    },
    DeleteDevice: {
      in: [
        { name: "DeviceId" }
      ]
    },
    GetDevices: {}
  }
};

