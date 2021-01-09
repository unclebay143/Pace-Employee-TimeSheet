//  Axios
import axios from 'axios';

//
import { 
    authHeader, 
    currentUserCompanyID,
} from '../auth-header';

// Api endpoint
import { ADD_DEPARTMENT_API, FETCH_DEPARTMENT_API } from '../root-endpoints';


const fetchDepartment = () => {
    return axios.get(FETCH_DEPARTMENT_API + currentUserCompanyID, {headers: authHeader} )
}

const postNewDepartment = (values, companyID) =>{
    console.log(typeof values);
    console.log(values);
    // return axios.options(ADD_DEPARTMENT_API)
    return axios.post(ADD_DEPARTMENT_API + companyID, values, {headers: authHeader})
}


const DepartmentService = {
    postNewDepartment,
    fetchDepartment
};

export default DepartmentService;