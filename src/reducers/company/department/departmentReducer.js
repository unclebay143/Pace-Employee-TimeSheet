import { 
    OPEN_NEW_FORM, 
    CLOSE_NEW_FORM, 
    ADD_DEPARTMENT, 
    EDIT_DEPARTMENT, 
    DELETE_DEPARTMENT, 
    DEPARTMENT_ERROR
} 
    from '../../../actions/types';

const initialState = {
    isFormOpen: false,
    error: null,
    departments: [
        {
            departmentName: 'book'
        },
        {
            departmentName: 'book'
        },
    ],
}


const departmentReducer = (state = initialState, action) =>{
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
                departments: [
                    {
                        departmentName: action.payload.departmentName
                    },
                ...state.departments
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