module.exports = {
  deviceType: "combo_device_1",
  upnpType: "urn:schemas-micasaverde-com:device:ComboDevice:1",
  services: {
    "urn:micasaverde-com:serviceId:HaDevice1": require('../luup_services/ha_device_1')
  }
};
