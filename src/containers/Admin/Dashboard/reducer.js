import {
  FETCH_VOTER_SUCCESSFULLY,
  UPLOAD_VOTER_IMAGE_SUCCESSFULLY,
  ADD_VOTER_SUCCESSFULLY,
  UPDATE_VOTER_SUCCESSFULLY,
  DELETE_VOTER_SUCCESSFULLY,
} from "./types";

const dashboardState = { voter: {}, voterImage: "" };

const dashboardReducer = (state = dashboardState, action) => {
  const response = action;
  switch (action.type) {
    case FETCH_VOTER_SUCCESSFULLY:
      return { ...state, voter: response.voter.data };
    case UPLOAD_VOTER_IMAGE_SUCCESSFULLY:
      return { ...state, voterImage: response.upload.data };
    case ADD_VOTER_SUCCESSFULLY:
      return { ...state };
    case UPDATE_VOTER_SUCCESSFULLY:
      return { ...state };
    case DELETE_VOTER_SUCCESSFULLY:
      return { ...state, voter: {}, voterImage: "" };
    default:
      return dashboardState;
  }
};

export default dashboardReducer;