module.exports = {
  deviceType: "usb_uirt",
  upnpType: "urn:schemas-micasaverde-com:device:USBUIRT:1",
  services: {
    "urn:micasaverde-com:serviceId:USBUIRT1": {
      api: require('../luup_services/usbuirt')
    },
    "urn:micasaverde-com:serviceId:IrTransmitter1": {
      api: require('../luup_services/ir_transmitter_1')
    }
  }
};
