import { 
    FETCH_TODOS_PENDING, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_ERROR, 
    EDIT_TODO, 
    ADD_TODO, 
    DELETE_TODO
} from "../../actions/types";

// const getTodo = async() =>{
    let initialState = {
        pending: false,
        todos: [],
        error: null
    }

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
        default:
            return { ...state }
    }
}

export default todoReducer;


