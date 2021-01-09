// This file only communicate to the backend 

// Axios
import axios from "axios";

// API

import { TASK_API_URL, ACCEPTED_TASK_API_URL } from "./root-endpoints";

const fetchTasks = () =>{
    return axios.get( TASK_API_URL )
}

const deleteTask = (id) =>{
     axios.delete(`${ TASK_API_URL }/${id}`)
}

const fetchTaskDetails = (id) =>{
     axios.get(`${ TASK_API_URL }/${id}`)
}

const updateTask = (id) =>{
     axios.put(`${ TASK_API_URL }/${id}`)
}

export const fetchAcceptedTasks = () =>{
    return axios.get( ACCEPTED_TASK_API_URL )
}

export const deleteAcceptedTask = (id) =>{
     axios.delete(`${ ACCEPTED_TASK_API_URL }/${id}`)
}



export default{
    fetchTasks,
    fetchAcceptedTasks,
    deleteTask,
    fetchTaskDetails,
    updateTask,
}