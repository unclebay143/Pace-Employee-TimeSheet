import { GET_TIMER_REPORT } from '../../actions/types';
// import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: 1,
        firstname: "Ayodele",
        lastname: "Samuel Adebayo",
        department: "Hospitality",
        role: "Head Surgeon",
        workedHour: 160,
        completedTask: 19,
    },
    {
        id: 2,
        firstname: "Adedayo",
        lastname: "Stephen Adeolu",
        department: "Public Administration",
        role: "Chairman",
        workedHour: 30,
        completedTask: 119,
    },
    {
        id: 3,
        firstname: "Michael",
        lastname: "Jackson",
        department: "Management",
        role: "Junior manager",
        workedHour: 10,
        completedTask: 9,
    },
]


const TimerReportReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_TIMER_REPORT:
            return {...state};
    default:
        return state;
    }
}


export default TimerReportReducer;