import React, { Component } from 'react';
import {useSelector} from 'react-redux';
import Button from '../../layouts/Button';
import { TextInput } from '../../layouts/FormInput';
  

export default function EmployeeList(){
        const employees = useSelector(state => state.employee)
        return (
            <>
              <div className="card">
                        <div className="card-header">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between">
                            <h6 className="text-uppercase mb-0 pace-accent-color">Employee List</h6>
                            <div className="d-flex">
                              <input placeholder="Search" className="form-control"/>
                              {/* <Button label="Search" className="search-btn pace-btn pace-btn-primary ml-2" /> */}
                              <style>
                                  {
                                    ` 
                                      .search-btn{
                                        border-radius: 5px;
                                        padding: 4px 20px !important;
                                      }

                                    `
                                  }
                              </style>
                            </div>
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
                                {
                                    employees.map(({ firstname, lastname, department, phone, role, employeed_date }, index)=>(
                                        <tr key={ index }>
                                            <td>{index+1}</td>
                                            <td>{firstname}</td>
                                            <td>{lastname}</td>
                                            <td>{phone}</td>
                                            <td>{department}</td>
                                            <td>{role}</td>
                                            <td>{employeed_date}
                                            <i className="fas fa-eye ml-5 text-blue"></i>
                                            </td>
                                        </tr>                                
                                    ))
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>  
            </>
        )
    }
