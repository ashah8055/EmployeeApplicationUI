import * as Types from './types';


export const loginUser = (username, password) => {

  return {
    type: Types.LOGIN_USER,
    username,
    password,

  }

}

export const listEmployee = (result) => {

  return {
    type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS,
    result

  }

}


