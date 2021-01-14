import { ADD_NEW_CALENDAR_EVENT, FETCH_CALENDAR_EVENT_SUCCESSFUL } from '../../../actions/types';

const initialState = {
    isFetching: true,
    events: [
        {
            title: 'Conference Meeting',
            start: '01/01/2021',
            end: '01/01/2021',
        },
        {
            title: 'Conference Meeting',
            start: '2021-01-02',
            end: '2021-01-02',
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
                event: action.payload
            }

        case ADD_NEW_CALENDAR_EVENT:
            return {
                ...state,
                isFetching: false,
                event: action.payload
            }
            
    
        default:
            return state;
    }
}


export default calendarReducer;