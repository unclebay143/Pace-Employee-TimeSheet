import TaskService from "../../services/task.service";
import { 
  FETCH_TASKS_PENDING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
  ADD_TASK,
  TASKS_ERROR,
  DELETE_TASK,
  UPDATE_TASK,
  TOGGLE_TODO_COMPLETE,
  TOGGLE_TASK_COMPLETE
} from '../types';

// don't forget to change this to async::Sam

// Fetch Task action
const getTasks = () => ( dispatch ) =>{
  dispatch({ type: FETCH_TASKS_PENDING });
  return TaskService.fetchTasks()
  .then((response)=> {
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: response.data });
    return response.data;
  })
  .catch((error) =>{
    dispatch({ type: FETCH_TASKS_ERROR, payload: error })
  })
};



// Add new Task 
const addTask  = (newTask ) => (dispatch) =>{
  return TaskService.addTask(newTask )
  .then((response) =>{
      dispatch({
          type: ADD_TASK,
          payload: response.data
      })
  })
  .catch((error)=>{
      console.log(error)
  })
}


// Delete Task 
const deleteTask  = (id) => (dispatch) =>{
  dispatch({ type: DELETE_TASK, payload: id }) // Update the UI even when error occurs, since server will retain the undeleted item
  return TaskService.deleteTask(id)
}


// Edit Task 
const updateTask  = (id) => (dispatch) =>{
  dispatch({ type: UPDATE_TASK, payload: id })
}


// Toggle todo completion
const toggleTaskCompletion = (id) =>{
  return{
      type: TOGGLE_TASK_COMPLETE,
      payload: id
  }
}




export {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
  toggleTaskCompletion
}