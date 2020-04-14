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
      headers: { Authorization: `Bearer ${adminToken}` },
    };
    const { image, id } = params;
    const imageRes = await axios.post(
      `${URL}/api/admin/upload/voter?id=${id}`,
      image,
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
