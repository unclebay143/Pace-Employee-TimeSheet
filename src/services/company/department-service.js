//  Axios
import axios from 'axios';

//
import { 
    authHeader, 
    // currentUserCompanyID,
} from '../auth-header';

// Api endpoint
import { ADD_DEPARTMENT_API } from '../root-endpoints';

const postNewDepartment = (departmentName, companyID) =>{
    console.log(departmentName);
    console.log(companyID);
    // return axios.options(ADD_DEPARTMENT_API)
    return axios.post(ADD_DEPARTMENT_API + companyID, departmentName)
}


const DepartmentService = {
    postNewDepartment
};

export default DepartmentService;