import axios from "axios";
const token = localStorage.getItem("token");

const API_URL = "http://localhost:3000";
const config = {
  headers: {
    Authorization: token,
  },
};
const login = (body) => {
  return axios.post(API_URL + "/api/auth", body,config);
};

//not sure which portal
const signup = (body) => {
  return axios.post(API_URL + "/api/users", body,config);
};

const googleLogin = (body) => {
  return axios.post(API_URL + "/api/auth/googleLogin", body);
};
const changePassword = (body) => {
  return axios.post(API_URL + "/api/users/changePassword", body);
};

const getPolicy = (type) => {
  return axios.get(API_URL + "/api/policy/get-policy?type="+type);
};

export {login, signup,googleLogin,changePassword,getPolicy};
