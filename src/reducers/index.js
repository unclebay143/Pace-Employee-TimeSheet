import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';
import userReducer from './usersReducer';

const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer
})

export default rootReducer;