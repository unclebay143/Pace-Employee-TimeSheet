import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchTodoFunction from '../../../../reducers/todo/fetchTodos';

const TodoCard = () =>{
    const { todos } = useSelector((state)=>state.todoReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodoFunction())
    },[dispatch])

    if(todos[0] === undefined){
        return(
            <div>
                loading... <i className="fa fa-spinner fa-spin"></i>
            </div>
        )
    }
    const { title, dueDate } = todos[0];
    return(
        <>
            <div className="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                <div className="flex-grow-1 d-flex align-items-center">
                    <div className="pace-bg-accent dot mr-3"></div>
                    <div className="text">
                        <h6 className="mb-0">{title}</h6><span className="text-gray">{dueDate}</span>
                    </div>
                </div>
            </div>

        </>
    )
};


export default TodoCard;