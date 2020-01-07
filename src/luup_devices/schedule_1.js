module.exports = {
  deviceType: "schedule_1",
  upnpType: "urn:schemas-micasaverde-com:device:Schedule:1",
  services: {
    "urn:micasaverde-com:serviceId:Schedule1": {
      api: require('../luup_services/schedule')
    }
  }
};
