module.exports = {
  deviceType: "digital_security_camera_1",
  upnpType: "urn:schemas-upnp-org:device:DigitalSecurityCamera:1",
  services: {
    "urn:upnp-org:serviceId:DigitalSecurityCameraSettings1": {
      api: require('../luup_services/digital_security_camera_settings_1')
    },
    "urn:upnp-org:serviceId:DigitalSecurityCameraStillImage1": {
      api: require('../luup_services/digital_security_camera_still_image_1')
    },
    "urn:micasaverde-com:serviceId:PanTiltZoom1": {
      api: require('../luup_services/pan_tilt_zoom_1')
    },
    "urn:micasaverde-com:serviceId:Camera1": {
      api: require('../luup_services/camera_1')
    }
  }
};
