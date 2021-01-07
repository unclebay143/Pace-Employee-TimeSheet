import { 
    OPEN_NEW_FORM, 
    CLOSE_NEW_FORM, 
    ADD_DEPARTMENT, 
    ERROR_DEPARTMENT, 
    DEPARTMENT_ERROR,
    DELETE_DEPARTMENT
} from "../../types";

import DepartmentService from '../../../services/company/department-service'

// Open new employee form
const openForm = () => (dispatch) =>{
    dispatch({
        type: OPEN_NEW_FORM
    })
}

// Close new department form
const closeForm = () => (dispatch) =>{
    dispatch({
        type: CLOSE_NEW_FORM
    })
}

// Add new department
const addDepartment = ({ departmentName }) => (dispatch) =>{
    console.log(departmentName);
    return DepartmentService.postNewDepartment(departmentName)
    .then((response)=>{
        dispatch({
            type: ADD_DEPARTMENT,
            payload: response.data
        })
    .catch((error)=>{
        dispatch({
            type: DEPARTMENT_ERROR,
            payload: error
        })
    })
    });
};

// Edit department
const editDepartment = (departmentID) => (dispatch) =>{
    return DepartmentService.editDepartment(departmentID);
};

// Delete department
const deleteDepartment = (departmentID) => (dispatch) =>{
    // Delete Department Record from the UI
    dispatch({
        type: DELETE_DEPARTMENT,
        payload: departmentID
    })
    // Then delete from the server
    // return DepartmentService.deleteDepartment(departmentID);
}


export {
    openForm,
    closeForm,
    addDepartment,
    editDepartment,
    deleteDepartment
}