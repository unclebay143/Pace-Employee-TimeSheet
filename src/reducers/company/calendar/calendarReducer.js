import { ADD_NEW_CALENDAR_EVENT, FETCH_CALENDAR_EVENT_SUCCESSFUL } from '../../../actions/types';

const initialState = {
    isFetching: true,
    events: [

        {
            title: '1',
            end: '01/01/2020'
        }
    ],
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
            
    
        default:
            return state;
    }
}


export default calendarReducer;