module.exports = {
  serviceType: "digital_security_camera_still_image_1",
  variables: {
    AvailableEncodings: {
      name: "AvailableEncodings",
      dataType: "string",
      eventable: false
    },
    DefaultEncoding: {
      name: "DefaultEncoding",
      dataType: "string",
      eventable: true
    },
    AvailableCompressionLevels: {
      name: "AvailableCompressionLevels",
      dataType: "string",
      eventable: false
    },
    DefaultCompressionLevel: {
      name: "DefaultCompressionLevel",
      dataType: "string",
      eventable: true
    },
    AvailableResolutions: {
      name: "AvailableResolutions",
      dataType: "string",
      eventable: false
    },
    DefaultResolution: {
      name: "DefaultResolution",
      dataType: "string",
      eventable: true
    },
    ImageURL: {
      name: "ImageURL",
      dataType: "string",
      eventable: false
    },
    ImagePresentationURL: {
      name: "ImagePresentationURL",
      dataType: "string",
      eventable: false
    }
  },
  actions: {
    GetAvailableEncodings: {
      out: [
        { name: "RetAvailableEncodings", stateVar: "AvailableEncodings" }
      ]
    },
    GetDefaultEncoding: {
      out: [
        { name: "RetEncoding", stateVar: "DefaultEncoding" }
      ]
    },
    SetDefaultEncoding: {
      in: [
        { name: "ReqEncoding", stateVar: "DefaultEncoding" }
      ]
    },
    GetAvailableCompressionLevels: {
      out: [
        { name: "RetAvailableCompressionLevels", stateVar: "AvailableCompressionLevels" }
      ]
    },
    GetDefaultCompressionLevel: {
      out: [
        { name: "RetCompressionLevel", stateVar: "DefaultCompressionLevel" }
      ]
    },
    SetDefaultCompressionLevel: {
      in: [
        { name: "ReqCompressionLevel", stateVar: "DefaultCompressionLevel" }
      ]
    },
    GetAvailableResolutions: {
      out: [
        { name: "RetAvailableResolutions", stateVar: "AvailableResolutions" }
      ]
    },
    GetDefaultResolution: {
      out: [
        { name: "RetResolution", stateVar: "DefaultResolution" }
      ]
    },
    SetDefaultResolution: {
      in: [
        { name: "ReqResolution", stateVar: "DefaultResolution" }
      ]
    },
    GetImageURL: {
      out: [
        { name: "ReqEncoding", stateVar: "DefaultEncoding" },
        { name: "ReqCompression", stateVar: "DefaultCompressionLevel" },
        { name: "ReqResolution", stateVar: "DefaultResolution" },
        { name: "RetImageURL", stateVar: "ImageURL" }
      ]
    },
    GetDefaultImageURL: {
      out: [
        { name: "RetImageURL", stateVar: "ImageURL" }
      ]
    },
    GetImagePresentationURL: {
      out: [
        { name: "ReqEncoding", stateVar: "DefaultEncoding" },
        { name: "ReqCompression", stateVar: "DefaultCompressionLevel" },
        { name: "ReqResolution", stateVar: "DefaultResolution" },
        { name: "RetImagePresentationURL", stateVar: "ImagePresentationURL" }
      ]
    },
    GetDefaultImagePresentationURL: {
      out: [
        { name: "RetImagePresentationURL", stateVar: "ImagePresentationURL" }
      ]
    }
  }
};

