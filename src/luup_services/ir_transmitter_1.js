module.exports = {
  serviceType: "ir_transmitter_1",
  variables: {
    ProntoCode: {
      dataType: "string",
      eventable: false
    },
    Status: {
      dataType: "boolean",
      defVal: 0
    }
  },
  actions: {
    SendProntoCode: {
      in: {
        ProntoCode: "ProntoCode"
      }
    }
  }
};

