import { GET_EMPLOYEES } from '../actions/types'
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(),
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        email: "unclebigbay@gmail.com",
        password: "1234Testing",
        password2: "1234Testing",
        department: "Web Development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34",
        salary: 130000,
        type: "Admin"
    },
    {
        id: uuidv4(),
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        email: "unclebigbay@gmail.com",
        password: "1234Testing",
        password2: "1234Testing",
        department: "Web Development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34",
        salary: 130000,
        type: "Internal"

    },
    {
        id: uuidv4(),
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        email: "unclebigbay@gmail.com",
        password: "1234Testing",
        password2: "1234Testing",
        department: "Web Development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34",
        salary: 130000,
        type: "Employee"

    },
    {
        id: uuidv4(),
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        email: "unclebigbay@gmail.com",
        password: "1234Testing",
        password2: "1234Testing",
        department: "Web Development",
        phone: "09087665253",
        role: "Frontend",
        employeed_date: "12/23/34",
        salary: 130000,
        type: "Internal"

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