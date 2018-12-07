import { combineReducers } from 'redux';
import CreatTimeSheet from './CreateNewRequest';
import auth from './auth';
import empList from './Employee_list';
// cont rootReducer = combineReducers({auth})
export default combineReducers({
  auth,
  timesheet: CreatTimeSheet,
  empList
});
