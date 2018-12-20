import * as Types from "../actions/types";

const initialUserObj = {
  result: [],
  listOfProject: []
};

const getEmployeeListError = state => {
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
    //  console.log("New" + JSON.stringify(newState));
  }
  return { ...newState };
};

const getProjectListError = state => {
  let newState = { ...state };
  return { ...newState };
};

const getProjectList = (state, action) => {
  //console.log("REdux" + JSON.stringify(action));
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      result: JSON.parse(JSON.stringify(action.result))
    });
    //  console.log("New" + JSON.stringify(newState));
  }
  return { ...newState };
};

const handleSearchEmp = (state, action) => {
  let newState = { ...state };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      result: JSON.parse(JSON.stringify(action.result))
    });
  }
  return { ...newState };
};

const searchError = state => {
  let newState = { ...state };
  return { ...newState };
};

const handleProjectList = (state, action) => {
  console.log("ListProject" + JSON.stringify(action));
  let newState = { ...state };
  if (action.formBody !== undefined) {
    newState = Object.assign({}, state, {
      listOfProject: action.formBody.projectDetails.projectDetails.projctName
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
    case Types.PROJECT_LIST:
      return { ...state };
    case Types.PROJECT_LIST_SUCCESS_RESPONSE:
      return getProjectList(state, action);
    case Types.PROJECT_LIST_ERROR_RESPONSE:
      return getProjectListError(state);
    case Types.SEARCH_EMP:
      return { ...state };
    case Types.SEARCH_EMP_SUCCESS:
      return handleSearchEmp(state, action);
    case Types.SEARCH_EMP_ERROR:
      return searchError(state);
    case Types.CREATE_PROJECT:
      return { ...state, projectDetails: action.projectDetails };
    case Types.LIST_PROJECT_DETAILS_SERVER_RESPONSE_SUCESS:
      return handleProjectList(state, action);
    default:
      return state;
  }
};
