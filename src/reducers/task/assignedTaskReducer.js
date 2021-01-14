import { FETCH_ASSIGNED_TASKS_PENDING, FETCH_ASSIGNED_TASKS_SUCCESS, DELETE_ASSIGNED_TASK } from '../../actions/types';

const initialState = {
  isFetching: false,
  assignedTasks: [{}]
}
const assignedTaskReducer = (state=initialState, action) => {
  switch(action.type){

      case FETCH_ASSIGNED_TASKS_PENDING:
          return {
              ...state,
              isFetching: true
          }
      
      case FETCH_ASSIGNED_TASKS_SUCCESS:
          return {
              ...state,
              isFetching: false,
              assignedTasks: action.payload
          }

      case DELETE_ASSIGNED_TASK:
          return {
              ...state, 
              assignedTasks: state.assignedTasks.filter((task)=>task.id !== action.payload)
          }
          
      default:
          return state;
  }
}


export default assignedTaskReducer;