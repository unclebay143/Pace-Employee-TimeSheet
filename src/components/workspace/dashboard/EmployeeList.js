import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <>
              <div className="card">
                        <div className="card-header">
                        <div className="row">
                            <div className="col">
                            <h6 className="text-uppercase mb-0 pace-accent-color">Employee List</h6>
                            </div>
                            <div className="col d-block ml-auto">
                            <span id="searchResponse" />
                            </div>
                        </div>
                        </div>
                        <div className="card-body">
                        <table className="table card-text">
                            <thead>
                            <tr className="pace-bg-primary text-white shadow">
                                <th>S/N</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Department</th>
                                <th>Role</th>
                                <th>Employed Date</th>
                            </tr>
                            </thead>
                            <tbody id="employeeList">




                                
                            </tbody>
                        </table>
                        </div>
                    </div>  
            </>
        )
    }
}
