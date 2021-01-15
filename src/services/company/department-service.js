//  Axios
import axios from 'axios';

//
import { 
    authHeader, 
    currentUserCompanyID,
} from '../auth-header';

// Api endpoint
import { ADD_DEPARTMENT_API, FETCH_DEPARTMENT_API } from '../root-endpoints';


const fetchDepartment = async() => {
    console.log(currentUserCompanyID);
    return await axios.get(FETCH_DEPARTMENT_API + currentUserCompanyID, {headers: authHeader} )
}

const postNewDepartment = (values, companyID) =>{
    const newDepartment = {
        departmentName: values.departmentName,
        id: companyID
    }

    // return axios.options(ADD_DEPARTMENT_API)
    return axios.post(ADD_DEPARTMENT_API + companyID, newDepartment, {headers: authHeader})
}


const DepartmentService = {
    postNewDepartment,
    fetchDepartment
};

export default DepartmentService;
