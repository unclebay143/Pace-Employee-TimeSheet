import CalendarService from "../../../services/company/calendar/calendarService";
import { FETCH_CALENDAR_EVENT_SUCCESSFUL, ADD_NEW_CALENDAR_EVENT, DELETE_EVENT_SUCCESSFUL, EDIT_CALENDAR_EVENT } from "../../types";
import { eScheduleEventNotSavedLogger, eventAddedSuccessfullyLogger } from '../../../toaster/index';
import { EDIT_CALENDAR_EVENT_API } from "../../../services/root-endpoints";

const geteScheduleEvent = () => ( dispatch ) =>{
    return CalendarService.fetcheScheduleEvent()
    .then((response) => {
        // console.log(response.data)
        // console.log(response.data.data)
        dispatch({
            type: FETCH_CALENDAR_EVENT_SUCCESSFUL,
            payload: response.data.data
        })
    })
}

const addNeweScheduleEvent = (newEvent, action) => ( dispatch ) =>{
    return CalendarService.postNeweScheduleEvent(newEvent)
    .then((response)=>{
        eventAddedSuccessfullyLogger()
        action.setSubmitting(false)
        dispatch({
            type: ADD_NEW_CALENDAR_EVENT,
            payload: response.data.data
        })
    })
    .catch((error)=>{
        eScheduleEventNotSavedLogger()
        action.setSubmitting(false)
    })
}

const deleteeScheduleEvent = (eventID) => (dispatch) =>{
    // console.log(eventID)
    dispatch({
        type: DELETE_EVENT_SUCCESSFUL,
        payload: eventID
    })
    return CalendarService.deleteeScheduleEvent(eventID)
    .then((response)=>{
        console.log('respons', response)
    })
}

const editeScheduleEvent = (updatedEvent) => (dispatch) =>{
    dispatch({
        type: EDIT_CALENDAR_EVENT,
        payload: updatedEvent
    })
    return CalendarService.updateeScheduleEvent(updatedEvent)
}



export {
    geteScheduleEvent,
    addNeweScheduleEvent,
    deleteeScheduleEvent,
    editeScheduleEvent,
}