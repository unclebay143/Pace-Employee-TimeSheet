// Axios
import axios from "axios";

// API
import { AUTH_API_URL } from "./root-endpoints";


const register = (values) => {
  const { username, workSpaceEmail, password } = values;
  const email = workSpaceEmail
  return axios.post(AUTH_API_URL + 'register', {
    username,
    email,
    password,
  });
};

const login = (values) => {
  const { email, password } = values;
  console.log(email, password)
  return axios.post(AUTH_API_URL + 'login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    })
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
