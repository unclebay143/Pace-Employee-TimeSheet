import axios from 'axios';
import { ADD_NEW_EMPLOYEE_API } from '../root-endpoints';
import { authHeader, currentUserCompanyID } from '../auth-header';

const addNewEmployeeToServer = ( newEmployee ) =>{
    console.log(typeof currentUserCompanyID)
    console.log(currentUserCompanyID)
    console.log(newEmployee)
    // console.log('endpoing', ADD_NEW_EMPLOYEE_API, 'newEmployee', {...newEmployee, companyID : currentUserCompanyID})
    return axios.post(ADD_NEW_EMPLOYEE_API, {...newEmployee, companyID : currentUserCompanyID.toString()}, { headers: authHeader })
}


const EmployeeService = {
    addNewEmployeeToServer
}


export default EmployeeService;