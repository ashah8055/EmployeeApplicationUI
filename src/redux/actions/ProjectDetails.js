import * as Types from './types';

export const createProjcetDetailsSubmit = (projectDetails) => {
    return {
        type: Types.CREATE_PROJECT,
        projectDetails
    };
};

export const listProjectDetails = (listProject) => {
    return {

        type: Types.LIST_PROJECT_DETAILS,
        listProject
    };
};

export const deleteProject = (_id) => {
    console.log("Delete Id " + _id)
    return {
        type: Types.DELETE_PROJECT,
        _id

    }
}

export const deleteProjectSucess = (_id) => {
    return {
        type: Types.DELETE_PROJECT_SUCESS,
        _id
    }
}

export const editProject = (_id) => {

}