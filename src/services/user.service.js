import axios from "axios";
import { SYNC_CURRENT_USER } from "../actions/types";
import { authHeader,currentUserFromLocalStorage, currentUserStaffID } from "./auth-header";
import { UPDATE_USER_PASSWORD } from "./root-endpoints";


// This function keeps the user logged in by fetching the current user details and dispatching it into the store
const fetchUserProfile = (staffID) => dispatch =>{
  // console.log('SERVICE', staffID);

  dispatch({
    type: SYNC_CURRENT_USER,
    payload: currentUserFromLocalStorage
  })
  return axios.get(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/${staffID === '' ? currentUserStaffID : staffID}`, { headers: authHeader })
  .then((response)=>{
    // console.log(response)
    // Extract updated user profile from the server response
    const currentUserProfile = response.data.data[0];

    // Update the userProfile from the server with the local storage
    localStorage.setItem('currentUser', JSON.stringify(currentUserProfile));

    dispatch({
      type: SYNC_CURRENT_USER,
      payload: currentUserProfile
    })
  })
  .catch((error)=>{
    console.log(error)
    //
    // sessionExpired()
    // logout()
  })

}

const updateUserProfile = (newProfile, staffID) =>{
  return axios.put(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/updateProfile/${staffID}`, newProfile, { headers: authHeader })

}

const updateUserPassword = ({password}) =>{
  const data = {
    password
  }
  return axios.put(UPDATE_USER_PASSWORD + currentUserStaffID, data, { headers: authHeader })
}

// Requires to be stored in an object before using
const UserService = {
  fetchUserProfile,
  updateUserProfile,
  updateUserPassword

}


export default UserService;