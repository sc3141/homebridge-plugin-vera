module.exports = {
  serviceType: "zigbee_network_1",
  variables: {
    PanID: {
      name: "PanID",
      dataType: "string"
    },
    Duration: {
      name: "Duration",
      dataType: "ui4"
    },
    Node: {
      name: "Node",
      dataType: "ui1",
      min: 0,
      max: 255
    },
    FrameControl: {
      name: "FrameControl",
      dataType: "ui1",
      min: 0,
      max: 255
    },
    Cluster: {
      name: "Cluster",
      dataType: "ui2",
      min: 0,
      max: 65535
    },
    Command: {
      name: "Command",
      dataType: "ui1",
      min: 0,
      max: 255
    },
    ManufacturerCode: {
      name: "ManufacturerCode",
      dataType: "ui2",
      defVal: 0,
      min: 0,
      max: 65535
    },
    NetStatusText: {
      name: "NetStatusText",
      dataType: "string"
    }
  },
  actions: {
    FormNetwork: {
      in: [
        { name: "Channel", stateVar: "Duration" },
        { name: "PanID", stateVar: "Duration" }
      ]
    },
    OpenJoin: {
      in: [
        { name: "Duration", stateVar: "Duration" }
      ]
    },
    SendData: {
      in: [
        { name: "Node", stateVar: "Node" },
        { name: "FrameControl", stateVar: "FrameControl" },
        { name: "Cluster", stateVar: "Cluster" },
        { name: "Command", stateVar: "Command" },
        { name: "ManufacturerCode", stateVar: "ManufacturerCode" },
        { name: "Data", stateVar: "NetStatusText" }
      ]
    }
  }
};

