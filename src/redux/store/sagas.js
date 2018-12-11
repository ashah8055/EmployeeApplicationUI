import { takeEvery, call, put } from "redux-saga/effects";
import * as Types from "../actions/types";
import { GetDataFromServer } from "../service";

function* fetchLoginUser(action) {
  try {
    console.log("LogIn Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.firstName = action.firstName; //action.code;
    formBody.password = action.password; //action.provider;
    //const reqMethod = "POST";
    console.log(formBody);
    const loginUrl = "http://localhost:8080/get?firstName=formBody.firstName";
    const response = yield call(GetDataFromServer, loginUrl, "GET", formBody);
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

    const loginUrl = "http://localhost:8080/create";
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
  console.log("Submit Action->" + JSON.stringify(action));
  try {
    let formBody = {};
    formBody.workingdetails = action.submitTimeSheet.workingdetails;
    const loginUrl = "http://localhost:8080/submit";
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
function* fetchSaveTimeSheetCalander(action) {
  console.log("Save Time Sheet Action->" + JSON.stringify(action));
  try {
    let formBody = {};
    formBody.workingdetails = action.submitTimeSheet.workingdetails;
    const loginUrl = "http://localhost:8080/timesheet/save";
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

function* signUpUser(action) {
  try {
    console.log("Submit Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.user = action.user;

    const signUpUrl = "http://localhost:8080/create";
    const response = yield call(
      GetDataFromServer,
      signUpUrl,
      "POST",
      formBody.user
    );
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

function* saveEmployee(action) {
  try {
    console.log("Submit Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.user = action.user;

    //const reqMethod = "POST";
    const AddEmpUrl = "http://localhost:8080/employee";
    const response = yield call(
      GetDataFromServer,
      AddEmpUrl,
      "POST",
      formBody.user
    );
    const result = yield response.json();
    console.log("Result Json" + result);
    if (result.error) {
      yield put({
        type: "EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_ERROR",
        error: result.error
      });
    } else {
      yield put({
        type: Types.EMPLOYEE_SAVE_DATABASE_SERVER_RESPONSE_SUCCESS,
        result
      });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}

function* searchEmployee(action) {
  console.log("Search Action->" + JSON.stringify(action));
  let formBody = {};
  formBody.result = action.result;
  let firstName = {};
  firstName = action.result.firstName;

  console.log(firstName);
  const reqMethod = "GET";
  const loginUrl = `http://localhost:8080/search/${firstName}`;

  const response = yield call(GetDataFromServer, loginUrl, "", "");

  const result = yield response.json();

  console.log("Result->" + JSON.stringify(result));
  if (result.error) {
    yield put({ type: Types.GET_EMPLOYEE_LIST_ERROR_RESPONSE, result });
  } else {
    yield put({ type: Types.GET_EMPLOYEE_LIST_SUCCESS_RESPONSE, result });
  }
}

export default function* rootSaga(params) {
  yield takeEvery(Types.LOGIN_USER, fetchLoginUser);
  yield takeEvery(Types.CREATE_TIMESHEET, fetchTimeSheet);
  yield takeEvery(Types.CREATE_TIMESHEET_WORKINGHOUR, fetchTimeSheetCalander);
  yield takeEvery(
    Types.CREATE_TIMESHEET_SAVE_WORKINGHOUR,
    fetchSaveTimeSheetCalander
  );
  yield takeEvery(Types.SIGNUP_USER, signUpUser);
  yield takeEvery(Types.EMPLOYEE_SAVE_DATABASE, saveEmployee);
  yield takeEvery(Types.GET_EMPLOYEE_LIST, searchEmployee);
}
