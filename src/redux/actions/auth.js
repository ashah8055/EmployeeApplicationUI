import * as Types from "./types";

export const logoutUser = userId => ({
  type: Types.LOGOUT_USER,
  userId
});

export const loginUser = (username, password) => ({
  type: Types.LOGIN_USER,
  username,
  password
});

export const loginUserSuccess = response => ({
  type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS,
  response
});
export const validateUserSuccess = response => ({
  type: Types.VALIDATE_USER_SERVER_RESPONSE_SUCCESS,
  response
});
export const validateUserFailure = response => ({
  type: Types.VALIDATE_USER_SERVER_RESPONSE_ERROR,
  response
});

export const loginUserFailure = response => ({
  type: Types.LOGIN_USER_SERVER_RESPONSE_ERROR,
  response
});

export const logoutUserSuccess = response => ({
  type: Types.LOGOUT_USER_SERVER_RESPONSE_SUCCESS,
  response
});

export const logoutUserFailure = response => ({
  type: Types.LOGOUT_USER_SERVER_REPONSE_ERROR,
  response
});


export const isUserLoggedIn = () => ({
  type: Types.IS_USER_LOGGED_IN
});
