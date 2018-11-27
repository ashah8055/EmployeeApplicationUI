import * as Types from "./types";

export const signupUser = user => ({
  type: Types.SIGNUP_USER,
  user
});
