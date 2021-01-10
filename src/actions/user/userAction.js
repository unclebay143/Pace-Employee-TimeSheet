import axios from "axios";
import { authHeader, currentUserStaffID } from "../../services/auth-header";
import { options } from "../../services/root-endpoints";
import UserService from "../../services/user.service";
import { profileUpdateCompletedLogger, profileUpdateFailLogger } from '../../toaster';


//  This action get the current user details from the server and stores it inside the store for update
const syncCurrentUser = (staffID) =>{
    return UserService.fetchUserProfile(staffID)
}

// Function to update user personal record
const updateUserProfile = ( newProfile, staffID, action ) => (dispatch) =>{
    return UserService.updateUserProfile(newProfile, staffID)
    .then((response)=>{

        // Set formik submittion state to false (the loader)
        action.setSubmitting(false)
        UserService.fetchUserProfile(currentUserStaffID)
        // Trigger the profile update success toastLogger
        profileUpdateCompletedLogger()
    }).catch((error)=>{
        action.setSubmitting(false)
        profileUpdateFailLogger()
    })
}



export {
    syncCurrentUser,
    updateUserProfile,
}