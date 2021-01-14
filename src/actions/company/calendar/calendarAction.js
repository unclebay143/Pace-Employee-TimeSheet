import CalendarService from "../../../services/company/calendar/calendarService"
import { FETCH_CALENDAR_EVENT_SUCCESSFUL, ADD_NEW_CALENDAR_EVENT } from "../../types"

const getCalendarEvent = () => ( dispatch ) =>{
    return CalendarService.fetchCalendarEvent()
    .then((response) => {
        console.log(response)
        dispatch({
            type: FETCH_CALENDAR_EVENT_SUCCESSFUL,
            payload: response
        })
    })
}



const addNewCalendarEvent = (newEvent) => ( dispatch ) =>{
    return CalendarService.postNewCalendarEvent(newEvent)
    .then((response)=>{
        console.log('from add new event',response)
        dispatch({
            type: ADD_NEW_CALENDAR_EVENT,
            payload: response
        })
    })
}


export {
    getCalendarEvent,
    addNewCalendarEvent
}