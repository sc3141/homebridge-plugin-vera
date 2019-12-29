module.exports = {
  deviceType: "remote_control_1",
  upnpType: "urn:schemas-micasaverde-com:device:RemoteControl:1",
  services: {
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1')
  }
};
