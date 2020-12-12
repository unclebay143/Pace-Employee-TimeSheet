import { GET_EMPLOYEES } from '../actions/types'
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(),
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        department: "web development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34"
    },
    {
        id: uuidv4(),
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        department: "web development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34"
    },
    {
        id: uuidv4(),
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        department: "web development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34"
    },
    {
        id: uuidv4(),
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