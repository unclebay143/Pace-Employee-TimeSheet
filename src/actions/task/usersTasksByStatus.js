import TaskService from "../../services/task.service";

import {
  FETCH_TASKS_BY_STATUS_PENDING,
  FETCH_TASKS_BY_STATUS_SUCCESS,
  FETCH_TASKS_BY_STATUS_ERROR,
  DELETE_TASKS_BY_STATUS
} from '../types';

// FETCH TASK BY STATUS
 export const getTaskByStatus = (taskStatus) => ( dispatch ) =>{
  dispatch({ type: FETCH_TASKS_BY_STATUS_PENDING });
  return TaskService.fetchUsersTasksByStatus(taskStatus)
  .then((response)=> {
    console.log(response)
    dispatch({ type:FETCH_TASKS_BY_STATUS_SUCCESS, payload: response.data.data });
    return response.data.data;
  })
  .catch((error) =>{
    dispatch({ type:FETCH_TASKS_BY_STATUS_ERROR, payload: error })
  })
};


export const deleteUsersTasksByStatus  = (id) => (dispatch) =>{
  dispatch({ type: DELETE_TASKS_BY_STATUS, payload: id }) // Update the UI even when error occurs, since server will retain the undeleted item
  return TaskService.deleteUsersTasksByStatus(id)
}