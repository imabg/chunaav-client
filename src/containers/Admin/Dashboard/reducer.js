import { FETCH_VOTER_SUCCESSFULLY } from "./types";

const dashboardState = { voter: {} };

const dashboardReducer = (state = dashboardState, action) => {
  const response = action.voter;
  switch (action.type) {
    case FETCH_VOTER_SUCCESSFULLY:
      return { ...state, voter: response.data };
    default:
      return dashboardState;
  }
};

export default dashboardReducer;
