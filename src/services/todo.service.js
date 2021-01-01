// This file only communicate to the backend 

// Axios
import axios from "axios";

// constant root-Endpoint url
const API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';

// Function to fetch todo from the server and dispatch actions based on response
const fetchTodos = () => {
        return axios.get(API_URL)
}

// Add new Todo to server
const addTodo = (data) => {

    // If user doesn't set a dueDate, set the current day
    if(typeof data.dueDate === 'number'){
        data = {
            title: data.title,
            dueDate: new Date()
        }
        return axios.post(API_URL, data)
    }
    return axios.post(API_URL, data)
}

export default { 
    fetchTodos,
    addTodo
 };
