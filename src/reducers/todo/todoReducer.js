import { 
    FETCH_TODOS_PENDING, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_ERROR,
    OPEN_TODO_FORM,
    CLOSE_TODO_FORM,
    UPDATE_TODO, 
    ADD_TODO, 
    DELETE_TODO,
    TOGGLE_TODO_COMPLETE,
} from "../../actions/types";


// Initial state
const initialState = {
    isFetching: false,
    todos: [
        {
            title: 'Todo Card',
            dueDate: Date.now()
        }
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
    const { type, payload } = action
    switch(type){
        case FETCH_TODOS_PENDING:
            return {
                 ...state,
                 isFetching: true,
                }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                todos: payload
            }
        case FETCH_TODOS_ERROR:
            return {
                ...state,
                // If todo is empty then create a new object else return the todos
                todos: state.todos.length === 0 ? {} : state.todos,
                isFetching: false,
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
            const { title, dueDate, toDoID } = payload;
            return {
                // Return everything in the state
                ...state,
                // But modify todos
                todos: [ 
                    // Add new todo from payload (to the top of the existing todos)
                    {
                        toDoID: toDoID,
                        title: title,
                        dueDate: dueDate,
                        completed: false
                    },
                    // Return everything in todos
                    ...state.todos
                ] 
            }

        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map( todo => todo.id === payload.id ? ( todo = payload ) : todo
                )
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo)=> todo.id !== payload )
            }
        
        case TOGGLE_TODO_COMPLETE:
            return Object.assign({}, state, {
                todos: state.todos.map((todo)=>{
                    if(todo.id !== payload){
                        return todo
                    }

                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                })
            })

        default:
            return state
    }
}

export default todoReducer;


