import {
  takeEvery,
  call,
  put,
  select,
  take,
  fork,
  all,
  takeLatest
} from "redux-saga/effects";
import * as Types from "../actions/types";
import { GetDataFromServer } from "../service";

function* fetchLoginUser(action) {
  try {
    console.log("Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.firstname = "asdfg"; //action.code;
    formBody.lastname = "zxcvbb"; //action.provider;
    formBody.age = "34";
    //const reqMethod = "POST";
    const reqMethod = "GET";
    const loginUrl =
      'http://localhost:8080/employee?firstname="test"&lastname="test"&age=34';
    const response = yield call(GetDataFromServer, loginUrl, "", "");
    const result = yield response.json();
    console.log("Result Json" + result);
    if (result.error) {
      yield put({
        type: "LOGIN_USER_SERVER_REPONSE_ERROR",
        error: result.error
      });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}

function* signUpUser(action) {
  try {
    console.log("Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.firstName = action.firstName;
    formBody.lastName = action.lastName;
    formBody.phoneNumber = action.phoneNumber;
    formBody.email = action.email;
    formBody.password = action.password;
    formBody.confirmPassword = action.confirmPassword;
    //console.log(action.firstName);

    //const reqMethod = "POST";
    const signUpUrl = "http://localhost:8080/create";
    const response = yield call(GetDataFromServer, signUpUrl, "POST", formBody);
    const result = yield response.json();
    console.log("Result Json" + result);
    if (result.error) {
      yield put({
        type: "SIGNUP_USER_SERVER_RESPONSE_ERROR",
        error: result.error
      });
    } else {
      yield put({ type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, result });
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
    const loginUrl = "http://localhost:8080/timesheet";
    const response = yield call(GetDataFromServer, loginUrl, "POST", formBody);
    const result = yield response.json();
    console.log("Result Json" + result);
    if (result.error) {
      yield put({
        type: "LOGIN_USER_SERVER_REPONSE_ERROR",
        error: result.error
      });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}
function* fetchTimeSheetCalander(action) {
  console.log("TimeSheet Calander Action->" + JSON.stringify(action));
  try {
    let formBody = {};
    formBody.workingHour = action.submitTimeSheet.workinghours;
    const reqMethod = "POST";
    const loginUrl = "http://localhost:8080/submitTimeSheet";
    const response = yield call(GetDataFromServer, loginUrl, "POST", formBody);
    const result = yield response.json();
    console.log("Result Json" + result);
    if (result.error) {
      yield put({
        type: "LOGIN_USER_SERVER_REPONSE_ERROR",
        error: result.error
      });
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
  yield takeEvery(Types.CREATE_TIMESHEET_WORKINGHOUR, fetchTimeSheetCalander);
  yield takeEvery(Types.SIGNUP_USER, signUpUser);
  // yield takeEvery(Types.SIGNUP_SAVE_DATABASE, saveDatabase);
}
