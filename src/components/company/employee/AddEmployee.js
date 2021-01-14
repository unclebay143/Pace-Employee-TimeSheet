// React
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewEmployee } from '../../../actions/employee/employeeAction';
import Button from '../../layouts/Button';
import { TextInput } from '../../layouts/FormInput';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { AddEmployeeSchema } from '../../Validation/Schema';
import { emailAlreadyExist } from '../../../toaster';
import Loader from '../../loader/Loader';
import { getDepartment } from '../../../actions/company/department/departmentAction';

const employeeDetailsDropDown = {
    employeeRole: [
        {
            roleName: 'Super-Admin',
            roleID: 1
        },
        {
            roleName: 'Co-Admin',
            roleID: 3
        },
        {
            roleName: 'Internal-Admin',
            roleID: 4
        },
        {
            roleName: 'Employee',
            roleID: 5
        }

    ],
}
// const existingDepartment = employeeDetailsDropDown.departments.map(({departmentName, departmentID}, index)=><option value={departmentID} key={index}>{departmentName}</option>)
// const availableStaffRole = employeeDetailsDropDown.staffRole.map((role, index)=><option value={role} key={index}>{role}</option>)
const availableRole = employeeDetailsDropDown.employeeRole.map(({roleName, roleID}, index)=><option value={roleID} key={index}>{roleName}</option>)

const successEmployedAlert = withReactContent(Swal)

const employeeAddedSuccessfully = () =>{
    successEmployedAlert.fire({
        showCloseButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
        icon: 'success',
        title: 'Success',
        text: 'A link has been sent to your new staff',
    })
}

const AddEmployee = () =>{
    const dispatch = useDispatch();
    // Department has department inside its state, destructuring departments array
    const { departments } = useSelector(state => state.departments)

    useEffect(() => {
        // Fetch company department
        console.log('here')
        dispatch(getDepartment())
    }, [dispatch])
    // Generate the dropdown of company departments
    const companyDepartmentDropDown = departments.map(({departmentName, departmentID}, index)=><option value={departmentID} key={index}>{departmentName}</option>)
    if(!departments || departments === undefined){
        return <Loader />
    }
    return (
        <>
            <div className="container py-5">
                <style>
                    {
                        `
                        .dashboard-body-wrapper, .page-holder{
                            background: #e9ecef;
                        }
                        `
                    }
                </style>
                <div className="main-body">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <Formik
                                    initialValues={
                                        {
                                            email: '',
                                            roleID: '',
                                            staffRole: '',
                                            billRateCharge: '',
                                            expectedWorkHours: '',
                                            departmentID: '',
                                        }
                                    }

                                    validationSchema={AddEmployeeSchema}
                                    onSubmit={(values, action)=>{
                                        dispatch(addNewEmployee(values))
                                        .then((response)=>{
                                            console.log('adddd', response)
                                            action.setSubmitting(true)
                                            employeeAddedSuccessfully()
                                            action.setSubmitting(false)
                                            action.resetForm()
                                        })
                                        .catch((error)=>{
                                            action.setSubmitting(false)
                                            emailAlreadyExist()
                                        })
                                    }}
                                >
                                    { (({ values, touched, errors, handleSubmit, isSubmitting, resetForm })=>{
                                        return <Form onSubmit={handleSubmit}>
                                            <div className="mb-5 text-gray">
                                                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                                                <h5>ADD EMPLOYEE</h5>
                                            </div>
                                            <hr />

                                            {/* EMAIL ADDRESS */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Email Address</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="email"
                                                        placeholder="Enter Valid Email Address"
                                                        type="text" 
                                                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} 
                                                        id="email"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />
                                        
                                             {/* EMPLOYEE POSITION */}
                                             <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Position</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="staffRole"
                                                        placeholder="Enter Position"
                                                        type="text" 
                                                        className={`form-control ${touched.staffRole && errors.staffRole ? "is-invalid" : ""}`} 
                                                        id="staffRole"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="staffRole"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                             {/*  DEPARTMENT */}
                                             <div className="row">
                                                <div className="col-sm-6 col-md-3 mb-sm-3">
                                                    <h6 className="mb-0">Department</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary">
                                                    <Field component="select" name="departmentID" className="form-control">
                                                        <option defaultValue>Choose...</option>
                                                        { companyDepartmentDropDown }
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="departmentID"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* ROLE */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3 mb-sm-3">
                                                    <h6 className="mb-0">Role</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="roleID" className="form-control">
                                                        <option defaultValue>Choose...</option>
                                                        {availableRole}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="roleID"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* EXPECTED WORK HOUR */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Expected Work Hours</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="expectedWorkHours"
                                                        placeholder="Enter Expected Worked Hours"
                                                        type="text" 
                                                        className={`form-control ${touched.expectedWorkHours && errors.expectedWorkHours ? "is-invalid" : ""}`} 
                                                        id="expectedWorkHours"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="expectedWorkHours"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* Billing Rate Charge */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Billing Rate Charge</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="billRateCharge"
                                                        id="billRateCharge"
                                                        type="text" 
                                                        placeholder="billRateCharge"
                                                        className={`form-control ${touched.billRateCharge && errors.billRateCharge ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="billRateCharge"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* Buttons */}
                                            <div className="d-flex justify-content-between">
                                                <Button 
                                                    type="submit" 
                                                    className="btn pace-btn-primary" 
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Please wait...</span>) : "Employee"}
                                                />
                                                <Button 
                                                    type="button" 
                                                    label="Reset" 
                                                    className="btn pace-btn-accent" 
                                                    onClick={(()=>resetForm())} 
                                                />
                                            </div>
                                        </Form>
                                    })
                                }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee;
