import * as Types from "../actions/types";

const initialUserObj = {
    "result": {}
};

const handleEmployeeList = (state, action) => {
    console.log("REdux" + JSON.stringify(action));
    let newState = { ...state };
    if (action.result !== undefined) {
        newState = Object.assign({}, state, { "result": Object.assign({}, action.result) })

    }
    return { ...newState };

}

export default (state = initialUserObj, action) => {
    switch (action.type) {
        case Types.LIST_EMPLOYEE_DETAILS:
            return handleEmployeeList(state, action);

        default:
            return state;

    }

}


