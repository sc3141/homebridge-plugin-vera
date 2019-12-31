module.exports = {
  serviceType: "bluetooth_network_1",
  variables: {
    Address: {
      dataType: "string"
    }
  },
  actions: {
    Scan: {
      in: {
        Duration: null
      }
    },
    Add: {
      in: {
        Address: null
      }
    },
    ScanResults: {}
  }
};

