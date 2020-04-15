import {
  FETCH_VOTER_DETAILS_REQUESTED,
  ADD_VOTER_REQUESTED,
  UPDATE_VOTER_REQUESTED,
  DELETE_VOTER_REQUESTED,
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
