import * as Types from "../actions/types";

const initialUserObj = {
  result: []
};

const getEmployeeListError = (state, action) => {
  let newState = { ...state };
  return { ...newState };
};

const getEmployeeList = (state, action) => {
  //console.log("REdux" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      result: JSON.parse(JSON.stringify(action.result))
    });
    console.log("New" + JSON.stringify(newState));
  }
  return { ...newState };
};

export default (state = initialUserObj, action = {}) => {
  switch (action.type) {
    case Types.GET_EMPLOYEE_LIST:
      return { ...state };
    case Types.GET_EMPLOYEE_LIST_SUCCESS_RESPONSE:
      return getEmployeeList(state, action);
    case Types.GET_EMPLOYEE_LIST_ERROR_RESPONSE:
      return getEmployeeListError(state);
    default:
      return state;
  }
};
