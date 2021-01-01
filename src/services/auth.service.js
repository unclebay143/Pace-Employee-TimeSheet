import axios from "axios";

const API_URL = "https://reqres.in/api/";

const register = (values) => {
  const { username, workSpaceEmail, password } = values;
  const email = workSpaceEmail
  return axios.post(API_URL + 'register', {
    username,
    email,
    password,
  });
};

const login = (values) => {
  const { email, password } = values;
  console.log(email, password)
  return axios.post(API_URL + 'login', {
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
