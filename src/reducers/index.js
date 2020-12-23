import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';
import acceptedTaskReducer from './acceptedTasksReducer';
import userReducer from './usersReducer';
import employeeReducer from './employeeReducer.';
import TimerReportReducer from './TimerReportReducer';


const rootReducer = combineReducers({
    task: taskReducer,
    acceptedTask: acceptedTaskReducer, 
    user: userReducer,
    employee: employeeReducer,
    timerReport: TimerReportReducer
})

export default rootReducer;