// This file only communicate to the backend 

// Axios
import axios from "axios";
import { authHeader, currentUserStaffID } from './auth-header';

// API

import { ASSIGN_TASK_API_URL, TASK_API_URL, ACCEPTED_TASK_API_URL } from "./root-endpoints";

const assignTask = (newTask) => {
    return axios.post(`${ASSIGN_TASK_API_URL}/${currentUserStaffID.toString()}`, {...newTask, staffID : currentUserStaffID }, { headers: authHeader } );
}

const fetchTasks = () =>{
    return axios.get( TASK_API_URL )
}

const deleteTask = (id) =>{
     return axios.delete(`${ TASK_API_URL }/${id}`)
}

const updateTask = (id) =>{
     return axios.put(`${ TASK_API_URL }/${id}`)
}

const fetchAcceptedTasks = () =>{
    return axios.get( ACCEPTED_TASK_API_URL )
}

const deleteAcceptedTask = (id) =>{
     axios.delete(`${ ACCEPTED_TASK_API_URL }/${id}`)
}


const TaskService = {
    assignTask,
    fetchTasks,
    fetchAcceptedTasks,
    deleteTask,
    updateTask,
    deleteAcceptedTask,
}


export default TaskService;