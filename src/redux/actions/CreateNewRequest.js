import * as Types from "./types";

export const createRequestSubmit = timesheet => {
  return {
    type: Types.CREATE_TIMESHEET,
    timesheet
  };
};
export const createWorkingHourTimeSheet = submitTimeSheet => {
  return {
    type: Types.CREATE_TIMESHEET_WORKINGHOUR,
    submitTimeSheet
  };
};

export const createSaveTimeSheet = submitTimeSheet => {
  return {
    type: Types.CREATE_TIMESHEET_SAVE_WORKINGHOUR,
    submitTimeSheet
  };
};
