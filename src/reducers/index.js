import { combineReducers } from 'redux';
import taskReducer from './task/taskReducer';
import authReducer from './authentication/authReducer';
import employeeReducer from './user/employeeReducer.';
import TimerReportReducer from './timer/TimerReportReducer';
import timerReducer from './timer/timerReducer';
import message from './message/messageReducer';
import todoReducer from './todo/todoReducer'
import departmentReducer from './company/department/departmentReducer';


const rootReducer = combineReducers({
    authenticationState: authReducer,
    tasks: taskReducer, 
    todos: todoReducer,
    employees: employeeReducer,
    timerReport: TimerReportReducer,
    timerStatus: timerReducer,
    message: message,
    departments: departmentReducer
})

export default rootReducer;