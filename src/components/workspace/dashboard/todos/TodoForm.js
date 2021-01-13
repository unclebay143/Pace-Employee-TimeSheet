// React 
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Action
import { closeTodoForm, addTodo } from '../../../../actions/todo/todoAction';

// Layout
import Button from '../../../layouts/Button';
import { TextInput } from '../../../layouts/FormInput';

// Formik
import { TodoListSchema } from '../../../Validation/Schema';
import { Formik, Form, ErrorMessage } from 'formik';

// Toaster
import { invalidTodoTitle } from '../../../../toaster/index';




const TodoForm = () =>{
    const { isTodoFormOpen } = useSelector((state)=> state.todos);
    const dispatch = useDispatch()
    
    return (
        <>
            <div  className='form-popup' id={`${isTodoFormOpen ? 'show-form' : "hide-form"  }`}>
                <Formik
                    initialValues = {
                        {
                            title: '',
                            dueDate: Date.now(),
                        }
                    }
                    onSubmit={(values, action)=>{
                        setTimeout(() => {
                            dispatch(addTodo(values))
                            action.resetForm({
                                title: '',
                                dueDate: Date.now()
                            })
                        }, 2000);
                        
                    }}
                    validationSchema = {TodoListSchema}
                >{({ 
                    errors,
                    touched, 
                    handleSubmit,
                    isSubmitting
                 })=>(
              
                    <Form
                        className="todo-form-container" 
                        onSubmit={ handleSubmit }
                    >
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
                            {
                                isSubmitting ? 
                                    <Button
                                        disabled={isSubmitting}
                                        icon = "fas fa-circle-notch fa-spin"
                                        className="btn pace-btn-primary mr-2"
                                    
                                    />
                                :
                                    <Button 
                                        type="submit"
                                        label="Add"
                                        className="btn pace-btn-primary mr-2"
                                    />
                            }
                            
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
