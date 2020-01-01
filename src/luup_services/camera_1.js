module.exports = {
  serviceType: "camera_1",
  variables: {
    UseCMS: {
      name: "UseCMS",
      dataType: "boolean",
      defVal: 0,
      shortCode: "cms"
    },
    VideoURLs: {
      name: "VideoURLs",
      dataType: "string",
      shortCode: "videourls"
    },
    URL: {
      name: "URL",
      dataType: "string",
      defVal: "",
      shortCode: "url"
    },
    DirectStreamingURL: {
      name: "DirectStreamingURL",
      dataType: "string",
      shortCode: "streaming"
    },
    RtspURL: {
      name: "RtspURL",
      dataType: "string",
      shortCode: "rtsp"
    },
    RelatedSensors: {
      name: "RelatedSensors",
      dataType: "string"
    },
    SensorArchiveSeconds: {
      name: "SensorArchiveSeconds",
      dataType: "ui4"
    },
    RelatedLights: {
      name: "RelatedLights",
      dataType: "string"
    },
    LightOptions: {
      name: "LightOptions",
      dataType: "string"
    },
    AutoArchiveSeconds: {
      name: "AutoArchiveSeconds",
      dataType: "ui4"
    },
    AutoArchivePreserveDays: {
      name: "AutoArchivePreserveDays",
      dataType: "ui4"
    },
    LoopRequest: {
      name: "LoopRequest",
      dataType: "boolean"
    }
  },
  actions: {
    ArchiveVideo: {
      in: [
        { name: "Format", stateVar: "ui1" },
        { name: "Duration", stateVar: "ui1" }
      ]
    },
    SetPassword: {
      in: [
        { name: "username", stateVar: "string" },
        { name: "password", stateVar: "string" }
      ]
    },
    GetWifiNetworks: {},
    SetWifiNetwork: {
      in: [
        { name: "enable", stateVar: "boolean" },
        { name: "ssid", stateVar: "string" },
        { name: "security", stateVar: "string" },
        { name: "passkey", stateVar: "string" }
      ]
    },
    GeneratePassword: {},
    Reboot: {}
  }
};

