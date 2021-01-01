import React, { useState } from 'react';
import TodoRows from './TodoRows';
import TodoForm from './TodoForm';
import { OPEN_TODO_FORM } from '../../../../actions/types';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
    const { isTodoFormOpen } = useSelector((state)=> state.todoReducer);
    const dispatch = useDispatch();
    return (
        <>
          <div className="todo-container container">
              {/* <pre>{triggerTodoForm ? 'false, open' : 'false, don\'t open' }</pre> */}
                <div className="col-12">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-header-tab card-header">
                            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="fa fa-Todos" />&nbsp;Todo Lists</div>
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
                        <button className="btn btn-primary" onClick={(()=>dispatch({type: OPEN_TODO_FORM}))}>Add Todo</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
