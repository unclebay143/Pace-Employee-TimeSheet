//  Axios
import axios from 'axios';

const postNewDepartment = (newDepartment) =>{
    return axios.post(ADD_DEPARTMENT_API, newDepartment,{ headers: authHeader })
}