import CalendarService from "../../../services/company/calendar/calendarService";
import { FETCH_CALENDAR_EVENT_SUCCESSFUL, ADD_NEW_CALENDAR_EVENT, DELETE_EVENT_SUCCESSFUL } from "../../types";
import { calendarEventNotSavedLogger, eventAddedSuccessfullyLogger } from '../../../toaster/index';

const getCalendarEvent = () => ( dispatch ) =>{
    return CalendarService.fetchCalendarEvent()
    .then((response) => {
        console.log(response.data)
        console.log(response.data.data)
        dispatch({
            type: FETCH_CALENDAR_EVENT_SUCCESSFUL,
            payload: response.data.data
        })
    })
}



const addNewCalendarEvent = (newEvent, action) => ( dispatch ) =>{
    return CalendarService.postNewCalendarEvent(newEvent)
    .then((response)=>{
        eventAddedSuccessfullyLogger()
        action.setSubmitting(false)
        dispatch({
            type: ADD_NEW_CALENDAR_EVENT,
            payload: response.data.data
        })
    })
    .catch((error)=>{
        calendarEventNotSavedLogger()
        action.setSubmitting(false)
    })
}

const deleteCalendarEvent = (eventID) => (dispatch) =>{
    console.log(eventID)
    dispatch({
        type: DELETE_EVENT_SUCCESSFUL,
        payload: eventID
    })
    return CalendarService.deleteCalendarEvent(eventID)
    .then((response)=>{
        console.log('respons', response)
    })
}

export {
    getCalendarEvent,
    addNewCalendarEvent,
    deleteCalendarEvent
}