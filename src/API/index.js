import axios from "axios";

const URL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;

export const loginAdmin = async (credentials) => {
  try {
    const response = await axios.post(`${URL}/api/admin/login`, credentials);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchAdminDetails = async () => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const res = await axios.get(`${URL}/api/admin/details`, adminConfig);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetchVoterInfo = async (aadhar_num) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const res = await axios.get(
      `${URL}/api/admin/voter/details?aadhar_num=${aadhar_num}`,
      adminConfig
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const uploadVoterImage = async (params) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    };
    const { img, id } = params;
    const imageRes = await axios.post(
      `${URL}/api/admin/upload/voter?id=${id}`,
      img,
      adminConfig
    );
    return imageRes;
  } catch (error) {
    return error;
  }
};

export const addVoterRequest = async (voter) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const v = await axios.post(`${URL}/api/admin/addVoter`, voter, adminConfig);
    return v;
  } catch (error) {
    return error;
  }
};

export const updateVoterRequest = async (params) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const { id, voter } = params;
    const update = await axios.put(
      `${URL}/api/admin/updateVoter?id=${id}`,
      voter,
      adminConfig
    );
    return update;
  } catch (error) {
    return error;
  }
};

export const deleteVoterRequest = async (id) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const deleteVoter = await axios.delete(
      `${URL}/api/admin/deleteVoter?id=${id}`,
      adminConfig
    );
    return deleteVoter;
  } catch (error) {
    return error;
  }
};

// Candidates

export const fetchCandidateRequest = async (id) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const fetchCand = await axios.get(
      `${URL}/api/admin/candidate/details?id=${id}`,
      adminConfig
    );
    return fetchCand.data;
  } catch (error) {
    return error;
  }
};

export const addCandidateRequest = async (candidate) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const addCand = await axios.post(
      `${URL}/api/admin/addCandidate`,
      candidate,
      adminConfig
    );
    return addCand.data;
  } catch (error) {
    return error;
  }
};

export const updateCandidateRequest = async (params) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const { id, candidate } = params;
    const updateCand = await axios.put(
      `${URL}/api/admin/updateCandidate?id=${id}`,
      candidate,
      adminConfig
    );
    return updateCand;
  } catch (error) {
    return error;
  }
};

export const deleteCandidateRequest = async (id) => {
  try {
    let adminToken = localStorage.getItem("admin_token");
    let adminConfig = {
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const deleteCand = await axios.delete(
      `${URL}/api/admin/deleteCandidate?id=${id}`,
      adminConfig
    );
    return deleteCand;
  } catch (error) {
    return error;
  }
};

// VOTER

export const loginVoterRequest = async (credentials) => {
  try {
    const voter = await axios.post(`${URL}/api/login`, credentials);
    return voter.data;
  } catch (error) {
    throw new Error(error.response.data.err);
  }
};

export const generateVotingScreenRequest = async (screenInfo) => {
  try {
    let voterToken = localStorage.getItem("voter_token");
    let voterConfig = {
      headers: { Authorization: `Bearer ${voterToken}` },
    };
    const { city, ward_num } = screenInfo;
    const screen = await axios.get(
      `${URL}/api/screen?city=${city}&ward=${ward_num}`,
      voterConfig
    );
    return screen.data;
  } catch (error) {
    throw new Error(error.response.data.err);
  }
};

export const castVoteRequest = async (votes) => {
  try {
    let voterToken = localStorage.getItem("voter_token");
    let voterConfig = {
      headers: { Authorization: `Bearer ${voterToken}` },
    };
    const v = await axios.post(`${URL}/api/vote`, votes, voterConfig);
    return v.data;
  } catch (error) {
    throw new Error(error.response.data.err);
  }
};

export const verifyOTPRequest = async (params) => {
  try {
    let voterToken = localStorage.getItem("voter_token");
    let voterConfig = {
      headers: { Authorization: `Bearer ${voterToken}` },
    };
    const { id, OTP } = params;
    const otp = await axios.get(
      `${URL}/verify/otp?id=${id}&o=${OTP}`,
      voterConfig
    );
    return otp;
  } catch (error) {
    throw new Error(error.response.data.err);
  }
};

export const resendOTPRequest = async (id) => {
  try {
    let voterToken = localStorage.getItem("voter_token");
    let voterConfig = {
      headers: { Authorization: `Bearer ${voterToken}` },
    };
    const newOtp = await axios.get(`${URL}/resend/otp?id=${id}`, voterConfig);
    return newOtp;
  } catch (error) {
    throw new Error(error.response.data.err);
  }
};
