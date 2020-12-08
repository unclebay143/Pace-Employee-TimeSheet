import { Formik, Form, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import Invite from './ManageEmployee';
import { TextInput } from '../../layouts/FormInput';

class InviteForm extends Component {
    render() {
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

                                <Formik >
                                    {()=>{
                                        return <Form>

                                            <div className="firstname-wrapper">

                                                <TextInput 
                                                    name="firstname"
                                                    type="text" 
                                                    placeholder="Enter Firstname"
                                                    className="form-control" 
                                                    id="employee_name"
                                                    label="Firstname"
                                                
                                                />
                                            </div>
                                            <div className="secondname-wrapper">
                                                    
                                                <TextInput
                                                    name="secondname"
                                                    placeholder="Enter Secondname"
                                                    type="text" 
                                                    className="form-control" 
                                                    id="secondName"
                                                />

                                            </div>
                                            <div>
                                                <TextInput
                                                    name="phone"
                                                    placeholder="Enter Phone Number"
                                                    type="tel" 
                                                    className="form-control" 
                                                    id="phone"
                                                />
                                            </div>

                                            <div>
                                                <TextInput
                                                    name="email"
                                                    placeholder="Enter Valid Email Address"
                                                    type="text" 
                                                    className="form-control" 
                                                    id="email"
                                                />
                                            </div>

                                            <div>
                                                <TextInput
                                                    name="password"
                                                    placeholder="Create Password"
                                                    type="password" 
                                                    className="form-control" 
                                                    id="password"
                                                />
                                            </div>

                                            <div>
                                            <TextInput
                                                    name="password2"
                                                    placeholder="Confirm Password"
                                                    type="password" 
                                                    className="form-control" 
                                                    id="password2"
                                                />
                                            </div>

                                            <div>
                                            <TextInput
                                                    name="secondname"
                                                    placeholder="Enter Secondname"
                                                    type="text" 
                                                    className="form-control" 
                                                    id="secondName"
                                                />
                                            </div>
                                        </Form>
                                    }}
                                </Formik>
                            <form>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstName">Firstname</label>
                                    <input type="text" className="form-control" id="employee_name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="secondName">Lastname</label>
                                    <input type="text" className="form-control" id="secondName" />
                                </div>
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" className="form-control" id="employee_phone" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="employee_email" />
                                </div>
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="cPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="cPassword" />
                                </div>
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="department">Department</label>
                                    <select id="employee_department" className="form-control">
                                    <option value="blank" selected>Choose...</option>
                                    <option value="Web development">Web Development</option>
                                    <option value="Web design">Web Design</option>
                                    <option value="Product Management">Product Management</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="role">Role</label>
                                    <select id="employee_role" className="form-control">
                                    <option value="blank" selected>Choose...</option>
                                    <option value="backend developer">Backend Developer</option>
                                    <option value="frontend developer">Frontend Developer</option>
                                    <option value="quality assurance">Quality Assurance</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="type">Type</label>
                                    <select id="employee_type" className="form-control">
                                    <option value="blank" selected>Choose...</option>
                                    <option value={332}>Internal</option>
                                    <option value={554}>Employee</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="salary">Salary</label>
                                    <input type="text" className="form-control" id="salary" />
                                </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress1" placeholder="143 work and connect" required />
                                </div>
                                <div className="form-group">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Techspecialist, Arare Street, first floor" />
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <input id="inputState" className="form-control" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="Zip">Zip</label>
                                    <input type="text" className="form-control" id="Zip" />
                                </div>
                                </div>
                                {/* <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input"type="checkbox"id="gridCheck">
                                    <label class="form-check-label"for="gridCheck">
                                    Check me out
                                    </label>
                                </div>
                                </div> */}
                                {/* <button type="submit"class="btn pace">Sign in</button> */}
                            </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn pace-bg-primary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn pace-bg-primary" onclick="addEmployee()">Employee</button>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}


export default InviteForm;