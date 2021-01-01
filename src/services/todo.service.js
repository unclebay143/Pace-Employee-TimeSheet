// This file only communicate to the backend 

// Axios
import axios from "axios";

// API

import { TODO_API_URL } from "./root-endpoints";

// Function to fetch todo from the server and dispatch actions based on response
const fetchTodos = () => {
        return axios.get(TODO_API_URL)
}

// Add new Todo to server
const addTodo = (data) => {

    // If user doesn't set a dueDate, set the current day
    if(typeof data.dueDate === 'number'){
        data = {
            title: data.title,
            dueDate: new Date()
        }
        return axios.post(TODO_API_URL, data)
    }
    return axios.post(TODO_API_URL, data)
}

export default { 
    fetchTodos,
    addTodo
 };
