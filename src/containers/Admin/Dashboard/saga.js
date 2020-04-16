import { call, takeLatest, put } from "redux-saga/effects";
import {
  FETCH_VOTER_DETAILS_REQUESTED,
  FETCH_VOTER_SUCCESSFULLY,
  ADD_VOTER_REQUESTED,
  ADD_VOTER_SUCCESSFULLY,
  UPLOAD_VOTER_IMAGE_SUCCESSFULLY,
  UPDATE_VOTER_REQUESTED,
  UPDATE_VOTER_SUCCESSFULLY,
  DELETE_VOTER_REQUESTED,
  DELETE_VOTER_SUCCESSFULLY,
  FETCH_CANDIDATE_DETAILS_REQUESTED,
  FETCH_CANDIDATE_SUCCESSFULLY,
  ADD_CANDIDATE_REQUESTED,
  ADD_CANDIDATE_SUCCESSFULLY,
  UPDATE_CANDIDATE_REQUESTED,
  UPDATE_CANDIDATE_SUCCESSFULLY,
  DELETE_CANDIDATE_REQUESTED,
  DELETE_CANDIDATE_SUCCESSFULLY,
} from "./types";

import {
  fetchVoterInfo,
  uploadVoterImage,
  addVoterRequest,
  updateVoterRequest,
  deleteVoterRequest,
  fetchCandidateRequest,
  addCandidateRequest,
  updateCandidateRequest,
  deleteCandidateRequest,
} from "../../../API";

function* voterDetails(action) {
  try {
    const voter = yield call(fetchVoterInfo, action.payload);
    yield put({ type: FETCH_VOTER_SUCCESSFULLY, voter });
  } catch (error) {
    console.log(error);
  }
}

function* addVoter(voterInfo) {
  try {
    const { voter, img } = voterInfo.payload;
    const addVoter = yield call(addVoterRequest, voter);
    yield put({ type: ADD_VOTER_SUCCESSFULLY, addVoter });
    const { data } = addVoter;
    const id = data.data._id;
    const upload = yield call(uploadVoterImage, { id, img });
    yield put({ type: UPLOAD_VOTER_IMAGE_SUCCESSFULLY, upload });
  } catch (error) {
    console.log(error);
  }
}

function* updateVoter(params) {
  try {
    const { id, voter } = params.payload;
    const updateVoter = yield call(updateVoterRequest, { id, voter });
    yield put({ type: UPDATE_VOTER_SUCCESSFULLY, updateVoter });
  } catch (error) {
    console.log(error);
  }
}

function* deleteVoter(action) {
  try {
    yield call(deleteVoterRequest, action.payload);
    yield put({ type: DELETE_VOTER_SUCCESSFULLY });
  } catch (error) {
    console.log(error);
  }
}

// Candidate
function* candidateDetails(action) {
  try {
    const candidate = yield call(fetchCandidateRequest, action.payload);
    yield put({ type: FETCH_CANDIDATE_SUCCESSFULLY, candidate });
  } catch (error) {
    console.log(error);
  }
}

function* addCandidate(action) {
  try {
    const newCandidate = yield call(addCandidateRequest, action.payload);
    yield put({ type: ADD_CANDIDATE_SUCCESSFULLY, newCandidate });
  } catch (error) {
    console.log(error);
  }
}

function* updateCandidate(action) {
  try {
    const updateCand = yield call(updateCandidateRequest, action.payload);
    yield put({ type: UPDATE_CANDIDATE_SUCCESSFULLY, updateCand });
  } catch (error) {
    console.log(error);
  }
}

function* deleteCandidate(action) {
  try {
    const deleteCand = yield call(deleteCandidateRequest, action.payload);
    yield put({ type: DELETE_CANDIDATE_SUCCESSFULLY, deleteCand });
  } catch (error) {
    console.log(error);
  }
}

function* dashboardSaga() {
  yield takeLatest(FETCH_VOTER_DETAILS_REQUESTED, voterDetails);
  yield takeLatest(ADD_VOTER_REQUESTED, addVoter);
  yield takeLatest(UPDATE_VOTER_REQUESTED, updateVoter);
  yield takeLatest(DELETE_VOTER_REQUESTED, deleteVoter);
  yield takeLatest(FETCH_CANDIDATE_DETAILS_REQUESTED, candidateDetails);
  yield takeLatest(ADD_CANDIDATE_REQUESTED, addCandidate);
  yield takeLatest(UPDATE_CANDIDATE_REQUESTED, updateCandidate);
  yield takeLatest(DELETE_CANDIDATE_REQUESTED, deleteCandidate);
}

export default dashboardSaga;
