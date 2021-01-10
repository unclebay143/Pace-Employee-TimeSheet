import { ADD_NEW_EMPLOYEE, FETCH_COMPANY_EMPLOYEES } from "../../../actions/types";

const initialState = {
    error: null,
    employees: []
}



const employeeReducer = (state=initialState, action) =>{
    switch (action.type) {
        case FETCH_COMPANY_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }

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


