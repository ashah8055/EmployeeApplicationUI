import { combineReducers } from 'redux';
import CreatTimeSheet from './CreateNewRequest';
import auth from './auth';
// cont rootReducer = combineReducers({auth})
export default combineReducers({
  auth,
  timesheet: CreatTimeSheet
});
