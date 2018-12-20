import { combineReducers } from "redux";
import CreatTimeSheet from "./CreateNewRequest";
import auth from "./auth";
import empList from "./Get_List";
import proList from "./Get_List";

// cont rootReducer = combineReducers({auth})
export default combineReducers({
  auth,
  timesheet: CreatTimeSheet,
  empList: empList,
  proList: proList
});
