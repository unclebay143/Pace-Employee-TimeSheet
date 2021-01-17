import TodoService from "../../services/todo.service"
import { 
    FETCH_TODOS_PENDING, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_ERROR, 
    UPDATE_TODO, 
    ADD_TODO, 
    DELETE_TODO,
    TOGGLE_TODO_COMPLETE,
    OPEN_TODO_FORM,
    CLOSE_TODO_FORM
 } from "../types";


// Fetch todos
const getTodos = () => ( dispatch ) =>{
    dispatch({type: FETCH_TODOS_PENDING})
    return TodoService.fetchTodos()
    .then((response) => {
        console.log('todoooooo', response)
        console.closeTodoForm(response)
        dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data })
        return response.data;          
    })
    .catch((error)=>dispatch({ type: FETCH_TODOS_ERROR, payload: error }))
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


// Add new Todo
const addTodo = (newTodo) => (dispatch) =>{
    dispatch({ type: ADD_TODO, payload: newTodo })
    return TodoService.addTodo(newTodo)
    .then((response) =>{
        // dispatch({
        //     type: ADD_TODO,
        //     payload: response.data
        // })
    })
    .catch((error)=>{
        console.log(error)
    })
}


// Delete Todo
const deleteTodo = (id) => (dispatch) =>{
    dispatch({ type: DELETE_TODO, payload: id }) // Update the UI even when error occurs, since server will retain the undeleted item
    return TodoService.deleteTodo(id)
}


// Edit Todo
const updateTodo = (id) => (dispatch) =>{
    dispatch({ type: UPDATE_TODO, payload: id })
}

// Toggle todo completion
const toggleTodoCompletion = (id) =>{
    return{
        type: TOGGLE_TODO_COMPLETE,
        payload: id
    }
}


export {
    getTodos,
    openTodoForm,
    closeTodoForm,
    addTodo,
    toggleTodoCompletion,
    deleteTodo,
    updateTodo,
}