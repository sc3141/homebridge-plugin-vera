module.exports = {
  deviceType: "digital_security_camera_2",
  upnpType: "urn:schemas-upnp-org:device:DigitalSecurityCamera:2",
  services: {
    "urn:upnp-org:serviceId:DigitalSecurityCameraSettings1": require('../luup_services/digital_security_camera_settings_1'),
    "urn:upnp-org:serviceId:DigitalSecurityCameraStillImage1": require('../luup_services/digital_security_camera_still_image_1'),
    "urn:micasaverde-com:serviceId:PanTiltZoom1": require('../luup_services/pan_tilt_zoom_1'),
    "urn:micasaverde-com:serviceId:Camera1": require('../luup_services/camera_1'),
    "urn:micasaverde-com:serviceId:CameraMotionDetection1": require('../luup_services/camera_motion_detection_1')
  }
};
