import React from 'react'
import Button from '../../../layouts/Button';

const TodoForm = () =>{
    return (
        <>
        {/* https://www.w3schools.com/howto/howto_js_popup_form.asp */}
            <div className="form-popup" id="todo-form">
                <form className="form-container">
                    {/* <h1>Login</h1> */}
                    <label htmlFor="todo"><b>Todo</b></label>
                    <input type="text" placeholder="Enter Todo" name="todo" required />
                    <label htmlFor="psw"><b>Due Date</b></label>
                    <input type="datetime-local" placeholder="Enter Due Date" name="due-date" required />
                    <Button 
                        type="submit"
                        label="Add"
                        className="btn"
                    />
                    {/* <Button 
                        type="button"
                        label="Clear"
                        className="btn cancel"
                    /> */}
                    {/* <btton type="submit" className="btn">Login</button>
                    <button type="submit" className="btn cancel" onclick="closeForm()">Close</button> */}
                </form>
            </div>

        </>
    )
}


export default TodoForm;
