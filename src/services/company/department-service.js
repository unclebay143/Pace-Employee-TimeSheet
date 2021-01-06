//  Axios
import axios from 'axios';
import { authHeader, currentUserFromLocalStorage } from '../auth-header';

const postNewDepartment = (newDepartment) =>{
    return axios.post(ADD_DEPARTMENT_API + currentUserFromLocalStorage, newDepartment,{ headers: authHeader
     })
}