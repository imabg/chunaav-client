import { combineReducers } from "redux";

import adminLoginReducer from "../containers/Admin/Login/reducer";
import dashboardReducer from "../containers/Admin/Dashboard/reducer";

const RootReducer = combineReducers({
  admin: adminLoginReducer,
  dashboard: dashboardReducer,
});

export default RootReducer;
