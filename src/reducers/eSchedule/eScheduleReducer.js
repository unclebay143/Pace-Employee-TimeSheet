import { ADD_NEW_ESCHEDULE_EVENT, DELETE_EVENT_SUCCESSFUL, FETCH_ESCHEDULE_ERROR, FETCH_ESCHEDULE_EVENT_SUCCESSFUL } from '../../actions/types';

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
                    action.payload
                ]
            }
        case DELETE_EVENT_SUCCESSFUL:
            return {
                ...state,
                events: state.events.filter((evts)=> evts.eventID !== action.payload),
            }
        case FETCH_ESCHEDULE_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
            
    
        default:
            return state;
    }
}


export default escheduleReducer;