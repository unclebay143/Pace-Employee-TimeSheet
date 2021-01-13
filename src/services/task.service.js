// This file only communicate to the backend 

// Axios
import axios from "axios";
import { authHeader, currentUserStaffID } from './auth-header';

// API

import { ASSIGN_TASK_API_URL, TASK_API_URL, ACCEPTED_TASK_API_URL,  ASSIGNED_TASK_API_URL } from "./root-endpoints";

const assignTask = async(newTask) => {
    return await axios.post(ASSIGN_TASK_API_URL + currentUserStaffID, {...newTask, staffID : currentUserStaffID }, { headers: authHeader } );
}

const fetchTasks = () =>{
    return axios.get( TASK_API_URL + currentUserStaffID, { headers: authHeader } )
}

const deleteTask = (id) =>{
     return axios.delete(`${ TASK_API_URL }/${id}`)
}

const updateTask = (id) =>{
     return axios.put(`${ TASK_API_URL }/${id}`)
}

const fetchAcceptedTasks = (newTask) =>{
    return axios.get( ACCEPTED_TASK_API_URL )
}

const fetchAssignedTasks = (newTask) =>{
    return axios.get( `${ ASSIGNED_TASK_API_URL }/${currentUserStaffID.toString()}`, { headers: authHeader })
}

const deleteAcceptedTask = (id) =>{
     axios.delete(`${ ACCEPTED_TASK_API_URL }/${id}`)
}


const TaskService = {
    assignTask,
    fetchTasks,
    fetchAcceptedTasks,
    fetchAssignedTasks,
    deleteTask,
    updateTask,
    deleteAcceptedTask,
}


export default TaskService;