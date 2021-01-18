// This file only communicate to the backend 

// Axios
import axios from "axios";
import { authHeader, currentUserStaffID } from "./auth-header";

// API

import { TODO_API_URL } from "./root-endpoints";

// Function to fetch todo from the server and dispatch actions based on response
const fetchTodos = () => {
        return axios.get(`${ TODO_API_URL }` , {headers: authHeader})
}

// Add new Todo to server
const addTodo = (data) => {

    // If user doesn't set a dueDate, set the current day
    if(typeof data.dueDate === 'number'){
        data = {
            title: data.title,
            dueDate: new Date()
        }
        return axios.post(TODO_API_URL, data, {headers: authHeader})
    }
    return axios.post(TODO_API_URL, data, {headers: authHeader})
    // return axios.post(TODO_API_URL, data)
}

// Delete target todo from server
const deleteTodo = (id) => {
     axios.delete( TODO_API_URL + id, {headers: authHeader})
}

// Update target todo from the server
const updateTodo = (id) => {
    axios.put( TODO_API_URL + id, {headers: authHeader})
}


const TodoService = {
    fetchTodos,
    addTodo,
    deleteTodo,
    updateTodo
};

export default TodoService