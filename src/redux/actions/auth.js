import * as Types from "./types";

const initialUserObj = {
  "signUpUsersList":[],
  "pending": false,
  "loggedIn": false,
  "isValidToken": false,
  "isBusiness": false,
  "empDetails": {},
  "result":{},
  "user":{ "email": "",
           "displayName": "",
           "registered": false,
           "refreshToken": "",
           "expiresIn": "",
           "emailVerified": false,
           "validSince": "",
           "disabled": false,
           "lastLoginAt": "",
           "createdAt": ""}

};


const handleLoginServerResponseSuccess = (state, action) => {
  let newState = {...state};
  if(action.result !== undefined){
    newState = Object.assign({}, state, {"result" : Object.assign({}, action.result)})
    
  }
  return {...newState};
}
const handleLoginServerResponseError = (state, action) => {
  let newState = {...state};
  return {...newState};
}

export const loginUser = (username, password) => {

  return {
    type: Types.LOGIN_USER,
    username,
    password
  }
}

export default (state = initialUserObj, action) => {
    switch(action.type){
        case Types.LOGIN_USER :
            return Object.assign({}, state,{ "loggedIn" :false,"isValidToken":false, "pending":true});
        case Types.LOGIN_USER_SERVER_RESPONSE_ERROR :
                return handleLoginServerResponseError(state, action);
        case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS :
                return handleLoginServerResponseSuccess(state, action);       
        default :
            return state;
    }
}
export const validateUserSuccess = response => ({
  type: Types.VALIDATE_USER_SERVER_RESPONSE_SUCCESS,
  response
});

export const validateUserFailure = response => ({
  type: Types.VALIDATE_USER_SERVER_RESPONSE_ERROR,
  response
});

export const getUsersList = () => ({
  type:Types.GET_USERS_LIST  
});

export const getUsersListSuccessResponse = (response) => ({
  type:Types.GET_USERS_LIST_SERVER_RESPONSE_SUCCESS,
  response  
})


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
