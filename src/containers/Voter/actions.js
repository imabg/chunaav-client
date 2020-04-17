import {
  LOGIN_REQUESTED,
  VERIFY_OTP_REQUESTED,
  VOTING_SCREEN_REQUESTED,
  RESEND_OTP_REQUESTED,
  CAST_VOTE_REQUESTED,
} from "./types";

export const loginVoter = (credentials) => {
  return {
    type: LOGIN_REQUESTED,
    payload: credentials,
  };
};

export const verifyOTP = (params) => {
  return {
    type: VERIFY_OTP_REQUESTED,
    payload: params,
  };
};

export const resendOTP = (id) => {
  return {
    type: RESEND_OTP_REQUESTED,
    payload: id,
  };
};

// Ward_number and City -> params
export const fetchVotingScreen = (params) => {
  return {
    type: VOTING_SCREEN_REQUESTED,
    payload: params,
  };
};

export const castVote = (votes) => {
  return {
    type: CAST_VOTE_REQUESTED,
    payload: votes,
  };
};

export const voterSession = () => {
  return {
    type: "VOTER_SESSION_OUT",
  };
};
