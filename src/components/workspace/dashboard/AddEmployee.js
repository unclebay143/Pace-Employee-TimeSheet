import { Formik, Form, ErrorMessage, Field } from 'formik';
import React from 'react';
import { TextInput } from '../../layouts/FormInput';
import Button from '../../layouts/Button';
import { AddEmployeeSchema } from '../../Validation/Schema';


const sampleCompany = {
    departments: [ 'web development', 'quality assurance', 'web design' ],
    employeeRoles: ['backend', 'frontend', 'database manager'],
    employeeType: ['admin', 'internal', 'staff'],
}

const existingDepartment = sampleCompany.departments.map((department)=><option value={department}>{department}</option>)
const availableRole = sampleCompany.employeeRoles.map((role)=><option value={role}>{role}</option>)
const availableType = sampleCompany.employeeType.map((type)=><option value={type}>{type}</option>)

export default function AddEmployee() {
    return (

        <div  className="container py-4">
            <div className="p-2">
                <div className="row ml-4 pl-2">
                    <h3>Add New Employee</h3>
                </div>

                <Formik 
                    initialValues = {{
                        firstname: "",
                        lastname: "",
                        email: "",
                        phone:"",
                        role: "",
                        department: "",
                        type: "",
                        salary: "",
                        password: "",
                        password2: ""
                    }}

                    validationSchema = { AddEmployeeSchema }
                    
                    onSubmit = {(values)=>alert(JSON.stringify(values, null, 3))}
                    
                    >
                    {({values, touched, errors, handleSubmit})=>{
                        return(
                            <Form onSubmit={handleSubmit} className="container">

                                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                                <h4 className="lead ml-3 mt-5">Personal Information</h4>
                                <hr />
                                <div className="row mb-3">
                                    <div className="firstname-wrapper form-group col-md-4 ">
                                        {/* <Select option={names}/> testing react-select */}
                                        <TextInput 
                                            name="firstname"
                                            type="text" 
                                            placeholder="Enter Firstname"
                                            className={`form-control ${touched.firstname && errors.firstname ? "is-invalid" : ""}`} 
                                            id="employee_name"
                                            label="Firstname"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="firstname"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>
                                    <div className="lastname-wrapper form-group col-md-4">
                                        <TextInput
                                            name="lastname"
                                            placeholder="Enter lastname"
                                            type="text" 
                                            className={`form-control ${touched.lastname && errors.lastname ? "is-invalid" : ""}`} 
                                            id="lastname"
                                            label="Lastname"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="lastname"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>
                                    <div className="phone-wrapper form-group col-md-4 ">
                                        <TextInput
                                            name="phone"
                                            placeholder="Enter Phone Number"
                                            type="tel" 
                                            className={`form-control ${touched.phone && errors.phone ? "is-invalid" : ""}`} 
                                            id="phone"
                                            label="Phone"
                                            />
                                        <ErrorMessage
                                            component="div"
                                            name="phone"
                                            className="invalid-feedback p-0"
                                            />
                                    </div>
                                </div>

                                {/* Row TWO */}
                                <h4 className="lead ml-3 mt-5">Job Description</h4>
                                <hr />
                                <div className="row mb-3">
                                    <div className="type-wrapper form-group col-md-4">
                                        <label>Type</label>
                                        <Field component="select" name="type" className="form-control select">
                                            <option selected>Choose...</option>
                                            {availableType}
                                        </Field>
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>

                                    <div className="department-wrapper form-group col-md-4">
                                        <label>Department</label>
                                        <Field component="select" name="department" className="form-control select">
                                            <option selected>Choose...</option>
                                            {existingDepartment}
                                        </Field>
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>
                                    
                                    <div className="role-wrapper form-group col-md-4">
                                        <label>Job Position</label>
                                        <Field component="select" name="role" className="form-control select">
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


                                {/* Row THREE */}
                                <div className="row mb-3">
                                    <div className="email-wrapper form-group col-md-6">
                                        <TextInput
                                            name="email"
                                            placeholder="Enter Valid Email Address"
                                            type="text" 
                                            className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} 
                                            id="email"
                                            label="Email"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>

                                    <div className="salary-wrapper form-group col-md-6">
                                        <TextInput
                                            name="salary"
                                            id="salary"
                                            type="text" 
                                            placeholder="Salary"
                                            className={`form-control ${touched.salary && errors.salary ? "is-invalid" : ""}`}
                                            label="Salary" 
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="salary"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="password-wrapper form-group col-md-6">
                                        <TextInput
                                            name="password"
                                            placeholder="Create Password"
                                            type="password" 
                                            className={`form-control ${ touched.password && errors.password ? "is-invalid" : ""}`} 
                                            id="password"
                                            label="Password"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>

                                    <div className="Password2-wrapper form-group col-md-6">
                                        <TextInput
                                            name="password2"
                                            placeholder="Confirm Password"
                                            type="password" 
                                            className={`form-control ${ touched.password2 && errors.password2 ? "is-invalid" : ""}`} 
                                            id="password2"
                                            label="Confirm Password"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password2"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>
                                </div>
                                
                                {/*Row FOUR  */}
                                <h4 className="lead ml-3 mt-5">Contact Information</h4>
                                <hr />
                                <div className="row mb-4">
                                    <div className="address1-wrapper col-md-12 mb-3">
                                        <TextInput
                                            name="address1"
                                            id="address1"
                                            type="text" 
                                            placeholder="143 work and connect"
                                            className={`form-control ${touched.address1 && errors.address1 ? "is-invalid" : ""}`}
                                            label="Address 1" 
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="address1"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>

                                    <div className="city-wrapper form-group col-md-4">
                                        <TextInput
                                            name="city"
                                            id="city"
                                            type="text" 
                                            placeholder="Ilorin"
                                            label="City"
                                            className={`form-control ${touched.city && errors.city ? "is-invalid" : ""}`}
                                            />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>

                                    <div className="state-wrapper form-group col-md-4">
                                        <TextInput
                                            name="state"
                                            id="state"
                                            type="text" 
                                            placeholder="Abuja"
                                            label="State"
                                            className={`form-control ${touched.state && errors.state ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>

                                    <div className="zipcode-wrapper form-group col-md-4">
                                        <TextInput
                                            name="zipcode"
                                            id="zipcode"
                                            type="text" 
                                            placeholder="234466"
                                            label="Zip Code"
                                            className={`form-control ${touched.zipcode && errors.zipcode ? "is-invalid" : ""}`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="email"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>
                                </div>

                                <hr />
                                <div className="col-md-12 mt-5 mb-3">
                                    <Button 
                                        type="submit"
                                        label="Employee"
                                        className="btn pace-btn-primary" 
                                    />
                                </div>
                        </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
            
    )
}

