module.exports = {
  serviceType: "camera_motion_detection_1",
  variables: {
    Rows: {
      name: "Rows",
      dataType: "ui1",
      defVal: 8
    },
    Columns: {
      name: "Columns",
      dataType: "ui1",
      defVal: 8
    },
    ImageWidth: {
      name: "ImageWidth",
      dataType: "ui2",
      defVal: 640
    },
    ImageHeight: {
      name: "ImageHeight",
      dataType: "ui2",
      defVal: 480
    }
  },
  actions: {
    SetPriorities: {
      in: [
        { name: "priorities", stateVar: "string" }
      ]
    }
  }
};

