//  Axios
import axios from 'axios';

//
import { 
    authHeader, 
    currentUserCompanyID,
} from '../auth-header';

// Api endpoint
import { ADD_DEPARTMENT_API } from '../root-endpoints';

const postNewDepartment = (departmentName) =>{
    console.log(departmentName);
    return axios.post(ADD_DEPARTMENT_API + currentUserCompanyID, departmentName)
}


const DepartmentService = {
    postNewDepartment
};

export default DepartmentService;