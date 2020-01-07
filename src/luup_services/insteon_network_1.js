module.exports = {
  serviceType: "insteon_network_1",
  variables: {
    Node: {
      name: "Node",
      dataType: "string"
    }
  },
  actions: {
    ResetNetwork: {},
    RemoveNodes: {},
    AddNodes: {},
    StopAddRemoveNodes: {},
    SendData: {
      in: [
        { name: "Node", stateVar: "Node" },
        { name: "Data", stateVar: "Node" }
      ]
    }
  }
};

