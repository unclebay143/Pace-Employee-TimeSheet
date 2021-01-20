import EscheduleService from "../../services/eschedule/eschedule-service";
import { eventAddedSuccessfullyLogger } from "../../toaster";
import { ADD_NEW_ESCHEDULE_EVENT, FETCH_ESCHEDULE_ERROR, FETCH_ESCHEDULE_EVENT_SUCCESSFUL } from "../types";

const geteScheduleEvent = () => ( dispatch ) =>{
    return EscheduleService.fetcheScheduleEvent()
    .then((response) => {
        dispatch({
            type: FETCH_ESCHEDULE_EVENT_SUCCESSFUL,
            payload: response.data.data
        })
    })
    .catch((error)=>{
        dispatch({
            type: FETCH_ESCHEDULE_ERROR,
            payload: error
        })
    })
}

const addNeweScheduleEvent = (newEvent, action) => ( dispatch ) =>{
    dispatch({
        type: ADD_NEW_ESCHEDULE_EVENT,
        payload: newEvent
    })
    return EscheduleService.postNeweScheduleEvent(newEvent)
    .then((response)=>{
        eventAddedSuccessfullyLogger()
        action.setSubmitting(false)
    })
    .catch((error)=>{
        // eScheduleEventNotSavedLogger()
        action.setSubmitting(false)
    })
}

// const deleteeScheduleEvent = (eventID) => (dispatch) =>{
//     // console.log(eventID)
//     dispatch({
//         type: DELETE_EVENT_SUCCESSFUL,
//         payload: eventID
//     })
//     return EscheduleService.deleteeScheduleEvent(eventID)
//     .then((response)=>{
//         console.log('respons', response)
//     })
// }

// const editeScheduleEvent = (updatedEvent) => (dispatch) =>{
//     dispatch({
//         type: EDIT_ESCHEDULE_EVENT,
//         payload: updatedEvent
//     })
//     return EscheduleService.updateeScheduleEvent(updatedEvent)
// }



export {
    geteScheduleEvent,
    addNeweScheduleEvent,
    // deleteeScheduleEvent,
    // editeScheduleEvent,
}