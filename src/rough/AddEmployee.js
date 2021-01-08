import { Formik, Form, ErrorMessage, Field } from 'formik';
import React, { Component } from 'react';
import { TextInput } from '../components/layouts/FormInput';
import Button from '../components/layouts/Button';
import { AddEmployeeSchema } from '../components/Validation/Schema';

class InviteForm extends Component {
    render() {
        const sampleCompany = {
            departments: [ 'web development', 'quality assurance', 'web design' ],
            employeeRoles: ['backend', 'frontend', 'database manager'],
            employeeType: ['admin', 'internal', 'staff'],
        }
        const names = [
            {value: "Wale", label: "boy"},
            {value: "Wale", label: "boy"},
            {value: "Wale", label: "boy"},
            {value: "Wale", label: "boy"}
        ]

        const existingDepartment = sampleCompany.departments.map((department)=><option value={department}>{department}</option>)
        const availableRole = sampleCompany.employeeRoles.map((role)=><option value={role}>{role}</option>)
        const availableType = sampleCompany.employeeType.map((type)=><option value={type}>{type}</option>)
        return (
            <div>
                 <div className="modal fade" id="addEmployeeForm" tabIndex={-1} role="dialog" aria-labelledby="addEmployeeFormLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="addEmployeeFormLabel">Employee Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            </div>
                            <div className="modal-body">

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
                                        return <Form onSubmit={handleSubmit}>
    
                                            <pre>{JSON.stringify(values.values, null, 2)}</pre>
                                                <div className="form-row">
                                                    <div className="firstname-wrapper form-group col-md-6">
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
                                                    <div className="lastname-wrapper form-group col-md-6">
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
                                                </div>
                                                <div className="form-row">
                                                    <div className="phone-wrapper form-group col-md-6">
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

                                                </div>

                                                <div className="form-row">
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
                                                <div className="form-row">
                                                    <div className="department-wrapper form-group col-md-6">
                                                        <label>Department</label>
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
                                                    <div className="role-wrapper form-group col-md-6">
                                                        <label>Role</label>
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
                                                <div className="form-row">

                                                    <div className="type-wrapper form-group col-md-6">
                                                        <label>Type</label>
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


                                            <div className="address1-wrapper form-group">
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
                                            <div className="address2-wrapper">
                                                <TextInput
                                                    name="address2"
                                                    id="address2"
                                                    type="text" 
                                                    placeholder="Techspecialist, Arare Street, first floor"
                                                    className={`form-control ${touched.address2 && errors.address2 ? "is-invalid" : ""}`}
                                                    label="Address 2" 
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="address2"
                                                    className="invalid-feedback p-0"
                                                />
                                            </div>
                                            <div className="form-row">
                                                <div className="city-wrapper form-group col-md-6">
                                                    <TextInput
                                                        name="city"
                                                        id="city"
                                                        type="text" 
                                                        placeholder="Ilorin"
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
                                                        className={`form-control ${touched.state && errors.state ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                                <div className="zipcode-wrapper form-group col-md-2">
                                                    <TextInput
                                                        name="zipcode"
                                                        id="zipcode"
                                                        type="text" 
                                                        placeholder="234466"
                                                        className={`form-control ${touched.zipcode && errors.zipcode ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>


                                            <div className="modal-footer">
                                                <Button 
                                                    type="button"
                                                    label="Close"
                                                    className="btn pace-bg-primary" 
                                                    data-dismiss="modal"
                                                    
                                                />

                                                <Button 
                                                    type="submit"
                                                    label="Employee"
                                                    className="btn pace-bg-primary" 
                                                />
                                            </div>
                                        </Form>
                                    }}
                                </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}


export default InviteForm;