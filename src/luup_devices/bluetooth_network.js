module.exports = {
  deviceType: "bluetooth_network",
  upnpType: "urn:schemas-micasaverde-com:device:BluetoothNetwork:1",
  services: {
    "urn:micasaverde-com:serviceId:BluetoothNetwork1": require('../luup_services/bluetooth_network_1')
  }
};
