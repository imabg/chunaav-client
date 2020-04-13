import { all } from "redux-saga/effects";

import adminLoginSaga from "../containers/Admin/Login/saga";

export default function* rootSaga() {
  yield all([adminLoginSaga()]);
}
