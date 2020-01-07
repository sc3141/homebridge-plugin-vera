module.exports = {
  serviceType: "lprf_network_1",
  variables: {
    NodeType: {
      name: "NodeType",
      dataType: "string"
    },
    NodeId: {
      name: "NodeId",
      dataType: "ui4"
    },
    Timeout: {
      name: "Timeout",
      dataType: "ui2"
    }
  },
  actions: {
    AddNodes: {
      in: [
        { name: "NodeType", stateVar: "NodeType" },
        { name: "NodeId", stateVar: "NodeId" },
        { name: "Timeout", stateVar: "Timeout" }
      ]
    },
    ResetReceiver: {}
  }
};

