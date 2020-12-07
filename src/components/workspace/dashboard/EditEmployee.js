import React, { Component } from 'react'

export default class EditEmployee extends Component {
    render() {
        return (
            <div>
                    <div className="modal fade" id="editEmployeeRecord" tabIndex={-1} role="dialog" aria-labelledby="editEmployeeRecordLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="editEmployeeRecordLabel">Edit Record</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="hidden" id="identifier" />
                                <label htmlFor="editFirstName">Firstname</label>
                                <input type="text" className="form-control" id="editFirstName" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="editSecondName">Lastname</label>
                                <input type="text" className="form-control" id="editSecondName" />
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="editEmail">Email</label>
                                <input type="editEmail" className="form-control" id="editEmail" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="editPhone">Phone</label>
                                <input type="tel" className="form-control" id="editPhone" />
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="editPassword" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="cEditPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="cEditPassword" />
                            </div>
                            </div>
                            <div>
                            <input type="checkbox" name onclick="showPassword()" />
                            <label htmlFor="showPassword">Verify</label>
                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="editDepartment">Department</label>
                                <select id="editDepartment" className="form-control">
                                <option selected>Choose...</option>
                                <option value="web development">Web Development</option>
                                <option value="web design">Web Design</option>
                                <option value="product management">Product Management</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="editRole">Role</label>
                                <select id="editRole" className="form-control">
                                <option selected>Choose...</option>
                                <option value="backend developer">Backend Developer</option>
                                <option value="frontend developer">Frontend Developer</option>
                                <option value="quality assurance">Quality Assurance</option>
                                </select>
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="editType">Type</label>
                                <select id="editType" className="form-control">
                                <option value="blank" selected>Choose...</option>
                                <option value={332}>Internal</option>
                                <option value={554}>Employee</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="editSalary">Salary</label>
                                <input type="text" className="form-control" id="editSalary" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="editAddress">Address</label>
                            <input type="text" className="form-control" id="editAddress" placeholder="143 work and connect" required />
                            </div>
                            <div className="form-group">
                            <label htmlFor="editAddress2">Address 2</label>
                            <input type="text" className="form-control" id="editAddress2" placeholder="Techspecialist, Arare Street, first floor" />
                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="editCity">City</label>
                                <input type="text" className="form-control" id="editCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="editState">State</label>
                                <input type="text" className="form-control" id="editState" />
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="editInputZip">Zip</label>
                                <input type="text" className="form-control" id="editInputZip" />
                            </div>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn pace-bg-primary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn pace-bg-primary" onclick="updateRecord()">Employee</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
