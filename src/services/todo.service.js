// This file only communicate to the backend 

// Axios
import axios from "axios";
import { authHeader } from "./auth-header";

// API

import { ADD_NEW_TODO_API } from "./root-endpoints";

// Function to fetch todo from the server and dispatch actions based on response
const fetchTodos = () => {
        return axios.get(`${ ADD_NEW_TODO_API }` , {headers: authHeader})
}

// Add new Todo to server
const addTodo = (data) => {

    // If user doesn't set a dueDate, set the current day
    if(typeof data.dueDate === 'number'){
        data = {
            title: data.title,
            dueDate: new Date()
        }
        return axios.post(ADD_NEW_TODO_API, data, {headers: authHeader})
    }
    return axios.post(ADD_NEW_TODO_API, data)
}

// Delete target todo from server
const deleteTodo = (id) => {
     axios.delete(`${ ADD_NEW_TODO_API }/${id}`, {headers: authHeader})
}

// Update target todo from the server
const updateTodo = (id) => {
    axios.put(`${ ADD_NEW_TODO_API }/${id}`, {headers: authHeader})
}


const TodoService = {
    fetchTodos,
    addTodo,
    deleteTodo,
    updateTodo
};

export default TodoService