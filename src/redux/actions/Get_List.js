import * as Types from "./types";

export const searchEmp = result => ({
  type: Types.GET_EMPLOYEE_LIST,
  result
});
