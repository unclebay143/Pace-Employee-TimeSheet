import { combineReducers } from 'redux';
import taskReducer from './task/taskReducer';
import authReducer from './authentication/authReducer';
import employeeReducer from './user/employeeReducer.';
import TimerReportReducer from './timer/TimerReportReducer';
import timerReducer from './timer/timerReducer';
import message from './message/message';


const rootReducer = combineReducers({
    task: taskReducer, 
    authentication: authReducer,
    employee: employeeReducer,
    timerReport: TimerReportReducer,
    timerStatus: timerReducer,
    message: message
})

export default rootReducer;