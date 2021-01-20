import { ADD_NEW_ESCHEDULE_EVENT, DELETE_EVENT_SUCCESSFUL, FETCH_ESCHEDULE_EVENT_SUCCESSFUL } from '../../../actions/types';

const initialState = {
    isFetching: true,
    events: [],
    error: null
}


const escheduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_ESCHEDULE_EVENT_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                events: action.payload
            }

        case ADD_NEW_ESCHEDULE_EVENT:
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


export default escheduleReducer;