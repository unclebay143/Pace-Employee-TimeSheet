// This file only communicate to the backend 

// Axios
import axios from "axios";

// API

import { TASK_API_URL } from "./root-endpoints";

const fetchTasks = () =>{
    return axios.get( TASK_API_URL )
}

const deleteTask = async(id) =>{
    await axios.delete(`${ TASK_API_URL }/${id}`)
}

const updateTask = async(id) =>{
    await axios.put(`${ TASK_API_URL }/${id}`)
}

export default{
    fetchTasks,
    deleteTask,
    updateTask,
}