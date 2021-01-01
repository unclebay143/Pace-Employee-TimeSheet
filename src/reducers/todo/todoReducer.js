import { 
    FETCH_TODOS_PENDING, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_ERROR,
    OPEN_TODO_FORM,
    CLOSE_TODO_FORM,
    EDIT_TODO, 
    ADD_TODO, 
    DELETE_TODO,
    TOGGLE_TODO_COMPLETE,
} from "../../actions/types";


// Initial state
const initialState = {
    pending: false,
    todos: [ 
        // { 
            // id: 0,
            // title: 'Wait for the server', 
            // dueDate: Date(),
            // completed: false
        // }
     ],
    error: null,
    isTodoFormOpen: false
}

// Function to generate id for new todo
const generateId = (todos) =>{
    const currentMaxId = todos.reduce(( currentMaxId, todo ) => Math.max(todo.id, currentMaxId), -1)
    return currentMaxId + 1
}


// Reducer that modifiy the state according to dispatched actions
const todoReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_TODOS_PENDING:
            return {
                 ...state,
                 pending: true,
                }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: action.payload
            }
        case FETCH_TODOS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case OPEN_TODO_FORM:
            return {
                ...state,
                isTodoFormOpen: true
            }
        case CLOSE_TODO_FORM:
            return {
                ...state, 
                isTodoFormOpen: false
            }
        case ADD_TODO:
            const { title, dueDate } = action.payload;
            return {
                // Return everything in the state
                ...state,
                // But modify todos
                todos: [ 
                    // Add new todo from payload
                    {
                        id: generateId(state.todos),
                        title: title,
                        dueDate: dueDate,
                        completed: false
                    },
                    // Return everything in todos
                    ...state.todos
                ] 
            }
        case EDIT_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo)=>{
                    if(todo.id !== action.payload){
                        return todo
                    }

                    return Object.assign({}, todo, {
                        text: action.title
                    })
                })
            })
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo)=> todo.id !== action.payload )
            }
        
        case TOGGLE_TODO_COMPLETE:
            return Object.assign({}, state, {
                todos: state.todos.map((todo)=>{
                    if(todo.id !== action.payload){
                        return todo
                    }

                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                })
            })

        default:
            return { ...state }
    }
}

export default todoReducer;


