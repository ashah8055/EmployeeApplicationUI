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

const handleValidateUserServerResponseSuccess = (state, action) => {
        let newState = {...state};
        const userEmail = state.user.email;
        if(action.response !== undefined ){                
                const ObjtValues = Object.values(action.response);
                if(ObjtValues.length > 0 && (state.user.email === ObjtValues[0]["primaryEmailId"])){
                        newState = Object.assign({}, state, {"loggedIn" :true,"isValidToken":true, "pending":false, "empDetails": Object.assign({}, ObjtValues[0])})                
                } else{

                        if(state.signUpUsersList.length > 0){
                                const ObjItem =  state.signUpUsersList.find((i) => {
                                                return i.email === userEmail;
                                        });
                                if(ObjItem && Object.values(ObjItem).length > 0){
                                        newState = Object.assign({}, state, {"loggedIn" :true,"isValidToken":true, "pending":false, "isBusiness":true })                
                                }                                
                        } else{
                                newState = Object.assign({}, state, {"loggedIn" :false,"isValidToken":true, "pending":false, "isBusiness":false })                
                        }                 
                }                
        }
        return {...newState};
}
const handleValidateUserServerResponseError = (state, action) => {
        let newState = {...state};
        return {...newState};
}

const handleBusinessUserListServerResponseSuccess = (state, action) => {
        let newState = {...state};
        const ObjtValues = Object.values(action.response);
        if(action.response !== undefined ){          
                newState = Object.assign({}, state, {signUpUsersList:Object.assign([], ObjtValues)});
        }
        return {...newState};
}

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
const handleLogoutServerResponseSuccess = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, {"user" : Object.assign({},{}),"loggedIn" :false,"isValidToken":false })
  window.localStorageremoveItem("userLoginToken");
  return {...newState};
}
const handleLogoutServerResponseError = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, {"user" : Object.assign({},{}),"loggedIn" :false,"isValidToken":false })
  window.localStorageremoveItem("userLoginToken");
  return {...newState};
}

export default (state = initialUserObj, action) => {
    switch(action.type){
        case Types.LOGIN_USER :
            return Object.assign({}, state,{ "loggedIn" :false,"isValidToken":false, "pending":true});
        case Types.LOGOUT_USER :
                return {...state};
        case Types.GET_BUSINESS_USERS_LIST :
                return {...state};
        case Types.GET_BUSINESS_USERS_LIST_SERVER_RESPONSE_SUCCESS:
                return handleBusinessUserListServerResponseSuccess(state, action);
        case Types.LOGOUT_USER_SERVER_RESPONSE_SUCCESS :
                return {...state};
        case Types.LOGIN_USER_SERVER_RESPONSE_ERROR :
                return handleLoginServerResponseError(state, action);
        case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS :
                return handleLoginServerResponseSuccess(state, action);
        case Types.VALIDATE_USER_SERVER_RESPONSE_ERROR :
                return handleValidateUserServerResponseError(state, action);
        case Types.VALIDATE_USER_SERVER_RESPONSE_SUCCESS :
                return handleValidateUserServerResponseSuccess(state, action);
        case Types.SERVER_CALL_FAILED :
                return {...state};
        case Types.LOGOUT_USER_SERVER_REPONSE_ERROR :
                return {...state};
        case Types.VALIDATE_TOKEN :
            return { ...state};
        case Types.IS_USER_LOGGED_IN :
            return { ...state};
        default :
            return state;
    }
}
