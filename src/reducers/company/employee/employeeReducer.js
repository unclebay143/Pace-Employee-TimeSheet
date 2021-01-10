import { GET_EMPLOYEES, ADD_NEW_EMPLOYEE } from "../../../actions/types";

const initialState = {
    error: null,
    employees: []
}



const employeeReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_EMPLOYEES:
            return state
        case ADD_NEW_EMPLOYEE:
            return {
                ...state,
                employees: [action.payload, ...state.employees]
            }
        default:
            return state
    }

}

export default employeeReducer;


