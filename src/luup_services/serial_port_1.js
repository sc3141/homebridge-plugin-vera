module.exports = {
  serviceType: "serial_port_1",
  variables: {
    path: {
      name: "path",
      dataType: "string",
      eventable: false
    },
    baud: {
      name: "baud",
      dataType: "ui4",
      defVal: 9600,
      values: [
        "300",
        "1200",
        "2400",
        "4800",
        "9600",
        "19200",
        "38400",
        "57600",
        "115200",
        "230400"
      ],
      eventable: false
    },
    stopbits: {
      name: "stopbits",
      dataType: "ui1",
      defVal: 1,
      values: [
        "0",
        "1",
        "2"
      ]
    },
    databits: {
      name: "databits",
      dataType: "ui1",
      defVal: 8,
      values: [
        "7",
        "8"
      ]
    },
    parity: {
      name: "parity",
      dataType: "string",
      defVal: "none",
      values: [
        "none",
        "even",
        "odd"
      ]
    }
  }};

