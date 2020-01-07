module.exports = {
  deviceType: "ir_transmitter_1",
  upnpType: "urn:schemas-micasaverde-com:device:IrTransmitter:1",
  services: {
    "urn:micasaverde-com:serviceId:IrTransmitter1": {
      api: require('../luup_services/ir_transmitter_1')
    }
  }
};
