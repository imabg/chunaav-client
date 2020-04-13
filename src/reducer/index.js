import { combineReducers } from "redux";
import adminLoginReducer from "../containers/Admin/Login/reducer";

const RootReducer = combineReducers({ admin: adminLoginReducer });

export default RootReducer;
