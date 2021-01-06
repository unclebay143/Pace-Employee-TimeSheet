import axios from "axios";
import { SYNC_CURRENT_USER } from "../actions/types";
import { authHeader } from "./auth-header";
import { AUTH_API_URL, options, currentUserFromLocalStorage, USER_PROFILE_URL } from "./root-endpoints";




// This function keeps the user logged in by fetching the current user details and dispatching it into the store
const fetchUserProfile = (staffID) => (dispatch) =>{

  return axios.get(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/${staffID}`, { headers: authHeader })
  .then((response)=>{
    console.log(response);
    dispatch({
      type: SYNC_CURRENT_USER,
      payload: response
    })
  })

}

const UserService = {
  fetchUserProfile

}


export default UserService;