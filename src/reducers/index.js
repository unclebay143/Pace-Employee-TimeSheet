import { combineReducers } from 'redux';
import taskReducer from './task/taskReducer';
import userReducer from './user/usersReducer';
import employeeReducer from './user/employeeReducer.';
import TimerReportReducer from './timer/TimerReportReducer';
import timerReducer from './timer/timerReducer';


const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    employee: employeeReducer,
    timerReport: TimerReportReducer,
    timerStatus: timerReducer
})

export default rootReducer;