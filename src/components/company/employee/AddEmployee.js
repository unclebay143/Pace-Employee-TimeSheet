// React
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../../layouts/Button';
import { TextInput } from '../../layouts/FormInput';
import { AddEmployeeSchema } from '../../Validation/Schema';

const employeeDetailsDropDown = {
    departments: [ 'web development', 'quality assurance', 'web design' ],
    employeeRoles: ['backend', 'frontend', 'database manager'],
    employeeType: [
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
const existingDepartment = employeeDetailsDropDown.departments.map((department, index)=><option value={department} key={index}>{department}</option>)
const availableRole = employeeDetailsDropDown.employeeRoles.map((role)=><option value={role}>{role}</option>)
const availableType = employeeDetailsDropDown.employeeType.map(({roleName, roleID})=><option value={roleID}>{roleName}</option>)



const AddEmployee = () =>{
    const params = useParams();
    const dispatch = useDispatch();
    const user = {
        userName: 'Ayodele Samuel Adebayo'
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
                                            firstName: '',
                                            lastName: '',
                                            department: '',
                                            phone: '',
                                            email: '',
                                            role: '',
                                            type: '',
                                            salary: '',
                                            address: '',
                                            password: '',
                                        }
                                    }
                                    validationSchema={AddEmployeeSchema}
                                    onSubmit={(values)=>alert(JSON.stringify(values, null, 2))}
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
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password2"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/*  DEPARTMENT*/}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3 mb-sm-3">
                                                    <h6 className="mb-0">Department</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="department" className="form-control">
                                                        <option selected>Choose...</option>
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
                                                    <Field component="select" name="role" className="form-control">
                                                        <option selected>Choose...</option>
                                                        {availableRole}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* TYPE */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3 mb-sm-3">
                                                    <h6 className="mb-0">Type</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="type" className="form-control">
                                                        <option selected>Choose...</option>
                                                        {availableType}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* SALARY */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Salary</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="salary"
                                                        id="salary"
                                                        type="text" 
                                                        placeholder="Salary"
                                                        className={`form-control ${touched.salary && errors.salary ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="salary"
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
                                                <Button type="submit" label="Employ" className="btn pace-btn-primary" />
                                                <Button 
                                                    type="submit" 
                                                    className="btn pace-btn-accent" 
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Please wait...</span>) : "Reset"}
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
