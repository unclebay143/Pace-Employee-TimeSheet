import axios from "axios";
import { SYNC_CURRENT_USER } from "../actions/types";
import { authHeader } from "./auth-header";
import { AUTH_API_URL, options, currentUserFromLocalStorage, USER_PROFILE_URL } from "./root-endpoints";




// This function keeps the user logged in by fetching the current user details and dispatching it into the store
const fetchUserProfile = (staffID) => dispatch =>{
  return axios.get(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/${staffID}`, { headers: authHeader })
  .then((response)=>{
    dispatch({
      type: SYNC_CURRENT_USER,
      payload: response
    })
  })

}

const updateUserProfile = (newProfile, staffID) =>{
  return axios.put(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/updateProfile/${staffID}`, newProfile, { headers: authHeader })

}

// Requires to be stored in an object before using
const UserService = {
  fetchUserProfile,
  updateUserProfile

}


export default UserService;