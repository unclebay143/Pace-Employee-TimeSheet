import axios from 'axios';
// import { EDIT_ESCHEDULE_EVENT } from '../../../actions/types';
// import { authHeader, currentUserCompanyID, currentUserStaffID } from '../../auth-header';
// import { FETCH_ESCHEDULE_EVENT_API, NEW_ESCHEDULE_EVENT_API, DELETE_ESCHEDULE_EVENT_API, EDIT_ESCHEDULE_EVENT_API } from '../../root-endpoints';
import { authHeader, currentUserCompanyID, currentUserCompanyName, currentUserStaffID } from '../auth-header';
import { DELETE_ESCHEDULE_EVENT_API, EDIT_ESCHEDULE_EVENT_API, FETCH_ESCHEDULE_EVENT_API, NEW_ESCHEDULE_EVENT_API } from '../root-endpoints';


const fetcheScheduleEvent = async() =>{
    // return await axios.get(FETCH_ESCHEDULE_EVENT_API, { headers: authHeader })
    return await axios.get( `https://pacetimesheet.herokuapp.com/api/E-schedule/${currentUserCompanyName}/${currentUserStaffID}`, { headers: authHeader } )

}


const postNeweScheduleEvent = (newEvent) =>{
    // return axios.post(NEW_ESCHEDULE_EVENT_API, newEvent, { headers: authHeader })
    return axios.post(`https://pacetimesheet.herokuapp.com/api/E-schedule/${currentUserCompanyName}/newE-schedule/`, newEvent, { headers: authHeader })
}

const deleteeScheduleEvent = (eventID) =>{
    return axios.delete(DELETE_ESCHEDULE_EVENT_API + currentUserStaffID + "/" + eventID, { headers: authHeader } )
}

const updateeScheduleEvent = (updatedEvent) =>{
    return axios.put(EDIT_ESCHEDULE_EVENT_API + currentUserStaffID + "/" + updatedEvent.eventID, updatedEvent, { headers: authHeader } )
}


const EscheduleService = {
    fetcheScheduleEvent,
    postNeweScheduleEvent,
    deleteeScheduleEvent,
    updateeScheduleEvent,
}

export default EscheduleService;