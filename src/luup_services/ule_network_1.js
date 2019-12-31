module.exports = {
  serviceType: "ule_network_1",
  variables: {
    Address: {
      dataType: "string"
    }
  },
  actions: {
    OpenRegistration: {
      in: {
        Mode: null,
        Duration: null
      }
    },
    GetAttribute: {
      in: {
        DeviceId: null,
        UnitId: null,
        Interface: null,
        Attribute: null
      }
    },
    GetAllAttributes: {
      in: {
        DeviceId: null,
        UnitId: null,
        Interface: null
      }
    },
    SetAttribute: {
      in: {
        DeviceId: null,
        UnitId: null,
        Interface: null,
        Attribute: null,
        Value: null
      }
    },
    GetDeviceInfo: {
      in: {
        DeviceId: null
      }
    },
    DeleteDevice: {
      in: {
        DeviceId: null
      }
    },
    GetDevices: {}
  }
};

