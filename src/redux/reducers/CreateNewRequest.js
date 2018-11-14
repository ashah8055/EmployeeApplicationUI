import * as Type from "../actions/types";



export default (state, action) => {
    switch (action.type) {
        case Type.CREATE_TASK:
            return Object.assign({}, state);

        default:
            return { ...state };
    }
};
