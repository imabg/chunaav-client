import { all } from "redux-saga/effects";

import adminLoginSaga from "../containers/Admin/Login/saga";
import dashboardReducer from "../containers/Admin/Dashboard/saga";

export default function* rootSaga() {
  yield all([adminLoginSaga(), dashboardReducer()]);
}
