 import * as Types from './types';


export const loginUser = (username, password) => ({
  type:Types.LOGIN_USER,
  username,
  password
})
