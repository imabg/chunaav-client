import { call, takeLatest, put } from "redux-saga/effects";
import { FETCH_VOTER_DETAILS_REQUESTED, FETCH_VOTER_SUCCESSFULLY } from "./types";

import { fetchVoterInfo } from "../../../API";

function* voterDetails(action) {
    try {
        const voter = yield call(fetchVoterInfo, action.payload)
        yield put({type: FETCH_VOTER_SUCCESSFULLY, voter})
    } catch (error) {
        console.log(error)
    }
}


function* dashboardSaga() {
  yield takeLatest(FETCH_VOTER_DETAILS_REQUESTED, voterDetails);
}

export default dashboardSaga;
