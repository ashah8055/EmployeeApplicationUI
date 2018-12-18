import * as Type from "../actions/types";
const initialUserObj = {

    "listOfProject": []
};

const handleProjectList = (state, action) => {
    console.log("ListProject" + JSON.stringify(action));
    let newState = { ...state };
    if (action.formBody !== undefined) {
        newState = Object.assign({}, state, { "listOfProject": action.formBody.projectDetails.projectDetails.projctName })
        console.log("New" + JSON.stringify(newState));
    }
    return { ...newState };

}
export default (state = initialUserObj, action = {}) => {
    switch (action.type) {
        case Type.CREATE_PROJECT:
            return { ...state, projectDetails: action.projectDetails }
        case Type.LIST_PROJECT_DETAILS_SERVER_RESPONSE_SUCESS:
            return handleProjectList(state, action);
        default:
            return { ...state };
    }
};