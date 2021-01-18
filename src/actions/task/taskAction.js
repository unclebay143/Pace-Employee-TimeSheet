import TaskService from "../../services/task.service";
import { 
  FETCH_TASKS_PENDING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
  UPDATE_TASK_STATUS,
  ASSIGN_TASK,
  TASKS_ERROR,
  DELETE_TASK,
  EDIT_TASK,
  TOGGLE_TODO_COMPLETE,
  TOGGLE_TASK_COMPLETE
} from '../types';

// don't forget to change this to async::Sam

// Fetch Task action
const getTasks = () => ( dispatch ) =>{
  dispatch({ type: FETCH_TASKS_PENDING });
  return TaskService.fetchTasks()
  .then((response)=> {
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: response.data.data });
  })
  .catch((error) =>{
    console.log(error)
    dispatch({ type: FETCH_TASKS_ERROR, payload: error })
  })
};

// Add new Task 
const assignTask  = (newTask) => (dispatch) =>{
  return TaskService.assignTask(newTask)
}

// Update task status
const updateTaskStatus = (taskStatus) => ( dispatch ) => {
  return TaskService.updateTaskStatus(taskStatus);
}


// Delete Task 
const deleteTask  = (id) => (dispatch) =>{
  dispatch({ type: DELETE_TASK, payload: id }) // Update the UI even when error occurs, since server will retain the undeleted item
  return TaskService.deleteTask(id)
}

// Edit Task 
const editTask  = (id) => (dispatch) =>{
  dispatch({ type:EDIT_TASK, payload: id })
}

// Toggle todo completion
const toggleTaskCompletion = (id) =>{
  return{
      type: TOGGLE_TASK_COMPLETE,
      payload: id
  }
}


export {
  assignTask,
  getTasks,
  editTask,
  updateTaskStatus,
  deleteTask,
  toggleTaskCompletion
}