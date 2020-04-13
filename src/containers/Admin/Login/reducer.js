import { ADMIN_LOGIN_SUCCESSFULLY } from "./types";
const initalState = {data: {}, isLogin: false};

const adminLoginReducer = (state = initalState, action) => {
  const response = action.admin;
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESSFULLY:
      return { ...state, data: response.data, isLogin: true };
    default:
      return state;
  }
};

export default adminLoginReducer;
