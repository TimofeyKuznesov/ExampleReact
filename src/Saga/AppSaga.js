import {all, fork, call, put, take} from "redux-saga/effects";
import * as AppActions from "../Actions/AppActions";
import * as UiActions from "../Actions/UiActions";
import * as HttpApi from "../Services/HttpApi";

function * fetchDepartments() {
  try {
    yield take(AppActions.departments.request().type);
    let departments = yield call(HttpApi.fetchDepartments);
    yield put(AppActions.departments.success(departments));
    yield put(AppActions.employees.request());
  } catch (e) {
    //console.log(e);
  }
}

function * fetchEmployees() {
  try {
    yield take(AppActions.employees.request().type);
    let departments = yield call(HttpApi.fetchEmployees);
    yield put(AppActions.employees.success(departments));
  } catch (e) {
    //console.log(e);
  }
}

function * saveDepartment() {
  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
  while(true){
    try {
      let action = yield take(AppActions.department.save().type);
      let department = yield call(HttpApi.saveDepartment,action.payload.department);
      yield put(UiActions.departments.edit(department));
      yield put(AppActions.department.success(department));
    } catch (e) {
      //console.log(e);
    }
  }
}

function * saveEmployee() {
  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
  while(true){
    try {
      let action = yield take(AppActions.employee.save().type);
      let employee = yield call(HttpApi.saveEmployee,action.payload.employee);
      yield put(UiActions.employees.edit(employee));
      yield put(AppActions.employee.success(employee));
    } catch (e) {
      //console.log(e);
    }
  }
}

function * AppSaga() {
  yield all([
    fork(fetchEmployees),
    fork(fetchDepartments),
    fork(saveDepartment),
    fork(saveEmployee)
  ]);
}

export default AppSaga;
