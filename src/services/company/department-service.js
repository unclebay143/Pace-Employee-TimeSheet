//  Axios
import axios from 'axios';

//
import { 
    authHeader, 
    currentUserCompanyID 
} from '../auth-header';

// Api endpoint
import { ADD_DEPARTMENT_API } from '../root-endpoints';

const postNewDepartment = (newDepartment) =>{
    console.log(authHeader)
    console.log(newDepartment)
    return axios.post(ADD_DEPARTMENT_API + currentUserCompanyID, newDepartment,{ headers: authHeader})
}


const DepartmentService = {
    postNewDepartment
};

export default DepartmentService;
