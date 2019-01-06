import { takeEvery, call, put, select, take, fork, all, takeLatest } from 'redux-saga/effects';
import * as Types from '../actions/types';
import { GetDataFromServer, deleteTodoAPI } from '../service';

//const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://sleepy-basin-37644.herokuapp.com';
const baseUrl2 = 'https://fierce-crag-76882.herokuapp.com';
const aws = 'http://18.222.167.189:5000';
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
function* fetchCreateProjectDetails(action) {

  let formBody = {};
  formBody.projectDetails = action.projectDetails;
  yield put({ type: Types.LIST_PROJECT_DETAILS_SERVER_RESPONSE_SUCESS, formBody })
  // let formBody = {};
  // const reqMethod = "POST";
  // const loginUrl = baseUrl + '/view';
  // const response = yield call(GetDataFromServer, loginUrl, '', '');

  // const result = yield response.json();
  // console.log("Result->" + JSON.stringify(result));
  // if (result.error) {
  //   yield put({ type: Types.CREATE_PROJECT_DETAILS_SERVER_RESPONSE_ERROR, result });
  // } else {
  //   yield put({ type: Types.CREATE_PROJECT_DETAILS_SERVER_RESPONSE_SUCESS, result });
  // }
}
function* signUpUser(action) {
  try {
    console.log("Submit Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.user = action.user;

    const signUpUrl = baseUrl2 + "/user/create";
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
    const AddEmpUrl = baseUrl2 + "/employee/create";
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

function* getEmployee(action) {
  console.log("Get Action->" + JSON.stringify(action));

  const reqMethod = "GET";
  const loginUrl = baseUrl2 + "/employee/listEmployees";

  const response = yield call(GetDataFromServer, loginUrl, "", "");

  const result = yield response.json();

  console.log("Result->" + JSON.stringify(result));
  if (result.error) {
    yield put({ type: Types.GET_EMPLOYEE_LIST_ERROR_RESPONSE, result });
  } else {
    yield put({ type: Types.GET_EMPLOYEE_LIST_SUCCESS_RESPONSE, result });
  }
}

function* searchEmployee(action) {
  console.log("Search Action->" + JSON.stringify(action));

  let firstName = {};
  firstName = action.result.firstName;

  const reqMethod = "GET";
  const loginUrl = baseUrl2 + `/employee/search/${firstName}`;

  const response = yield call(GetDataFromServer, loginUrl, "", "");

  const result = yield response.json();

  console.log("Result->" + JSON.stringify(result));
  if (result.error) {
    yield put({ type: Types.SEARCH_EMP_ERROR, result });
  } else {
    yield put({ type: Types.SEARCH_EMP_SUCCESS, result });
  }
}

function* saveProjectDetails(action) {
  try {
    console.log("CREATE PROJECT Action->" + JSON.stringify(action.projectDetails.projectDetails));

    let formBody = {};
    formBody = action.projectDetails.projectDetails;
    console.log("FormBody" + JSON.stringify(formBody));

    const reqMethod = "POST";
    // const loginUrl = baseUrl + '/project/create';
    const loginUrl = aws + '/save-project';
    const response = yield call(GetDataFromServer, loginUrl, 'POST', formBody);
    const result = yield response.json();
    console.log('Result Json' + JSON.stringify(result));
    if (result.error) {
      yield put({ type: Types.CREATE_PROJECT_DETAILS_SERVER_RESPONSE_ERROR, error: result.error });
    } else {
      yield put({ type: Types.CREATE_PROJECT_DETAILS_SERVER_RESPONSE_SUCESS, result });
      console.log("PROJECT DETAILS" + JSON.stringify(result));
    }
  }
  catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}
function* fetchListOfProjectDetails() {

  let formBody = {};
  const reqMethod = "GET";
  const loginUrl = aws + '/get-all-projects';
  const response = yield call(GetDataFromServer, loginUrl, '', '');

  const result = yield response.json();
  if (result.error) {
    yield put({ type: Types.LIST_PROJECT_DETAILS_SERVER_RESPONSE_ERROR, result });
  } else {
    yield put({ type: Types.LIST_PROJECT_DETAILS_SERVER_RESPONSE_SUCESS, result });
  }
}
function* deleteProjectDetails(action) {
  console.log("DELETE ACTIO" + JSON.stringify(action))
  try {
    // Ensure that your API returns the data of the updated todo
    let formBody = {};
    formBody._id = action._id
    const newData = yield call(deleteTodoAPI, formBody); // Refer sample to api calls in remote.js file
    yield put({ type: Types.DELETE_PROJECT_SUCESS, newData }); // pass in the id you updated and the newData returned from the API
    /// Other things can go here depending on what you want
  } catch (e) {
    console.log("SAGA ERROR")
  }
}
function* listProjects(action) {
  console.log("Get Action->" + JSON.stringify(action));

  const reqMethod = "GET";
  const loginUrl = "https://18.222.167.189:5000/get-all-projects";

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
  yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
  yield takeLatest(Types.CREATE_TIMESHEET, fetchTimeSheet);
  yield takeLatest(Types.CREATE_TIMESHEET_WORKINGHOUR, fetchTimeSheetCalander);
  yield takeLatest(Types.CREATE_TIMESHEET_SAVE_WORKINGHOUR, fetchSaveTimeSheetCalander);
  yield takeLatest(Types.LIST_EMPLOYEE_DETAILS, fetchListOfEmployee);
  yield takeLatest(Types.CREATE_PROJECT, fetchCreateProjectDetails);
  yield takeEvery(Types.SIGNUP_USER, signUpUser);
  yield takeEvery(Types.EMPLOYEE_SAVE_DATABASE, saveEmployee);
  yield takeEvery(Types.GET_EMPLOYEE_LIST, getEmployee);
  yield takeEvery(Types.SEARCH_EMP, searchEmployee);
  yield takeEvery(Types.CREATE_PROJECT, saveProjectDetails)
  yield takeLatest(Types.LIST_PROJECT_DETAILS, fetchListOfProjectDetails)
  yield takeLatest(Types.DELETE_PROJECT, deleteProjectDetails)
  yield takeEvery(Types.PROJECT_LIST, listProjects);

  console.log("ROOT SAGA");

}
