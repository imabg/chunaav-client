import {
  LOGIN_SUCCESSFULLY,
  VERIFY_OTP_SUCCESSFULLY,
  RESEND_OTP_SUCCESSFULLY,
  VOTING_SCREEN_SUCCESSFULLY,
  CAST_VOTE_SUCCESSFULLY,
} from "./types";

const voterState = {
  details: {},
  screen: [],
  isVoted: false,
  loginStage: false,
  OTPVerify: false,
  isOTPResend: false,
};

const voterReducer = (state = voterState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFULLY:
      localStorage.setItem("voter_token", action.voter.data.token);
      return { ...state, details: action.voter.data, loginStage: true };
    case VERIFY_OTP_SUCCESSFULLY:
      return { ...state, OTPVerify: true };
    case RESEND_OTP_SUCCESSFULLY:
      return { ...state, isOTPResend: true };
    case VOTING_SCREEN_SUCCESSFULLY:
      return { ...state, screen: action.screen.data };
    case CAST_VOTE_SUCCESSFULLY:
      return { ...state, isVoted: true };
    default:
      return state;
  }
};

export default voterReducer;
