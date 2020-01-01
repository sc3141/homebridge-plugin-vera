module.exports = {
  serviceType: "ir_transmitter_1",
  variables: {
    ProntoCode: {
      name: "ProntoCode",
      dataType: "string",
      eventable: false
    },
    Status: {
      name: "Status",
      dataType: "boolean",
      defVal: 0
    }
  },
  actions: {
    SendProntoCode: {
      in: [
        { name: "ProntoCode", stateVar: "ProntoCode" }
      ]
    }
  }
};

