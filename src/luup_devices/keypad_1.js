module.exports = {
  deviceType: "keypad_1",
  upnpType: "urn:schemas-micasaverde-com:device:Keypad:1",
  services: {
    "urn:micasaverde-com:serviceId:DoorLock1": {
      api: require('../luup_services/door_lock_1')
    },
    "urn:micasaverde-com:serviceId:HaDevice1": {
      api: require('../luup_services/ha_device_1')
    }
  }
};
