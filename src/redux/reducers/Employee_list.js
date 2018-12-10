import * as Types from "../actions/types";

const initialUserObj = {
    "result": []
};

const handleEmployeeListError = (state, action) => {
    let newState = { ...state };
    return { ...newState };
}

const handleEmployeeList = (state, action) => {
    console.log("REdux" + JSON.stringify(action));
    let newState = { ...state };
    if (action.result !== undefined) {
        newState = Object.assign({}, state, { "result": JSON.parse(JSON.stringify(action.result)) })
        console.log("New" + JSON.stringify(newState));
    }
    return { ...newState };

}

export default (state = initialUserObj, action = {}) => {
    switch (action.type) {
        case Types.LIST_EMPLOYEE_DETAILS:
            return { ...state }
        case Types.LIST_EMPLOYEE_DETAILS_SERVER_RESPONSE_SUCESS:
            return handleEmployeeList(state, action);
        case Types.LIST_EMPLOYEE_DETAILS_SERVER__RESPONSE_ERROR:
            return handleEmployeeListError(state);
        default:
            return state;

    }

}


