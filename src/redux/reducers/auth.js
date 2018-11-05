import * as Types from "../actions/types";

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
