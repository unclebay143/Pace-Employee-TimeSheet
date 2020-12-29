import { GET_TASKS, ASSIGN_TASKS, GET_ACCEPTED_TASKS } from '../../actions/types';
import {acceptedTasks, allTasks} from './taskDataReducer'

const initialState = {
  allTasks,
  acceptedTasks
}

const taskReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_TASKS:
            return {
                ...state,
            }
        case ASSIGN_TASKS:
            return {
                ...state,
                allTasks: [action.payload, ...state.allTasks]
            }
        case GET_ACCEPTED_TASKS:
            return {
                ...state,
            }
        default:
            return state;
    }
}


export default taskReducer;