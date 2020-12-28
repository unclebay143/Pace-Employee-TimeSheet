import { TIMER_ON, TIMER_OFF } from '../actions/types';

const initialState = {
    isTimerOff: true,
    hour: 0
}


const timerReducer = (state=initialState, action)=>{
    switch(action.type){
        case TIMER_ON:
            return state.isTimerOff = !state.isTimerOff, state.hour = 0;
        case TIMER_OFF:
            return state.isTimerOff = !state.isTimerOff, state.hour = action.payload;
    default:
        return state;
    }
}


export default timerReducer;