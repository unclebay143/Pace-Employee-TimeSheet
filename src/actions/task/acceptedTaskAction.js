import TaskService from "../../services/task.service";

import {
  FETCH_ACCEPTED_TASKS_PENDING,
  FETCH_ACCEPTED_TASKS_SUCCESS,
  FETCH_ACCEPTED_TASKS_ERROR,
  DELETE_ACCEPTED_TASK
} from '../types';

// Fetch accepted Task action
 export const getAcceptedTasks = () => ( dispatch ) =>{
  dispatch({ type: FETCH_ACCEPTED_TASKS_PENDING });
  return TaskService.fetchAcceptedTasks()
  .then((response)=> {
    dispatch({ type: FETCH_ACCEPTED_TASKS_SUCCESS, payload: response.data });
    return response.data;
  })
  .catch((error) =>{
    dispatch({ type: FETCH_ACCEPTED_TASKS_ERROR, payload: error })
  })
};


export const deleteAcceptedTask  = (id) => (dispatch) =>{
  dispatch({ type: DELETE_ACCEPTED_TASK, payload: id }) // Update the UI even when error occurs, since server will retain the undeleted item
  return TaskService.deleteAcceptedTask(id)
}