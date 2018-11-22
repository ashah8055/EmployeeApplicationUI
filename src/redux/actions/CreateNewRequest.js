import * as Types from './types';

export const createRequestSubmit = (timesheet) => {
    return {
        type: Types.CREATE_TIMESHEET,
        timesheet
    };
};

export const createWorkingHourTimeSheet = (workingHour) => {

    return {
        type: Types.CREATE_TIMESHEET_WORKINGHOUR,
        workingHour

    };
};
