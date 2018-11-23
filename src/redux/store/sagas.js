import { takeEvery, call, put, select, take, fork, all, takeLatest } from 'redux-saga/effects';
import * as Types from '../actions/types';
import { GetDataFromServer } from '../service';



function* fetchLoginUser(action) {
  try {
    console.log("Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.firstname = "asdfg";//action.code;
    formBody.lastname = "zxcvbb"; //action.provider;
    formBody.age = "34"
    //const reqMethod = "POST";
    const reqMethod = "GET";
    const loginUrl = 'http://localhost:8080/employee?firstname="test"&lastname="test"&age=34';
    const response = yield call(GetDataFromServer, loginUrl, '', '');
    const result = yield response.json();
    console.log('Result Json' + result);
    if (result.error) {
      yield put({ type: "LOGIN_USER_SERVER_REPONSE_ERROR", error: result.error });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}
function* fetchTimeSheet(action) {
  console.log("TimeSheet Action->" + JSON.stringify(action));
  try {
    console.log("Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.ddljob = action.ddljob;
    formBody.selectWeek = action.selectWeek; //action.provider;
    formBody.jobId = action.jobId;
    formBody.approver = action.approver;
    //const reqMethod = "POST";
    const reqMethod = "POST";
    const loginUrl = 'http://localhost:8080/timesheet';
    const response = yield call(GetDataFromServer, loginUrl, 'POST', formBody);
    const result = yield response.json();
    console.log('Result Json' + result);
    if (result.error) {
      yield put({ type: "LOGIN_USER_SERVER_REPONSE_ERROR", error: result.error });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }

}


export default function* rootSaga(params) {
  yield takeEvery(Types.LOGIN_USER, fetchLoginUser);
  yield takeEvery(Types.CREATE_TIMESHEET, fetchTimeSheet);

}
