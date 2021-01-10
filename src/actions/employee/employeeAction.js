import { FETCH_COMPANY_EMPLOYEES } from '../types';
import EmployeeService from '../../services/employee/employee.service';

const addNewEmployee = (newEmployee) => ( dispatch ) =>{
    return EmployeeService.addNewEmployeeToServer(newEmployee)
}


// Function to get the company employee list
const getCompanyEmployees = () => (dispatch) =>{
    return EmployeeService.fetchCompanyEmployees()
    .then((response)=>{
        // Get company Employees
        const companyEmployees = response.data.data
        dispatch({
            type: FETCH_COMPANY_EMPLOYEES,
            payload: companyEmployees
        })
    })
}


export {
    addNewEmployee,
    getCompanyEmployees
}