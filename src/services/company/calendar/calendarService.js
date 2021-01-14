import axios from 'axios';
import { authHeader, currentUserCompanyID } from '../../auth-header';
import { NEW_CALENDAR_EVENT_API, FETCH_CALENDAR_EVENT_API } from '../../root-endpoints';



const fetchCalendarEvent = async() =>{
    return await axios.get(FETCH_CALENDAR_EVENT_API + currentUserCompanyID, { headers: authHeader })
}


const postNewCalendarEvent = (newEvent) =>{
    return axios.post(NEW_CALENDAR_EVENT_API, newEvent, { headers: authHeader })
}

const CalendarService = {
    fetchCalendarEvent,
    postNewCalendarEvent
}

export default CalendarService;