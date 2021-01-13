import { combineReducers } from 'redux';
import taskReducer from './task/taskReducer';
import acceptedTaskReducer from './task/acceptedTaskReducer';
import authReducer from './authentication/authReducer';
import TimerReportReducer from './timer/TimerReportReducer';
import timerReducer from './timer/timerReducer';
import message from './message/messageReducer';
import todoReducer from './todo/todoReducer';
import departmentReducer from './company/department/departmentReducer';
import employeeReducer from './company/employee/employeeReducer';


const rootReducer = combineReducers({
    authenticationState: authReducer,
    tasks: taskReducer, 
    acceptedTasks: acceptedTaskReducer,
    // tasks: [taskReducer, acceptedTaskReducer]
    todos: todoReducer,
    timerReport: TimerReportReducer,
    timerStatus: timerReducer,
    message: message,
    departments: departmentReducer,
    employees: employeeReducer,
})

export default rootReducer;