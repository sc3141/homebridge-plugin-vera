module.exports = {
  serviceType: "lprf_network_1",
  variables: {
    NodeType: {
      dataType: "string"
    },
    NodeId: {
      dataType: "ui4"
    },
    Timeout: {
      dataType: "ui2"
    }
  },
  actions: {
    AddNodes: {
      in: {
        NodeType: "NodeType",
        NodeId: "NodeId",
        Timeout: "Timeout"
      }
    },
    ResetReceiver: {}
  }
};

