module.exports = {
  serviceType: "job_handler_1",
  variables: {
    NumActiveJobs: {
      name: "NumActiveJobs",
      dataType: "ui1",
      defVal: 0,
      min: 0,
      max: 100,
      eventable: true
    }
  },
  actions: {
    SetLoadLevelTarget: {
      in: [
        { name: "newLoadlevelTarget", stateVar: "LoadLevelTarget" }
      ]
    }
  }
};

