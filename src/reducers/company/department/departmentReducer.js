import { 
    OPEN_NEW_FORM, 
    CLOSE_NEW_FORM, 
    ADD_DEPARTMENT, 
    EDIT_DEPARTMENT, 
    DELETE_DEPARTMENT 
} 
    from '../../../actions';

const initialState = {
    isFormOpen: false,
    error: null,
    departments: [
        {
            departmentName: 'Web Development'
        }
    ],
}


const todoReducer = (state = initialState, action) =>{
    switch(action.type){
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
                departments: action.payload,
                ...state.departments
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


export default todoReducer;