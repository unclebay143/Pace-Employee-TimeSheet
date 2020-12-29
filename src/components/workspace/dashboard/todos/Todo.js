import React from 'react';
import TodoRows from './TodoRows';
import './todo.css'

const Todo = () => {
    return (
        <>
          <div className="todo-container row d-flex justify-content-center container">
                <div className="col-md-12">
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
                        <button className="btn btn-primary">Add Todo</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
