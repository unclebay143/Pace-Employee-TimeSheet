import React from 'react';
import { TextInput } from '../../layouts/FormInput';
import Button from '../../layouts/Button';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addDepartment, closeForm } from '../../../actions/company/department/departmentAction';
import AddEmployee from '../../workspace/dashboard/AddEmployee';

export const NewDepartmentForm = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> 
                    <span className="d-flex justify-content-between align-items-center">
                        New department 
                        <Button 
                            className="btn btn-sm"
                            onClick={(()=>dispatch(closeForm()))}
                            icon="fa fa-times text-red"
                        />
                    </span>
                    
                    </li>
                    
                        <Formik 
                            const initialValues = {
                                {
                                    departmentName: ''
                                }

                            }    
                            onSubmit={(values)=>{
                                dispatch(addDepartment(values))
                            }}              
                        >
                            {({handleSubmit, values})=>{
                                return(
                            <li className="list-group-item" style={{border: 'none'}}>
                                <span>Department Name</span>
                                    <Form onSubmit={handleSubmit}>
                                        <TextInput
                                            type="text"
                                            id="departmentName"
                                            label=""
                                            name="departmentName"
                                            className="form-control"
                                        />
                                    
                                        <li className="list-group-item">
                                        <Button 
                                            type="submit"
                                            label="Creates"
                                            className="btn btn-success btn-sm"
                                        />
                                    </li>
                                    </Form>
                            </li>
                                )
                            }}
                        </Formik>
                    {/* <li className="list-group-item">
                        <button></button>
                        <Button 
                            type="submit"
                            label="Creates"
                            className="btn btn-success btn-sm"
                        />
                    </li> */}
                </ul>
            </div>
        </>
    )
}
