module.exports = {
  deviceType: "av_misc_1",
  upnpType: "urn:schemas-micasaverde-com:device:avmisc:1",
  services: {
    "urn:micasaverde-com:serviceId:DiscretePower1": {
      api: require('../luup_services/discrete_power_1')
    },
    "urn:micasaverde-com:serviceId:InputSelection1": {
      api: require('../luup_services/input_selection_1')
    },
    "urn:micasaverde-com:serviceId:MediaNavigation1": {
      api: require('../luup_services/media_navigation_1')
    },
    "urn:micasaverde-com:serviceId:MenuNavigation1": {
      api: require('../luup_services/menu_navigation_1')
    },
    "urn:micasaverde-com:serviceId:Misc1": {
      api: require('../luup_services/misc_1')
    },
    "urn:micasaverde-com:serviceId:NumericEntry1": {
      api: require('../luup_services/numeric_entry_1')
    },
    "urn:micasaverde-com:serviceId:PIP1": {
      api: require('../luup_services/pip_1')
    },
    "urn:micasaverde-com:serviceId:TogglePower1": {
      api: require('../luup_services/toggle_power_1')
    },
    "urn:micasaverde-com:serviceId:Tuning1": {
      api: require('../luup_services/tuning_1')
    },
    "urn:micasaverde-com:serviceId:TV1": {
      api: require('../luup_services/tv_1')
    },
    "urn:micasaverde-com:serviceId:VideoAdjustment1": {
      api: require('../luup_services/video_adjustment_1')
    },
    "urn:micasaverde-com:serviceId:Volume1": {
      api: require('../luup_services/volume_1')
    },
    "urn:micasaverde-com:serviceId:WMC1": {
      api: require('../luup_services/wmc_1')
    }
  }
};
