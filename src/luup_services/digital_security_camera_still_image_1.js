module.exports = {
  serviceType: "digital_security_camera_still_image_1",
  variables: {
    AvailableEncodings: {
      dataType: "string",
      eventable: false
    },
    DefaultEncoding: {
      dataType: "string",
      eventable: true
    },
    AvailableCompressionLevels: {
      dataType: "string",
      eventable: false
    },
    DefaultCompressionLevel: {
      dataType: "string",
      eventable: true
    },
    AvailableResolutions: {
      dataType: "string",
      eventable: false
    },
    DefaultResolution: {
      dataType: "string",
      eventable: true
    },
    ImageURL: {
      dataType: "string",
      eventable: false
    },
    ImagePresentationURL: {
      dataType: "string",
      eventable: false
    }
  },
  actions: {
    GetAvailableEncodings: {
      out: {
        RetAvailableEncodings: "AvailableEncodings"
      }
    },
    GetDefaultEncoding: {
      out: {
        RetEncoding: "DefaultEncoding"
      }
    },
    SetDefaultEncoding: {
      in: {
        ReqEncoding: "DefaultEncoding"
      }
    },
    GetAvailableCompressionLevels: {
      out: {
        RetAvailableCompressionLevels: "AvailableCompressionLevels"
      }
    },
    GetDefaultCompressionLevel: {
      out: {
        RetCompressionLevel: "DefaultCompressionLevel"
      }
    },
    SetDefaultCompressionLevel: {
      in: {
        ReqCompressionLevel: "DefaultCompressionLevel"
      }
    },
    GetAvailableResolutions: {
      out: {
        RetAvailableResolutions: "AvailableResolutions"
      }
    },
    GetDefaultResolution: {
      out: {
        RetResolution: "DefaultResolution"
      }
    },
    SetDefaultResolution: {
      in: {
        ReqResolution: "DefaultResolution"
      }
    },
    GetImageURL: {
      out: {
        ReqEncoding: "DefaultEncoding",
        ReqCompression: "DefaultCompressionLevel",
        ReqResolution: "DefaultResolution",
        RetImageURL: "ImageURL"
      }
    },
    GetDefaultImageURL: {
      out: {
        RetImageURL: "ImageURL"
      }
    },
    GetImagePresentationURL: {
      out: {
        ReqEncoding: "DefaultEncoding",
        ReqCompression: "DefaultCompressionLevel",
        ReqResolution: "DefaultResolution",
        RetImagePresentationURL: "ImagePresentationURL"
      }
    },
    GetDefaultImagePresentationURL: {
      out: {
        RetImagePresentationURL: "ImagePresentationURL"
      }
    }
  }
};

