// React
import React, { useEffect } from 'react';

// Layouts
import Button from '../../../layouts/Button';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodoFunction from '../../../../reducers/todo/fetchTodos';

const TodoRows = () => {
    // bg-warning
    // bg-primary
    // bg-success

    // Destructure todos from the todoReducer from store
    const { todos, pending } = useSelector((state)=>state.todoReducer)
    const dispatch = useDispatch()

    // Invoke fetchTodos function to fetch todos from server
    useEffect(() => {
        dispatch(fetchTodoFunction())
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
            todos.map(({id, title, completed, dueDate})=>{
                return(
                    <li className="list-group-item" key={ id }>
                        <div className={`todo-indicator ${ completed ? 'bg-primary' : 'bg-warning' }`} />
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-2">
                                    <div className="custom-checkbox custom-control">
                                        <input className="custom-control-input" id={id} type="checkbox" />
                                        <label className="custom-control-label" htmlFor={id}>&nbsp;</label>
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
                                        <i>Due Date { dueDate }</i>
                                        {/* <div className="badge badge-pill badge-info ml-2"></div> */}
                                        <div className={` badge badge-pill ml-2 ${completed ? 'badge-success': 'badge-danger'}`}>
                                            { completed ? 'Completed' : 'Pending' }
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content-right">
                                    <Button 
                                        className="border-0 btn-transition btn todo-btn btn-outline-success"
                                        icon="fa fa-check"
                                    />
                                    <Button 
                                        className="border-0 btn-transition btn todo-btn btn-outline-danger"
                                        icon="fa fa-trash-alt"
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
