// 
import axios from "axios";

// Todo Action function 
import { fetchTodosPending, fetchTodosSuccess, fetchTodosError } from "../../actions/todo/todoAction";


// Function to fetch todo from the server and dispatch actions based on response

function fetchTodos() {
    return dispatch => {
        dispatch(fetchTodosPending());
        axios.get('http://fakerestapi.azurewebsites.net/api/v1/Activities')
        .then((res) => {
            // console.log(res)
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchTodosSuccess(res.data))
            return res.data;          
        })
        .catch(error => {
            dispatch(fetchTodosError(error));
            console.log(error)
        })
    }
}

export default fetchTodos;
