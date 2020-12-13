import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';
import userReducer from './usersReducer';
import employeeReducer from './employeeReducer.';
import TimerReportReducer from './TimerReportReducer';


const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    employee: employeeReducer,
    timerReport: TimerReportReducer
})

export default rootReducer;