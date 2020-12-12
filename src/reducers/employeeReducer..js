import { GET_EMPLOYEES } from '../actions/types'

const initialState = [
    {
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        department: "web development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34"
    },
    {
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        department: "web development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34"
    },
    {
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        department: "web development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34"
    },
    {
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        department: "web development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34"
    },
]


const employeeReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_EMPLOYEES:
            return {...state}
    
        default:
            return state;
    }
}


export default employeeReducer;