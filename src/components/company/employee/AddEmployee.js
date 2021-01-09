// React
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewEmployee } from '../../../actions/employee/employeeAction';
import Button from '../../layouts/Button';
import { TextInput } from '../../layouts/FormInput';
import { AddEmployeeSchema } from '../../Validation/Schema';

const employeeDetailsDropDown = {
    departments: [
        {
            departmentName: 'web development',
            departmentID: 2
        },
        {
            departmentName: 'web design',
            departmentID: 3
        },
        {
            departmentName: 'product management',
            departmentID: 4
        }
    ],
    staffRole: ['backend', 'frontend', 'database manager'],
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
const existingDepartment = employeeDetailsDropDown.departments.map(({departmentName, departmentID}, index)=><option value={departmentID} key={index}>{departmentName}</option>)
const availableStaffRole = employeeDetailsDropDown.staffRole.map((role, index)=><option value={role} key={index}>{role}</option>)
const availableRole = employeeDetailsDropDown.employeeRole.map(({roleName, roleID}, index)=><option value={roleID} key={index}>{roleName}</option>)



const AddEmployee = () =>{
    const dispatch = useDispatch();
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
                                            // firstName: '',
                                            // lastName: '',
                                            // department: '',
                                            // phone: '',
                                            email: '',
                                            roleID: '',
                                            staffRole: '',
                                            billRateCharge: '',
                                            // address: '',
                                            // password: '',
                                            expectedWorkHours: '',
                                        }
                                    }
                                    // validationSchema={AddEmployeeSchema}
                                    onSubmit={(values)=>{
                                        // alert(values)
                                        console.log(values)
                                        dispatch(addNewEmployee(values))
                                    }}
                                >
                                    { (({ values, touched, errors, handleSubmit, isSubmitting, resetForm })=>{
                                        return <Form onSubmit={handleSubmit}>
                                            <div className="mb-5 text-gray">
                                                <pre>{JSON.stringify(values, null, 2)}</pre>
                                                <h5>ADD EMPLOYEE</h5>
                                            </div>
                                            <hr />

                                            {/* FIRST NAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">First Name</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="firstName"
                                                        id="firstName"
                                                        placeholder="Enter Firstname"
                                                        type="text" 
                                                        className={`form-control ${ touched.firstName && errors.firstName ? "is-invalid" : ""}`} 
                                                        />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="firstName"
                                                        className="invalid-feedback p-0"
                                                        />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* LAST NAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Last Name</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="lastName"
                                                        placeholder="Enter last Name"
                                                        type="text" 
                                                        className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`} 
                                                        id="lastName"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="lastName"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* PHONE NUMBER */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Phone Number</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                        <TextInput
                                                            name="phone"
                                                            placeholder="Enter Phone Number"
                                                            type="tel" 
                                                            className={`form-control ${touched.phone && errors.phone ? "is-invalid" : ""}`} 
                                                            id="phone"
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name="phone"
                                                            className="invalid-feedback p-0"
                                                        />
                                                </div>
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

                                            {/* CREATE PASSWORD */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Create Password</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="password"
                                                        placeholder="Create Password"
                                                        type="password" 
                                                        className={`form-control ${ touched.password && errors.password ? "is-invalid" : ""}`} 
                                                        id="password"
                                                        autoComplete="on"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* CONFIRM PASSWORD */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Confirm Password</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="password2"
                                                        placeholder="Confirm Password"
                                                        type="password" 
                                                        className={`form-control ${ touched.password2 && errors.password2 ? "is-invalid" : ""}`} 
                                                        id="password2"
                                                        autoComplete="on"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password2"
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
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="department" className="form-control">
                                                        <option defaultValue>Choose...</option>
                                                        {existingDepartment}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
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

                                            {/* STAFF ROLE */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3 mb-sm-3">
                                                    <h6 className="mb-0">Post</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="staffRole" className="form-control">
                                                        <option defaultValue>Choose...</option>
                                                        {availableStaffRole}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="staffRole"
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

                                            {/* ADDRESS */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Address</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="address"
                                                        id="address"
                                                        type="text" 
                                                        placeholder="143 work and connect"
                                                        className={`form-control ${touched.address && errors.address ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="address"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />
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
