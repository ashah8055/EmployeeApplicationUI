import * as Types from "../actions/types";

const initialUserObj = {
    result: []
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

const handleSearchEmp = (state, action) => {
    // let newState = { ...state };
    // if (action.result !== undefined) {
    //   let employee = [];
    //   for (let val in state.result) {
    //     if (state.result[val].firstName.match(action.result.firstName)) {
    //       employee.push(state.result[val]);
    //     }
    //   }
    //   newState = Object.assign({}, state, {
    //     result: JSON.parse(JSON.stringify(action.result))
    //   });
    // }
    // return { ...newState };
    let newState = { ...state };
    if (action.result !== undefined) {
        newState = Object.assign({}, state, {
            result: JSON.parse(JSON.stringify(action.result))
        });
        // console.log("New" + JSON.stringify(newState));
    }
    return { ...newState };
};

const searchError = state => {
    let newState = { ...state };
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
        case Types.SEARCH_EMP:
            return { ...state };
        case Types.SEARCH_EMP_SUCCESS:
            return handleSearchEmp(state, action);
        case Types.SEARCH_EMP_ERROR:
            return searchError(state);
        default:
            return state;
    }
};