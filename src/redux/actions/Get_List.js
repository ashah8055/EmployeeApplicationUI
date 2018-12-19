import * as Types from "./types";

export const getEmp = result => ({
    type: Types.GET_EMPLOYEE_LIST,
    result
});

export const searchEmp = result => ({
    type: Types.SEARCH_EMP,
    result
});

export const selectedEmp = selectedEmp => ({
    type: Types.GET_EMPLOYEE_SELECTED_LIST,
    selectedEmp
});