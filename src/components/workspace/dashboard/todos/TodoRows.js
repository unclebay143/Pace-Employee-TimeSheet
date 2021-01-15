// React
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Layouts
import Button from '../../../layouts/Button';

// Actions & Reducers
// import fetchTodoFunction from '../../../../reducers/todo/todoApi';
// import TodoService from '../../../../services/todo.service';
import { getTodos, deleteTodo, toggleTodoCompletion } from '../../../../actions/todo/todoAction';

const formatDate = ( date )=>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Convert Current Day to Day, Month date, year format
    const dueDate = new Date(date).toLocaleDateString("en-US", options);
    return dueDate;
}


const TodoRows = () => {

    // Destructure todos from the todoReducer from store
    const { todos, pending } = useSelector((state)=>state.todos)
    const dispatch = useDispatch()

    // Invoke fetchTodos function to fetch todos from server
    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch]);
    if(pending){
        return(
            <div className="d-flex justify-content-center align-items-center" style={{height:'360px', background: '#cccccc'}}>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" style={{fontSize: "23px"}}></i>
                <span>Loading... Please wait</span>
            </div>
        )
    }
    return (
        <>
        {
            todos.map(({toDoID, title, completed, dueDate}, index)=>{
                return(
                    <li className="list-group-item" key={index}>
                        <div className={`todo-indicator ${ completed ? 'bg-primary' : 'bg-warning' }`} />
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                    <div className="custom-checkbox custom-control">
                                        <input className="custom-control-input" id={toDoID} type="checkbox" />
                                        <label className="custom-control-label" htmlFor={toDoID}>&nbsp;</label>
                                    </div>
                                </div>
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        { title }
                                        {/* <div className={`badge ${completed ? 'badge-success': 'badge-primary'} ml-2`}>
                                            { completed ? 'Completed' : 'Pending' }
                                        </div> */}
                                    </div>
                                    <div className="widget-subheading">
                                        <i>Due Date { formatDate(dueDate) }</i>
                                        {/* <div className="badge badge-pill badge-info ml-2"></div> */}
                                        <div className={` badge badge-pill ml-2 ${completed ? 'badge-success': 'badge-danger'}`}>
                                            { completed ? 'Completed' : 'Pending' }
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-right">
                                    <Button 
                                        className={` border-0 btn-transition btn todo-btn  { ${ completed ? "pending-icon" : "completed-icon"}`}
                                        icon={`${completed ? "fa fa-sync-alt" : "fa fa-check"}`}
                                        onClick={(()=>dispatch(toggleTodoCompletion(toDoID)))}
                                    />
                                    <Button 
                                        className="border-0 btn-transition btn todo-btn text-red"
                                        icon="fa fa-trash-alt"
                                        onClick={(()=>dispatch(deleteTodo(toDoID)))}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>  
                )
            })
        }
        </>
    );
}

export default TodoRows;
