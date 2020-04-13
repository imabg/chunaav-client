import { ADMIN_LOGIN_REQUESTED } from "./types";

export const adminLogin = (credentials) => {
  return {
    type: ADMIN_LOGIN_REQUESTED,
    payload: credentials,
  };
};
