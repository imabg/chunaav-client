import { FETCH_VOTER_DETAILS_REQUESTED } from "./types";

export const fetchVoterInfo = (aadhar_num) => {
  return {
    type: FETCH_VOTER_DETAILS_REQUESTED,
    payload: aadhar_num
  };
};
