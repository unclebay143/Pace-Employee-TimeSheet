import axios from 'axios';
import { ADD_NEW_EMPLOYEE_API, FETCH_EMPLOYEES_LIST_API, UPDATE_EMPLOYEE_BILLING_AND_TIME_API } from '../root-endpoints';
import { authHeader, currentUserCompanyID } from '../auth-header';


// Function to add new employee to the server
const addNewEmployeeToServer = ( newEmployee ) =>{
    // Spread the newEmployee properties and add the companyID to it
    console.log('sent service')

    return axios.post(ADD_NEW_EMPLOYEE_API, {...newEmployee, companyID : currentUserCompanyID.toString()}, { headers: authHeader })
}


// Function to get all employee from the server
const fetchCompanyEmployees = () =>{
    return  axios.get(FETCH_EMPLOYEES_LIST_API + currentUserCompanyID, { headers: authHeader })
}

// Function that allow admin to update the employee profile
const putEmployeeBillingAndWorkHour = (values, action, staffID) =>{
    const { billRateCharge, expectedWorkHours } = values;
    const data = {
        billRateCharge,
        expectedWorkHours
    }
    console.log('values from put', values)
    console.log('staffID from put', staffID)
    console.log('action from put', action)
    // console.log('billing from put', billRateCharge)
    return axios.put(UPDATE_EMPLOYEE_BILLING_AND_TIME_API + staffID , data, {headers: authHeader})
}









const EmployeeService = {
    addNewEmployeeToServer,
    fetchCompanyEmployees,
    putEmployeeBillingAndWorkHour
}


export default EmployeeService;