import * as Types from "./types";

export const getEmp = result => ({
  type: Types.GET_EMPLOYEE_LIST,
  result
});

export const searchEmp = result => ({
  type: Types.SEARCH_EMP,
  result
});

export const getPro = result => ({
  type: Types.PROJECT_LIST,
  result
});

export const getEmpInfo = result => ({
  type: Types.PROJECT_LIST,
  result
});

export const createProjectDetailsSubmit = projectDetails => {
  return {
    type: Types.CREATE_PROJECT,
    projectDetails
  };
};
