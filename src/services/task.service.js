// This file only communicate to the backend 

// Axios
import axios from "axios";
import { authHeader, currentUserStaffID } from './auth-header';

// API

import { ASSIGN_TASK_API_URL, TASK_API_URL, USERS_TASKS_BY_STATUS_API_URL, ASSIGNED_TASK_API_URL,  UPDATE_TASK_STATUS_API_URL, DELETE_ASSIGNED_TASK_API_URL } from "./root-endpoints";

const assignTask = async(newTask) => {
    return await axios.post(ASSIGN_TASK_API_URL + currentUserStaffID, {...newTask, staffID : currentUserStaffID }, { headers: authHeader } );
}

const fetchTasks = () =>{
    return axios.get( TASK_API_URL + currentUserStaffID, { headers: authHeader } )
}

const deleteTask = (id) =>{
     return axios.delete(TASK_API_URL + `${id}`)
}

const updateTaskStatus = (taskStatus) =>{
     return axios.put( UPDATE_TASK_STATUS_API_URL + currentUserStaffID, {...taskStatus, staffID : currentUserStaffID }, { headers: authHeader } )
}


const editTask = (id) =>{
    return axios.put(`${ TASK_API_URL }/${id}`)
}

const fetchUsersTasksByStatus = (taskStatus) =>{
    return axios.get( USERS_TASKS_BY_STATUS_API_URL + currentUserStaffID + '/' + taskStatus, { headers: authHeader } )
}

const fetchAssignedTasks = (newTask) =>{
    return axios.get( ASSIGNED_TASK_API_URL + currentUserStaffID, { headers: authHeader })
}

const deleteAssignedTask = (id) =>{
     axios.delete( DELETE_ASSIGNED_TASK_API_URL + currentUserStaffID, {...id, staffID : currentUserStaffID }, { headers: authHeader }  )
}


const TaskService = {
    assignTask,
    fetchTasks,
    fetchUsersTasksByStatus,
    fetchAssignedTasks,
    editTask,
    deleteTask,
    updateTaskStatus,
    deleteAssignedTask,
}


export default TaskService;