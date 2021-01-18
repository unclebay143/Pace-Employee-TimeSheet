// React
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Layouts
import TodoRows from './TodoRows';
import TodoForm from './TodoForm';

// Actions
import { getTodos, openTodoForm } from '../../../../actions/todo/todoAction';
import { netWorkError } from '../../../../toaster';

const Todo = () => {
    const { error } = useSelector(state => state.todos);
    const dispatch = useDispatch();
        // dispatch(getTodos())
    // useEffect(() => {
        // console.log('MOUNTED')
        if(error){
            netWorkError()
        }
    // }, [error])
    return (
        <>
          <div className="todo-container container">
                <div className="col-12">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-header-tab card-header">
                            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                <i className="fa fa-Todos" />&nbsp;What do you want to do today?</div>
                        </div>
                        <div className="scroll-area-sm -shiftToDisabled">
                            <perfect-scrollbar className="ps-show-limits">
                            <div style={{position: 'static'}} className="ps ps--active-y">
                                <div className="ps-content">
                                <ul className=" list-group list-group-flush">
                                    <TodoRows />
                                </ul>
                                </div>
                            </div>
                            </perfect-scrollbar>
                        </div>
                        <div className="d-block text-right card-footer">
                            {/* <button className="mr-2 btn btn-link btn-sm">Cancel</button> */}
                            <TodoForm />
                        <button className="btn btn-primary" onClick={(()=>dispatch(openTodoForm()))}>Add Todo</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
