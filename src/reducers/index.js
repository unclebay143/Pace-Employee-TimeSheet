import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';
import acceptedTaskReducer from './acceptedTasksReducer';
import authReducer from './authentication/authReducer';
import employeeReducer from './employeeReducer';
import TimerReportReducer from './TimerReportReducer';
import timerReducer from './timerReducer';


const rootReducer = combineReducers({
    task: taskReducer,
    acceptedTask: acceptedTaskReducer, 
    authenticate: authReducer,
    employee: employeeReducer,
    timerReport: TimerReportReducer,
    timerStatus: timerReducer
})

export default rootReducer;