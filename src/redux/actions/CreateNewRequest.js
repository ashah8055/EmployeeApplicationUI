import * as Types from './types';

export const createRequestSubmit = (timesheet) => {
    return {
        type: Types.CREATE_TIMESHEET,
        timesheet
    };
};

