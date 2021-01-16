import { ADD_NEW_CALENDAR_EVENT, DELETE_EVENT_SUCCESSFUL, FETCH_CALENDAR_EVENT_SUCCESSFUL } from '../../../actions/types';

const initialState = {
    isFetching: true,
    events: [],
    error: null
}


const calendarReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_CALENDAR_EVENT_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                events: action.payload
            }

        case ADD_NEW_CALENDAR_EVENT:
            return {
                ...state,
                isFetching: false,
                events: [
                    ...state.events,
                    // action.payload
                    {
                        title: action.payload.eventName,
                        end: action.payload.eventDateAndTime
                    }
                ]
            }
        case DELETE_EVENT_SUCCESSFUL:
            return {
                ...state,
                events: state.events.filter((evts)=> evts.eventID !== action.payload)
            }
            
    
        default:
            return state;
    }
}


export default calendarReducer;