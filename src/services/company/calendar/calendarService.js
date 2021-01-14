import axios from 'axios';
import { authHeader, currentUserStaffID } from '../../auth-header';
import { NEW_CALENDAR_EVENT_API } from '../../root-endpoints';



const fetchCalendarEvent = () =>{
    return axios.get(NEW_CALENDAR_EVENT_API, { headers: authHeader })
}


const postNewCalendarEvent = (newEvent) =>{
    return axios.post(NEW_CALENDAR_EVENT_API, newEvent, { headers: authHeader })
}

const CalendarService = {
    fetchCalendarEvent,
    postNewCalendarEvent
}

export default CalendarService;