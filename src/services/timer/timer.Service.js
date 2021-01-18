import axios from 'axios';
import { authHeader, currentUserCompanyID, currentUserStaffID } from '../auth-header';
import { TIMER_INITIALIZER_API, START_TIMER_API, STOP_TIMER_API, PERSONAL_TIME_SHEET_API, COMPANY_TIME_SHEET_API } from '../root-endpoints';

const initializeTimerRecord = () =>{
    console.log('timer service');
    return axios.post(TIMER_INITIALIZER_API, { headers: authHeader })
}

const startTimer = () =>{
    // return axios.put(START_TIMER_API + currentUserStaffID, { headers: authHeader });
    return axios.put(START_TIMER_API + currentUserStaffID, { headers: authHeader });
}

const stopTimer = () =>{
    return axios.put(STOP_TIMER_API + currentUserStaffID, { headers: authHeader });
}

const getPersonalTimeSheet = () =>{
    return axios.get(PERSONAL_TIME_SHEET_API + currentUserStaffID, { headers: authHeader })
}

const getCompanyTimeSheet = () => {
    return axios.get(COMPANY_TIME_SHEET_API + currentUserCompanyID, {headers: authHeader})
}

const TimerService = {
    initializeTimerRecord,
    startTimer,
    stopTimer,
    getPersonalTimeSheet,
    getCompanyTimeSheet,

}


export default TimerService;