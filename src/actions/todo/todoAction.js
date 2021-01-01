import { 
    FETCH_TODOS_PENDING, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_ERROR, 
    EDIT_TODO, 
    ADD_TODO, 
    DELETE_TODO,
    TOGGLE_TODO_COMPLETE,
    OPEN_TODO_FORM,
    CLOSE_TODO_FORM
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

// Open Todo Form
const openTodoForm = () =>{
    return{
        type: OPEN_TODO_FORM
    }
}

// Close Todo Form
const closeTodoForm = () =>{
    return{
        type: CLOSE_TODO_FORM
    }
}

// Add new todo
const addTodo = (task) =>{
    return{
        type: ADD_TODO,
        payload: task
    }
}

// Toggle todo completion
const toggleTodoCompletion = (id) =>{
    return{
        type: TOGGLE_TODO_COMPLETE,
        payload: id
    }
}

// Delete todo
const deleteTodo = (id) =>{
    return{
        type: DELETE_TODO,
        payload: id
    }
}



export{
    fetchTodosPending,
    fetchTodosSuccess,
    fetchTodosError,
    openTodoForm,
    closeTodoForm,
    addTodo,
    toggleTodoCompletion,
    deleteTodo,
}