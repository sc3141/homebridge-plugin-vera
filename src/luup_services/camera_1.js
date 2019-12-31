module.exports = {
  serviceType: "camera_1",
  variables: {
    UseCMS: {
      dataType: "boolean",
      defVal: 0,
      shortCode: "cms"
    },
    VideoURLs: {
      dataType: "string",
      shortCode: "videourls"
    },
    URL: {
      dataType: "string",
      defVal: "",
      shortCode: "url"
    },
    DirectStreamingURL: {
      dataType: "string",
      shortCode: "streaming"
    },
    RtspURL: {
      dataType: "string",
      shortCode: "rtsp"
    },
    RelatedSensors: {
      dataType: "string"
    },
    SensorArchiveSeconds: {
      dataType: "ui4"
    },
    RelatedLights: {
      dataType: "string"
    },
    LightOptions: {
      dataType: "string"
    },
    AutoArchiveSeconds: {
      dataType: "ui4"
    },
    AutoArchivePreserveDays: {
      dataType: "ui4"
    },
    LoopRequest: {
      dataType: "boolean"
    }
  },
  actions: {
    ArchiveVideo: {
      in: {
        Format: "ui1",
        Duration: "ui1"
      }
    },
    SetPassword: {
      in: {
        username: "string",
        password: "string"
      }
    },
    GetWifiNetworks: {},
    SetWifiNetwork: {
      in: {
        enable: "boolean",
        ssid: "string",
        security: "string",
        passkey: "string"
      }
    },
    GeneratePassword: {},
    Reboot: {}
  }
};

