import * as Type from "../actions/types";



export default (state, action) => {
    switch (action.type) {
        case Type.CREATE_TIMESHEET:
            // return Object.assign({}, state);
            return { ...state, timesheet: action.timesheet }
        default:
            return { ...state };
    }
};
