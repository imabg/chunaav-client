import { combineReducers } from "redux";

import adminLoginReducer from "../containers/Admin/Login/reducer";
import dashboardReducer from "../containers/Admin/Dashboard/reducer";
import voterReducer from "../containers/Voter/reducer";

const appReducer = combineReducers({
  admin: adminLoginReducer,
  dashboard: dashboardReducer,
  voter: voterReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "VOTER_SESSION_OUT") {
    state = undefined;
  }
  if (action.type === "ADMIN_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
