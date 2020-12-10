import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';
import userReducer from './usersReducer';
import employeeReducer from './employeeReducer.';

const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    employee: employeeReducer
})

export default rootReducer;