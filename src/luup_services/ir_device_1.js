module.exports = {
  serviceType: "ir_device_1",
  variables: {
    Codesets: {
      dataType: "string",
      shortCode: "codesets"
    },
    Codeset: {
      dataType: "string",
      shortCode: "codeset"
    },
    Remote: {
      dataType: "int",
      shortCode: "remote"
    },
    Scene: {
      dataType: "string",
      shortCode: "scene"
    }
  },
  actions: {
    SendCode: {
      in: {
        Codeset: "Codeset",
        Button: "Remote",
        Repeat: "Remote"
      }
    }
  }
};

