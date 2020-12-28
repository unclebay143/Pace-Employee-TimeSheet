import axios from "axios";

const API_URL = "https://reqres.in/api/";

const register = (values) => {
  const { username, workSpaceEmail, password } = values;
  const email = workSpaceEmail
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
