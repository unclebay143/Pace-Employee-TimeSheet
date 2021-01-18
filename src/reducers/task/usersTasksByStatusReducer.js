import { FETCH_TASKS_BY_STATUS_PENDING, FETCH_TASKS_BY_STATUS_SUCCESS, DELETE_TASKS_BY_STATUS } from '../../actions/types';

const initialState = {
  isFetching: false,
  usersTasksByStatus: [],
}
const usersTasksByStatusReducer = (state=initialState, action) => {
  switch(action.type){

      case FETCH_TASKS_BY_STATUS_PENDING:
          return {
              ...state,
              isFetching: true
          }
      
      case FETCH_TASKS_BY_STATUS_SUCCESS:
          return {
              ...state,
              isFetching: false,
              usersTasksByStatus: action.payload
          }

      case DELETE_TASKS_BY_STATUS:
          return {
              ...state, 
              usersTasksByStatus: state.usersTasksByStatus.filter((task)=>task.id !== action.payload)
          }
          
      default:
          return state;
  }
}


export default usersTasksByStatusReducer;