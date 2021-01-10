import EmployeeService from '../../services/employee/employee.service'

const addNewEmployee = (newEmployee) => ( dispatch ) =>{
    return EmployeeService.addNewEmployeeToServer(newEmployee)
    .then((response) => console.log(response))
}



export {
    addNewEmployee
}