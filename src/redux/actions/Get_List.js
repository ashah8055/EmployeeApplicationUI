import * as Types from "./types";

export const getEmp = result => ({
    type: Types.GET_EMPLOYEE_LIST,
    result
});

export const searchEmp = result => ({
    type: Types.SEARCH_EMP,
    result
});