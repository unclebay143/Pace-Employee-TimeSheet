import EscheduleService from "../../services/eschedule/eschedule-service";

// const geteScheduleEvent = () => ( dispatch ) =>{
//     return EscheduleService.fetcheScheduleEvent()
//     .then((response) => {
//         // console.log(response.data)
//         // console.log(response.data.data)
//         dispatch({
//             type: FETCH_ESCHEDULE_EVENT_SUCCESSFUL,
//             payload: response.data.data
//         })
//     })
// }

const addNeweScheduleEvent = (newEvent, action) => ( dispatch ) =>{
    return EscheduleService.postNeweScheduleEvent(newEvent)
    .then((response)=>{
        eventAddedSuccessfullyLogger()
        action.setSubmitting(false)
        dispatch({
            type: ADD_NEW_ESCHEDULE_EVENT,
            payload: response.data.data
        })
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
    // geteScheduleEvent,
    addNeweScheduleEvent,
    // deleteeScheduleEvent,
    // editeScheduleEvent,
}