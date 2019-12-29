module.exports = {
  serviceType: "camera_motion_detection_1",
  variables: {
    Rows: {
      dataType: ui1,
      defVal: 8
    },
    Columns: {
      dataType: ui1,
      defVal: 8
    },
    ImageWidth: {
      dataType: ui2,
      defVal: 640
    },
    ImageHeight: {
      dataType: ui2,
      defVal: 480
    }
  },
  actions: {
    SetPriorities: {
      in: {
        priorities: "string"
      }
    }
  }
};

