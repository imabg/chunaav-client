import axios from "axios";

const URL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;

const loginAdmin = (credentials) => {
  return axios.post(`${URL}/api/admin/login`, credentials).then((res) => {
    return res.data;
  });
};

export default loginAdmin;
