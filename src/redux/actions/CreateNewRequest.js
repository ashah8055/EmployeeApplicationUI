import * as Types from './types';

export const createRequestSubmit = (task) => {
    return {
        type: Types.CREATE_TASK,
        task
    };
};

