import axios from "axios";
import { authHeader } from "../../services/auth-header";
import { options } from "../../services/root-endpoints";
import { profileUpdateCompletedLogger, profileUpdateFailLogger } from '../../toaster';

// Function to update user personal record
const updateUserProfile = ( newProfile ) =>{
    console.log(newProfile)
    console.log(newProfile.staffID)
    axios.put(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/updateProfile/${newProfile.staffID}`, newProfile, { headers: authHeader })
    .then((response)=>{
        console.log(response)
        profileUpdateCompletedLogger()
    }).catch((error)=>{
        console.log(error)
        profileUpdateFailLogger()
    })
}


export {
    updateUserProfile,
}