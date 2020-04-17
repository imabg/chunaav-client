import {
  FETCH_VOTER_DETAILS_REQUESTED,
  ADD_VOTER_REQUESTED,
  UPDATE_VOTER_REQUESTED,
  DELETE_VOTER_REQUESTED,
  FETCH_CANDIDATE_DETAILS_REQUESTED,
  ADD_CANDIDATE_REQUESTED,
  UPDATE_CANDIDATE_REQUESTED,
  DELETE_CANDIDATE_REQUESTED,
} from "./types";

export const fetchVoterInfo = (aadhar_num) => {
  return {
    type: FETCH_VOTER_DETAILS_REQUESTED,
    payload: aadhar_num,
  };
};

export const addVoter = (voterInfo) => {
  return {
    type: ADD_VOTER_REQUESTED,
    payload: voterInfo,
  };
};

export const updateVoter = (params) => {
  return {
    type: UPDATE_VOTER_REQUESTED,
    payload: params,
  };
};

export const deleteVoter = (id) => {
  return {
    type: DELETE_VOTER_REQUESTED,
    payload: id,
  };
};

// CANDIDATE

export const fetchCandidateInfo = (aadhar_num) => {
  return {
    type: FETCH_CANDIDATE_DETAILS_REQUESTED,
    payload: aadhar_num
  }
}

export const addCandidate = (candInfo) => {
  return {
    type: ADD_CANDIDATE_REQUESTED,
    payload: candInfo
  }
}

export const updateCandidate = (params) => {
  return {
    type: UPDATE_CANDIDATE_REQUESTED,
    payload: params
  }
}

export const deleteCandidate = (id) => {
  return {
    type: DELETE_CANDIDATE_REQUESTED,
    payload: id
  }
}

export const adminLogout = () => {
  return {
    type: "ADMIN_LOGOUT"
  }
}