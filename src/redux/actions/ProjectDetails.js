import * as Types from './types';

export const createProjcetDetailsSubmit = (projectDetails) => {
    return {
        type: Types.CREATE_PROJECT,
        projectDetails
    };
};
