import { AUTH_USER } from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialValues = [
    {
        isLogged: false,
        id: uuidv4(),
        userName: "unclebay143",
        companies: ["tiidelab", "ksolution"],
        email: "unclebay@gmail.com",
        companyEmail: ["unclebay143@tiidelab.com", "unclebay143@ksolution.com"],
        tasks: [
            {
                id: uuidv4(),
                title: "Build a landing page",
                description: "let the header have a background of green and a text of purple",
                completed: false,
            }
        ]
    }
]


const userReducer = (state=initialValues, action)=>{
    switch(action.type){
        case AUTH_USER:
            return state;
    default:
        return state;
    }
}


export default userReducer;