import TaskService from "../../services/task.service";

import {
  FETCH_ASSIGNED_TASKS_PENDING,
  FETCH_ASSIGNED_TASKS_SUCCESS,
  FETCH_ASSIGNED_TASKS_ERROR,
  DELETE_ASSIGNED_TASK
} from '../types';

// Fetch assigned Task action
 export const getAssignedTasks = () => ( dispatch ) =>{
  dispatch({ type: FETCH_ASSIGNED_TASKS_PENDING });
  return TaskService.fetchAssignedTasks()
  .then((response)=> {
    console.log(response)
    dispatch({ type: FETCH_ASSIGNED_TASKS_SUCCESS, payload: response.data.data });
    return response.data.data;
  })
  .catch((error) =>{
    dispatch({ type: FETCH_ASSIGNED_TASKS_ERROR, payload: error })
  })
};

export const deleteAssignedTask  = (id) => (dispatch) =>{
  dispatch({ type: DELETE_ASSIGNED_TASK, payload: id }) // Update the UI even when error occurs, since server will retain the undeleted item
  return TaskService.deleteAssignedTask(id)
}