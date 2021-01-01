// React 
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify'; 

// Action
import { ADD_TODO } from '../../../../actions/types';

// Layout
import Button from '../../../layouts/Button';
import { TextInput } from '../../../layouts/FormInput';

// Formik
import { TodoListSchema } from '../../../Validation/Schema';
import { Formik, Form, ErrorMessage } from 'formik';

// Toaster
import { invalidTodoTitle } from '../../../../toaster/index';
import { closeTodoForm, addTodo } from '../../../../actions/todo/todoAction';




const TodoForm = () =>{
    const { isTodoFormOpen, todos } = useSelector((state)=> state.todoReducer);
    const dispatch = useDispatch()
    
    return (
        <>
            <div  className='form-popup' id={`${isTodoFormOpen ? 'show-form' : "hide-form"  }`}>
                <ToastContainer />
                <Formik
                    initialValues = {
                        {
                            title: '',
                            dueDate: Date.now(),
                        }
                    }
                    onSubmit={(values, action)=>{
                        dispatch(addTodo(values))
                        action.resetForm({
                            title: '',
                            dueDate: Date.now()
                        })
                        
                    }}
                    validationSchema = {TodoListSchema}
                >{({ 
                    errors,
                    touched, 
                    handleSubmit,
                 })=>(
              
                    <Form
                        className="todo-form-container" 
                        onSubmit={ handleSubmit }
                    >
                        {/* { errors.title ? invalidTodoTitle() : null } */}
                        <label className="bg-primary d-flex justify-content-between align-items-center p-2 text-white">
                            <b>TODO</b>
                            <i className="fa fa-times form-popdown-btn" onClick={(()=>dispatch(closeTodoForm()))}></i>
                        </label>
                        <section className="todo-form-wrapper">
                            <label htmlFor="title"><b>Title</b></label>
                            <TextInput 
                                type="text"
                                placeholder="Enter Todo" 
                                name="title"
                                className={` form-control ${ touched.title && errors.title ? "is-invalid" : " " }`}
                            />
                            <ErrorMessage
                                component="span"
                                name="title"
                                className="invalid-feedback mb-2"
                            />

                            <label htmlFor="dueDate"><b>Due Date </b></label>
                            <TextInput 
                                type="datetime-local"
                                placeholder="Enter Due Date" 
                                name="dueDate"
                                className={` form-control ${ touched.dueDate && errors.dueDate ? "is-invalid" : " " }`}

                            />

                            <ErrorMessage
                                component="span"
                                name="dueDate"
                                className="invalid-feedback mb-2"
                            />

                            <div className="d-flex">

                                <Button 
                                    type="submit"
                                    label="Add"
                                    className="btn pace-btn-primary  mr-2"
                                />
                            {/* <Button 
                                type="button"
                                label="Clear"
                                className="btn pace-btn-accent ml-2"
                            /> */}
                            </div>

                        </section>

                    </Form>
                    
                )}

                </Formik>
            </div>

        </>
    )
}


export default TodoForm;
