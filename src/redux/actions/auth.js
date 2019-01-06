import * as Types from './types';


export const loginUser = (username, password) => {

  return {
    type: Types.LOGIN_USER,
    username,
    password

  }

}




