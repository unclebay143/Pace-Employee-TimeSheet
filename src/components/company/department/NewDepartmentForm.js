import React, { useEffect, useState } from 'react';
import { TextInput } from '../../layouts/FormInput';
import Button from '../../layouts/Button';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addDepartment, closeForm } from '../../../actions/company/department/departmentAction';

export const NewDepartmentForm = () => {
    const dispatch = useDispatch();
    const [companyID, setCompanyID] = useState('');

    // get current user from localStorage, getting it from the redux state makes the code break(takes a while to sycCurrent user)
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || []
    
    useEffect(() => {
        setCompanyID(currentUser.companyID)
    }, [currentUser.companyID])
    
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item  pace-bg-accent"> 
                    <span className="d-flex justify-content-between align-items-center">
                        New department 
                        <Button 
                            className="btn btn-sm"
                            onClick={(()=>dispatch(closeForm()))}
                            icon="fa fa-times text-white"
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
                                console.log(companyID);
                                dispatch(addDepartment(values, companyID))
                            }}              
                        >
                            {({handleSubmit})=>{
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
                                    
                                    <li className="list-group-item d-flex justify-content-center">
                                        <Button 
                                            type="submit"
                                            label="Create"
                                            className="btn pace-btn-accent"
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
