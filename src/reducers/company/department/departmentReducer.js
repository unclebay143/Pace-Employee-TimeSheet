import { 
    OPEN_NEW_FORM, 
    CLOSE_NEW_FORM, 
    ADD_DEPARTMENT, 
    EDIT_DEPARTMENT, 
    DELETE_DEPARTMENT, 
    DEPARTMENT_ERROR,
    FETCH_COMPANY_DEPARTMENT
} 
    from '../../../actions/types';

const initialState = {
    isFormOpen: false,
    error: null,
    departments: []
}


const departmentReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_COMPANY_DEPARTMENT:
            return {
                ...state,
                departments: action.payload
            }
        case OPEN_NEW_FORM:
            return {
                ...state,
                isFormOpen: true
            }
        case CLOSE_NEW_FORM:
            return {
                ...state,
                isFormOpen: false
            }
        case ADD_DEPARTMENT:
            return {
                ...state,
                isFormOpen: false,
                departments: [
                    ...state.departments,
                    {
                        departmentName: action.payload.departmentName
                    }
                ]
            }
        case EDIT_DEPARTMENT:
            return {
                ...state,
                departments: state.departments.map((department)=> department.id === action.payload.id ? ( department = action.payload ) : department)
            }
        case DELETE_DEPARTMENT:
            return {
                ...state,
                departments: state.departments.filter((department)=> department.id !== action.payload )
            }
        case DEPARTMENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}


export default departmentReducer;
