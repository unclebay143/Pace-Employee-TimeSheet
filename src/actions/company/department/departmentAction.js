import { OPEN_NEW_FORM, CLOSE_NEW_FORM, ADD_DEPARTMENT, ERROR_DEPARTMENT,  } from "../../types";

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
const addDepartment = (newDepartment) => {
    return DepartmentService.postNewDepartment(newDepartment)
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
const editDepartment = (departmentID) => {
    return DepartmentService.editDepartment(departmentID);
};

// Delete department
const deleteDepartment = (departmentID) => {
    return DepartmentService.deleteDepartment(departmentID);
}


export {
    openForm,
    closeForm,
    addDepartment,
    editDepartment,
    deleteDepartment
}