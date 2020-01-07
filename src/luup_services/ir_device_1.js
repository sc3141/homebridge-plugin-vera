module.exports = {
  serviceType: "ir_device_1",
  variables: {
    Codesets: {
      name: "Codesets",
      dataType: "string",
      shortCode: "codesets"
    },
    Codeset: {
      name: "Codeset",
      dataType: "string",
      shortCode: "codeset"
    },
    Remote: {
      name: "Remote",
      dataType: "int",
      shortCode: "remote"
    },
    Scene: {
      name: "Scene",
      dataType: "string",
      shortCode: "scene"
    }
  },
  actions: {
    SendCode: {
      in: [
        { name: "Codeset", stateVar: "Codeset" },
        { name: "Button", stateVar: "Remote" },
        { name: "Repeat", stateVar: "Remote" }
      ]
    }
  }
};

