module.exports = {
  serviceType: "zigbee_network_1",
  variables: {
    PanID: {
      dataType: "string"
    },
    Duration: {
      dataType: "ui4"
    },
    Node: {
      dataType: "ui1",
      min: 0,
      max: 255
    },
    FrameControl: {
      dataType: "ui1",
      min: 0,
      max: 255
    },
    Cluster: {
      dataType: "ui2",
      min: 0,
      max: 65535
    },
    Command: {
      dataType: "ui1",
      min: 0,
      max: 255
    },
    ManufacturerCode: {
      dataType: "ui2",
      defVal: 0,
      min: 0,
      max: 65535
    },
    NetStatusText: {
      dataType: "string"
    }
  },
  actions: {
    FormNetwork: {
      in: {
        Channel: "Duration",
        PanID: "Duration"
      }
    },
    OpenJoin: {
      in: {
        Duration: "Duration"
      }
    },
    SendData: {
      in: {
        Node: "Node",
        FrameControl: "FrameControl",
        Cluster: "Cluster",
        Command: "Command",
        ManufacturerCode: "ManufacturerCode",
        Data: "NetStatusText"
      }
    }
  }
};

