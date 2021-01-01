import TodoService from "../../services/todo.service"
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
const getTodos = () => ( dispatch ) =>{
    dispatch({type: FETCH_TODOS_PENDING})
    return TodoService.fetchTodos()
    .then((res) => {
        dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data })
        return res.data;          
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

// Add new todo
const addTodo = (newTodo) => (dispatch) =>{
    console.log(newTodo, 'action')
    return TodoService.addTodo(newTodo)
    .then((response) =>{
        console.log(response)
        console.log(response.data)
        dispatch({
            type: ADD_TODO,
            payload: response.data
        })
    })
    .catch((error)=>{
        console.log(error)
    })
    // return{
    //     type: ADD_TODO,
    //     payload: task
    // }
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



export {
    getTodos,
    openTodoForm,
    closeTodoForm,
    addTodo,
    toggleTodoCompletion,
    deleteTodo,
}