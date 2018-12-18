import { combineReducers } from 'redux';
import CreatTimeSheet from './CreateNewRequest';
import auth from './auth';
import empList from './Employee_list';
import searchList from "./Get_List";
import projcetDetails from './ProjectDetails'
// cont rootReducer = combineReducers({auth})
export default combineReducers({
  auth,
  timesheet: CreatTimeSheet,
  empList,
  projcetDetails,
  searchList
});
