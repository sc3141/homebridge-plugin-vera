module.exports = {
  serviceType: "insteon_network_1",
  variables: {
    Node: {
      dataType: "string"
    }
  },
  actions: {
    ResetNetwork: {},
    RemoveNodes: {},
    AddNodes: {},
    StopAddRemoveNodes: {},
    SendData: {
      in: {
        Node: "Node",
        Data: "Node"
      }
    }
  }
};

