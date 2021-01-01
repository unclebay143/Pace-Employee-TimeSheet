import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchTodoFunction from '../../../../reducers/todo/fetchTodos';



const TodoContent = ({title, dueDate}) =>{
    return(
        <div className="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
            <div className="flex-grow-1 d-flex align-items-center">
                <div className="pace-bg-accent dot mr-3"></div>
                <div className="text">
                    <h6 className="mb-0">{ title }</h6><span className="text-gray">{ dueDate }</span>
                </div>
            </div>
        </div>
    )
}

const TodoCard = () =>{
    const { todos } = useSelector((state)=>state.todoReducer);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(fetchTodoFunction())
    },[dispatch])
    
        // Render this if the todos have not been fetched or in fetching state
        if(todos[0] === undefined){
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            // Convert Current Day to Day, Month date, year format
            const currentDate = new Date().toLocaleDateString("en-US", options);
            const [ title, dueDate ] = ['Your todo will be displayed here', currentDate];
            
            return(
                <TodoContent title={title} dueDate={dueDate} />
                )
        }
        
    const { title, dueDate } = todos[0];
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Convert the DueDate to Day, Month date, year format
    const formatedDueDate = new Date(dueDate).toLocaleDateString("en-US", options);
        
    return(
        <TodoContent title={title} dueDate={formatedDueDate} />
    )
};


export default TodoCard;