import { takeEvery, call, put, select, take, fork, all, takeLatest } from 'redux-saga/effects';
import * as Types from '../actions/types';
import { GetDataFromServer } from '../service';

const baseUrl = 'http://localhost:8080';
//const baseUrl = 'https://sleepy-basin-37644.herokuapp.com';
function* fetchLoginUser(action) {
  try {
    console.log("Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.firstname = "asdfg";//action.code;
    formBody.lastname = "zxcvbb"; //action.provider;
    formBody.age = "34"
    //const reqMethod = "POST";
    const reqMethod = "GET";
    const loginUrl = baseUrl + '/view';
    const response = yield call(GetDataFromServer, loginUrl, '', '');

    const result = yield response.json();
    console.log("ADS" + result.workingdetails);
    console.log("Result ->" + JSON.stringify(result))
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
    formBody.selectWeek = action.selectWeek; //action.provider;
    formBody.jobTitle = action.jobTitle;
    formBody.approver = action.approver;
    formBody.client = action.client;
    formBody.endDate = action.endDate;
    formBody.projectId = action.projectId;

    //const reqMethod = "POST";
    const reqMethod = "POST";
    const loginUrl = baseUrl + '/timesheet/create';
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
function* fetchTimeSheetCalander(action) {
  console.log("Submit Action->" + JSON.stringify(action));
  try {
    let formBody = {};
    formBody.workingdetails = action.submitTimeSheet.workingdetails;
    const reqMethod = "POST";
    const loginUrl = baseUrl + '/timesheet/submit';
    const response = yield call(GetDataFromServer, loginUrl, 'POST', formBody);
    const result = yield response.json();
    console.log('Result Json' + result);
    if (result.error) {
      yield put({ type: "LOGIN_USER_SERVER_REPONSE_ERROR", error: result.error });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  }
  catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }


}
function* fetchSaveTimeSheetCalander(action) {
  console.log("Save Time Sheet Action->" + JSON.stringify(action));
  try {
    let formBody = {};
    formBody.workingdetails = action.submitTimeSheet.workingdetails;
    const reqMethod = "POST";
    const loginUrl = baseUrl + '/timesheet/save';
    const response = yield call(GetDataFromServer, loginUrl, 'POST', formBody);
    const result = yield response.json();
    console.log('Result Json' + result);
    if (result.error) {
      yield put({ type: "LOGIN_USER_SERVER_REPONSE_ERROR", error: result.error });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  }
  catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }


}

function* fetchListOfEmployee() {

  let formBody = {};
  const reqMethod = "GET";
  const loginUrl = baseUrl + '/view';
  const response = yield call(GetDataFromServer, loginUrl, '', '');

  const result = yield response.json();
  console.log("Result->" + JSON.stringify(result));
  if (result.error) {
    yield put({ type: Types.LIST_EMPLOYEE_DETAILS_SERVER__RESPONSE_ERROR, result });
  } else {
    yield put({ type: Types.LIST_EMPLOYEE_DETAILS_SERVER_RESPONSE_SUCESS, result });
  }
}

export default function* rootSaga(params) {
  yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
  yield takeLatest(Types.CREATE_TIMESHEET, fetchTimeSheet);
  yield takeLatest(Types.CREATE_TIMESHEET_WORKINGHOUR, fetchTimeSheetCalander);
  yield takeLatest(Types.CREATE_TIMESHEET_SAVE_WORKINGHOUR, fetchSaveTimeSheetCalander);
  yield takeLatest(Types.LIST_EMPLOYEE_DETAILS, fetchListOfEmployee);
  console.log("ROOT SAGA");

}
