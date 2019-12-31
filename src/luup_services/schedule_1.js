module.exports = {
  serviceType: "schedule_1",
  variables: {
    Schedule: {
      dataType: "string"
    },
    ScheduleBlockId: {
      dataType: "ui1"
    },
    ScheduleState: {
      dataType: "ui1"
    },
    Duration: {
      dataType: "ui2"
    },
    ScheduleId: {
      dataType: "ui1"
    }
  },
  actions: {
    SetSchedule: {
      in: {
        ScheduleId: "ScheduleId",
        ScheduleBlockId: "ScheduleBlockId",
        Schedule: "Schedule"
      }
    },
    RemoveSchedule: {
      in: {
        ScheduleId: "ScheduleId",
        ScheduleBlockId: "ScheduleBlockId"
      }
    },
    SetScheduleState: {
      in: {
        ScheduleId: "ScheduleId",
        ScheduleBlockId: "ScheduleBlockId",
        ScheduleState: "ScheduleState"
      }
    }
  }
};

