 import * as Types from './types';

 export const signupUser = (user) => ({
  type: Types.SIGNUP_USER,
  user
});
export const loginUser = (username, password) => ({
  type:Types.LOGIN_USER,
  username,
  password
})
