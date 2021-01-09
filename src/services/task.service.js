// This file only communicate to the backend 

// Axios
import axios from "axios";

// API

import { TASK_API_URL, ACCEPTED_TASK_API_URL } from "./root-endpoints";

const fetchTasks = () =>{
    return axios.get( TASK_API_URL )
}

const deleteTask = (id) =>{
     return axios.delete(`${ TASK_API_URL }/${id}`)
}

const fetchTaskDetails = (id) =>{
     return axios.get(`${ TASK_API_URL }/${id}`)
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
    fetchTasks,
    fetchAcceptedTasks,
    deleteTask,
    fetchTaskDetails,
    updateTask,
    fetchAcceptedTasks,
    deleteAcceptedTask,
}


export default TaskService;