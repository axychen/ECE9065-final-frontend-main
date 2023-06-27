import axios from "axios";

const token = localStorage.getItem("token");
const API_URL = "http://localhost:3000";
const config = {
    headers: {
      Authorization: token,
    },
  };

const getAllUser = (body)=> { 
    return axios.put(API_URL +"/api/admin/getAllUser", body, config);
}

const setAdmin = (email, body)=> { 
  return axios.put(API_URL +"/api/admin/usersetadmin/"+ email, body, config);
}

const cancelAdmin = (email, body)=> { 
  return axios.put(API_URL +"/api/admin/usercanceladmin/"+ email, body, config);
}

const enableUser = (email, body)=> { 
  return axios.put(API_URL +"/api/admin/userenable/"+ email, body, config);
}

const disableUser = (email, body)=> { 
  return axios.put(API_URL +"/api/admin/userdisable/"+ email, body, config);
}

const getAllReview = ()=> { 
  return axios.get(API_URL +"/api/admin/getAllReview", config);
}

const getpolicy = (policy)=> { 
  return axios.get(API_URL +"/api/policy/get-policy?type="+ policy, config);
}

const updatepolicy = (body) =>{
  return axios.post(API_URL +"/api/policy/update-policy", body, config);
}

const hideReview = (body)=> { 
  return axios.put(API_URL +"/api/admin/hideReview", body, config);
}

export {getAllUser, setAdmin, cancelAdmin, enableUser, disableUser, getAllReview, getpolicy, updatepolicy, hideReview };
