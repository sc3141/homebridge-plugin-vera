module.exports = {
  serviceType: "schedule_1",
  variables: {
    Schedule: {
      name: "Schedule",
      dataType: "string"
    },
    ScheduleBlockId: {
      name: "ScheduleBlockId",
      dataType: "ui1"
    },
    ScheduleState: {
      name: "ScheduleState",
      dataType: "ui1"
    },
    Duration: {
      name: "Duration",
      dataType: "ui2"
    },
    ScheduleId: {
      name: "ScheduleId",
      dataType: "ui1"
    }
  },
  actions: {
    SetSchedule: {
      in: [
        { name: "ScheduleId", stateVar: "ScheduleId" },
        { name: "ScheduleBlockId", stateVar: "ScheduleBlockId" },
        { name: "Schedule", stateVar: "Schedule" }
      ]
    },
    RemoveSchedule: {
      in: [
        { name: "ScheduleId", stateVar: "ScheduleId" },
        { name: "ScheduleBlockId", stateVar: "ScheduleBlockId" }
      ]
    },
    SetScheduleState: {
      in: [
        { name: "ScheduleId", stateVar: "ScheduleId" },
        { name: "ScheduleBlockId", stateVar: "ScheduleBlockId" },
        { name: "ScheduleState", stateVar: "ScheduleState" }
      ]
    }
  }
};

