module.exports = {
  deviceType: "serial_port_1",
  upnpType: "urn:micasaverde-org:device:SerialPort:1",
  services: {
    "urn:micasaverde-org:serviceId:SerialPort1": require('../luup_services/serial_port_1')
  }
};
