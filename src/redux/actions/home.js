import * as Types from "./types";

export const signupUser = user => ({
  type: Types.SIGNUP_USER,
  user
});

export const addEmployee = user => ({
  type: Types.EMPLOYEE_SAVE_DATABASE,
  user
});
