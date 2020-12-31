import { GET_TASKS, GET_TASKS_SUCCESS, ASSIGN_TASKS, GET_ACCEPTED_TASKS } from '../../actions/types';
import {acceptedTasks, FetchTask, allTasks} from './taskDataReducer'

const initialState = {
  pending: false,
  allTasks: [],
  // allTasks,
  acceptedTasks
}

const taskReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_TASKS:
            return {
                ...state,
                pending: true
            }
            case GET_TASKS_SUCCESS:
            return {
                ...state,
                pending: false,
                allTasks: action.payload
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