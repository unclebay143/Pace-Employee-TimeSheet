import { FETCH_COMPANY_EMPLOYEES } from '../types';
import EmployeeService from '../../services/employee/employee.service';
import { somethingWentWrongLogger } from '../../toaster';

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
    .catch((response)=>{
        // Alert user about network failure
        // somethingWentWrongLogger()
    })
}

const updateCompanyEmployee = (staffID) => ( dispatch ) =>{
    return EmployeeService.putCompanyEmployee(staffID)
    .then((response)=>{

        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
}
export {
    addNewEmployee,
    getCompanyEmployees
}