import * as Type from "../actions/types";



export default (state, action) => {
    switch (action.type) {
        case Type.CREATE_TIMESHEET:
            return Object.assign({}, state);

        default:
            return { ...state };
    }
};
