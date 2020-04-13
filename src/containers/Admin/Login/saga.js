import { call, put, takeLatest } from "redux-saga/effects";
import { ADMIN_LOGIN_REQUESTED, ADMIN_LOGIN_SUCCESSFULLY } from "./types";

import loginAdmin from "../../../API";

function* adminLogin(action) {
  try {
    const admin = yield call(loginAdmin, action.payload);
    yield put({ type: ADMIN_LOGIN_SUCCESSFULLY, admin });
    if (admin.success) {
      localStorage.setItem("admin", true);
      localStorage.setItem("admin_token", admin.data.token);
    }
  } catch (error) {
    console.log(error);
  }
}

function* adminLoginSaga() {
  yield takeLatest(ADMIN_LOGIN_REQUESTED, adminLogin);
}

export default adminLoginSaga;
