import axios from "axios";
import { options } from "../../services/root-endpoints";
import { profileUpdateCompletedLogger, profileUpdateFailLogger } from '../../toaster';


const updateUserProfile = ({ staffID }, newProfile) =>{
    axios.put(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/updateProfile/${staffID}`, newProfile, { headers: options })
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