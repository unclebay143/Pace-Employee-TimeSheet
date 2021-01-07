//  Axios
import axios from 'axios';

//
import { 
    authHeader, 
    currentUserCompanyID,
    currentUserFromLocalStorage,
    getCurrentUser
} from '../auth-header';

// Api endpoint
import { ADD_DEPARTMENT_API } from '../root-endpoints';

const postNewDepartment = (newDepartment) =>{
    console.log(authHeader)
    console.log(newDepartment)
    console.log(currentUserCompanyID)
    console.log(getCurrentUser)
    return axios.post(ADD_DEPARTMENT_API + currentUserCompanyID, newDepartment,{ headers: authHeader})
}


const DepartmentService = {
    postNewDepartment
};

export default DepartmentService;