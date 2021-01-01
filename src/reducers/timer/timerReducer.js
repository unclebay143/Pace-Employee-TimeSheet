import { TIMER_ON, TIMER_OFF, SET_WORKED_MILLISECOND } from '../../actions/types';

const initialState = {
    timerIsOff: true,
    remindUser: true,
    workedMilliSecond: 0
}


const timerReducer = (state=initialState, action)=>{
    switch(action.type){
        case TIMER_ON:
            // return state.timerIsOff = !state.timerIsOff, state.hour = 0;
            return {
                ...state,
                 timerIsOff: false,
                 remindUser: false,
                 workedMilliSecond: 0
                };
        case TIMER_OFF:
            // return state.timerIsOff = !state.timerIsOff, state.hour = action.payload;
            return {
                ...state,
                timerIsOff: true,
                remindUser: false,
                workedMilliSecond: action.payload
            };
        case SET_WORKED_MILLISECOND:
            return {
                ...state,
                workedMilliSecond: action.payload
            }
    default:
        return state;
    }
}


export default timerReducer;