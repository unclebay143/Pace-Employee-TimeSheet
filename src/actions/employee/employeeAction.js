import { FETCH_COMPANY_EMPLOYEES } from '../types';
import EmployeeService from '../../services/employee/employee.service';
import { profileUpdateCompletedLogger, profileUpdateFailLogger, somethingWentWrongLogger } from '../../toaster';

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

const updateEmployeeBillingAndWorkHour = (values, action, staffID,) => ( dispatch ) =>{
    return EmployeeService.putEmployeeBillingAndWorkHour(values, action, staffID)
    .then((response)=>{
        console.log(response)
        profileUpdateCompletedLogger()
        action.setSubmitting(false)
    })
    .catch((error)=>{
        console.log(error)
        profileUpdateFailLogger()
        action.setSubmitting(false)
    })
}

export {
    addNewEmployee,
    getCompanyEmployees,
    updateEmployeeBillingAndWorkHour
}