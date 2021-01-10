import { FETCH_ACCEPTED_TASKS_PENDING, FETCH_ACCEPTED_TASKS_SUCCESS, DELETE_ACCEPTED_TASK } from '../../actions/types';

const initialState = {
  isFetching: false,
  acceptedTasks: [],
}
const acceptedTaskReducer = (state=initialState, action) => {
  switch(action.type){

      case FETCH_ACCEPTED_TASKS_PENDING:
          return {
              ...state,
              isFetching: true
          }
      
      case FETCH_ACCEPTED_TASKS_SUCCESS:
          return {
              ...state,
              isFetching: false,
              acceptedTasks: action.payload
          }

      case DELETE_ACCEPTED_TASK:
          return {
              ...state, 
              acceptedTasks: state.acceptedTasks.filter((task)=>task.id !== action.payload)
          }
          
      default:
          return state;
  }
}


export default acceptedTaskReducer;