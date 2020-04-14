import { ADMIN_LOGIN_SUCCESSFULLY, ADMIN_DETAILS_SUCCESS } from "./types";
const initalState = { admin: {}, isLogin: false, data: {} };

const adminLoginReducer = (state = initalState, action) => {
  const response = action;
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESSFULLY:
      return { ...state, admin: response.admin.data._id, isLogin: true };
    case ADMIN_DETAILS_SUCCESS:
      return { ...state, data: response.adminDetails.data };
    default:
      return state;
  }
};

export default adminLoginReducer;
