import { 
    FETCH_TODOS_PENDING, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_ERROR, 
    EDIT_TODO, 
    ADD_TODO, 
    DELETE_TODO
 } from "../types";


// Fetch todos
const fetchTodosPending = () =>{
    return{
        type: FETCH_TODOS_PENDING

    }
}

const fetchTodosSuccess = (todos) =>{
    return{
        type: FETCH_TODOS_SUCCESS,
        payload: todos
    }
}

const fetchTodosError = (error) =>{
    return{
        type: FETCH_TODOS_ERROR,
        payload: error

    }
}

// Add new todo
const addTodo = (task) =>{
    return{
        type: ADD_TODO,
        payload: task
    }
}


// Delete todo
const deleteTodo = (key) =>{
    return{
        type: DELETE_TODO,
        payload: key
    }
}



export{
    fetchTodosPending,
    fetchTodosSuccess,
    fetchTodosError,
    addTodo,
    deleteTodo,
}