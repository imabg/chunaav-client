import {
  FETCH_VOTER_SUCCESSFULLY,
  UPLOAD_VOTER_IMAGE_SUCCESSFULLY,
  ADD_VOTER_SUCCESSFULLY,
  UPDATE_VOTER_SUCCESSFULLY,
  DELETE_VOTER_SUCCESSFULLY,
  FETCH_CANDIDATE_SUCCESSFULLY,
  ADD_CANDIDATE_SUCCESSFULLY,
  UPDATE_CANDIDATE_SUCCESSFULLY,
  DELETE_CANDIDATE_SUCCESSFULLY,
} from "./types";

const dashboardState = { voter: {}, candidate: {} };

const dashboardReducer = (state = dashboardState, action) => {
  const response = action;
  switch (action.type) {
    case FETCH_VOTER_SUCCESSFULLY:
      return { ...state, voter: response.voter.data };
    case UPLOAD_VOTER_IMAGE_SUCCESSFULLY:
      return { ...state };
    case ADD_VOTER_SUCCESSFULLY:
      return { ...state };
    case UPDATE_VOTER_SUCCESSFULLY:
      return { ...state };
    case DELETE_VOTER_SUCCESSFULLY:
      return { ...state, voter: {} };
    case FETCH_CANDIDATE_SUCCESSFULLY:
      return { ...state, candidate: response.candidate.data };
    case ADD_CANDIDATE_SUCCESSFULLY:
      return { ...state };
    case UPDATE_CANDIDATE_SUCCESSFULLY:
      return { ...state };
    case DELETE_CANDIDATE_SUCCESSFULLY:
      return { ...state, candidate: {} };
    default:
      return dashboardState;
  }
};

export default dashboardReducer;
