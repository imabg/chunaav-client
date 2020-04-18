import { takeLatest, call, put } from "redux-saga/effects";

import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFULLY,
  RESEND_OTP_REQUESTED,
  RESEND_OTP_SUCCESSFULLY,
  VOTING_SCREEN_REQUESTED,
  VOTING_SCREEN_SUCCESSFULLY,
  CAST_VOTE_REQUESTED,
  CAST_VOTE_SUCCESSFULLY,
  VERIFY_OTP_SUCCESSFULLY,
  VERIFY_OTP_REQUESTED,
  SHOW_ERROR,
} from "./types";

import {
  loginVoterRequest,
  generateVotingScreenRequest,
  castVoteRequest,
  verifyOTPRequest,
  resendOTPRequest,
} from "../../API";

function* loginVoter(action) {
  try {
    const voter = yield call(loginVoterRequest, action.payload);
    if (voter.success) {
      yield put({ type: LOGIN_SUCCESSFULLY, voter });
      yield put({type: "CLEAR_ERROR"})
    }
  } catch (error) {
    const err = error.message;
    yield put({ type: SHOW_ERROR, err });
  }
}

// Verify OTP
function* verifyOTP(action) {
  try {
    const verify = yield call(verifyOTPRequest, action.payload);
    yield put({ type: VERIFY_OTP_SUCCESSFULLY, verify });
  } catch (error) {
    let err;
    if(error.code) {
     err = error.message;
    } else {
      err = "Sorry! you refresh the page. Please contact the ADMIN."
    }
    yield put({ type: SHOW_ERROR, err });
  }
}

// RESEND-OTP
function* resendOTP(action) {
  try {
    const otp = yield call(resendOTPRequest, action.payload);
    yield put({ type: RESEND_OTP_SUCCESSFULLY, otp });
  } catch (error) {
    const err = error.message;
    yield put({ type: SHOW_ERROR, err });
  }
}

function* generateVotingScreen(action) {
  try {
    const screen = yield call(generateVotingScreenRequest, action.payload);
    yield put({ type: VOTING_SCREEN_SUCCESSFULLY, screen });
  } catch (error) {
    const err = error.message;
    yield put({ type: SHOW_ERROR, err });
  }
}

function* casteVote(action) {
  try {
    const vote = yield call(castVoteRequest, action.payload);
    yield put({ type: CAST_VOTE_SUCCESSFULLY, vote });
  } catch (error) {
    const err = error.message;
    yield put({ type: SHOW_ERROR, err });
  }
}

function* voterSaga() {
  yield takeLatest(LOGIN_REQUESTED, loginVoter);
  yield takeLatest(RESEND_OTP_REQUESTED, resendOTP);
  yield takeLatest(VOTING_SCREEN_REQUESTED, generateVotingScreen);
  yield takeLatest(CAST_VOTE_REQUESTED, casteVote);
  yield takeLatest(VERIFY_OTP_REQUESTED, verifyOTP);
}

export default voterSaga;
