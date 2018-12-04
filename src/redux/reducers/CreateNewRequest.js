import * as Type from "../actions/types";



export default (state, action) => {
    switch (action.type) {
        case Type.CREATE_TIMESHEET:
            // return Object.assign({}, state);
            return { ...state, timesheet: action.timesheet }
        case Type.CREATE_TIMESHEET_WORKINGHOUR:
            return { ...state }
        case Type.CREATE_TIMESHEET_SAVE_WORKINGHOUR:
            return { ...state }
        default:
            return { ...state };
    }
};