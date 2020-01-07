module.exports = {
  serviceType: "bluetooth_network_1",
  variables: {
    Address: {
      name: "Address",
      dataType: "string"
    }
  },
  actions: {
    Scan: {
      in: [
        { name: "Duration" }
      ]
    },
    Add: {
      in: [
        { name: "Address" }
      ]
    },
    ScanResults: {}
  }
};

