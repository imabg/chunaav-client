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
  VERIFY_OTP_FAILED,
  VERIFY_OTP_SUCCESSFULLY,
  VERIFY_OTP_REQUESTED,
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
    yield put({ type: LOGIN_SUCCESSFULLY, voter });
  } catch (error) {
    console.log(error);
  }
}

// Verify OTP
function* verifyOTP(action) {
  try {
    const verify = yield call(verifyOTPRequest, action.payload);
    if (verify.data.success) {
      yield put({ type: VERIFY_OTP_SUCCESSFULLY, verify });
    } else {
      yield put({ type: VERIFY_OTP_FAILED });
    }
  } catch (error) {
    console.log(error);
  }
}

// RESEND-OTP
function* resendOTP(action) {
  try {
    const otp = yield call(resendOTPRequest, action.payload);
    console.log("Resend OTP->",otp)
    yield put({ type: RESEND_OTP_SUCCESSFULLY, otp });
  } catch (error) {
    console.log(error);
  }
}

function* generateVotingScreen(action) {
  try {
    const screen = yield call(generateVotingScreenRequest, action.payload);
    yield put({ type: VOTING_SCREEN_SUCCESSFULLY, screen });
  } catch (error) {
    console.log(error);
  }
}

function* casteVote(action) {
  try {
    const vote = yield call(castVoteRequest, action.payload);
    yield put({ type: CAST_VOTE_SUCCESSFULLY, vote });
  } catch (error) {
    console.log(error);
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
