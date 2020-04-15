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
} from "./types";

import {
  fetchVoterInfo,
  uploadVoterImage,
  addVoterRequest,
  updateVoterRequest,
  deleteVoterRequest
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

function* deleteVoter (action) {
  try {
     yield call(deleteVoterRequest, action.payload)
    yield put ({type: DELETE_VOTER_SUCCESSFULLY})
  } catch (error) {
    console.log(error)
  }

}

function* dashboardSaga() {
  yield takeLatest(FETCH_VOTER_DETAILS_REQUESTED, voterDetails);
  yield takeLatest(ADD_VOTER_REQUESTED, addVoter);
  yield takeLatest(UPDATE_VOTER_REQUESTED, updateVoter);
  yield takeLatest(DELETE_VOTER_REQUESTED, deleteVoter);
}

export default dashboardSaga;
