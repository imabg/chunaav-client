import { ADMIN_LOGIN_REQUESTED, ADMIN_DETAILS_REQUESTED } from "./types";

export const adminLogin = (credentials) => {
  return {
    type: ADMIN_LOGIN_REQUESTED,
    payload: credentials,
  };
};

export const adminDetails = () => {
  return {
    type: ADMIN_DETAILS_REQUESTED,
  };
};
