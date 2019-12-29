module.exports = {
  deviceType: "ir_device_1",
  upnpType: "urn:schemas-micasaverde-com:device:IrDevice:1",
  services: {
    "urn:micasaverde-com:serviceId:IrDevice1": require('../luup_services/ir_device_1')
  }
};
