import { React, Component } from 'react';
import Footer from '../layouts/Footer';
import EmployeeList from './EmployeeList';
import Button from '../../layouts/Button'
import InviteForm from './AddEmployee';

class Invite extends Component{
    render(){
        return(
            <>
                <div className="d-flex flex-wrap">
                    <div className="container-fluid px-xl-5">
                        <div className="pt-5">
                        {/* trigger button */}
                        <div className="row">
                            <div className="col d-flex">
                            <button type="button" className="btn pace-bg-primary d-block" data-toggle="modal" data-target="#addEmployeeForm">
                                Add Employee
                            </button>
                            {/* <span className="lead m-2">or</span>
                            <button type="button" className="btn bg-green d-block ml-2" data-toggle="modal" data-target="#addEmployeeForm">
                                Invite Employee
                            </button> */}
                            </div>
                            <div className="col">
                            <form className="form-inline d-flex search-form md-form form-sm mt-0">
                                <input className="form-control search-input form-control-sm w-75" type="text" placeholder="Search" aria-label="Search" id="searchParam" />
                                {/* <button className="btn pace-bg-primary ml-3" id="searchEmployeeBtn">
                                <i className="fas fa-search" aria-hidden="true" />
                                Search
                                </button> */}
                                <Button 
                                    className="btn pace-bg-primary ml-3" 
                                    id="searchEmployeeBtn"
                                    icon="fas fa-search"
                                    label="Search"
                                />
                            </form>
                            {/* <input type="text"class="form-control"> */}
                            </div>
                            {/* Add Employee Modal Form Section*/}
                            <InviteForm />
                        </div>
                        </div>
                        <section className="py-5">
                        <EmployeeList />
                        </section>
                    </div>
                    <div className="modal" id="profileDisplayForm" tabIndex={-1} role="dialog" aria-labelledby="profileDisplayLabel" aria-hidden="true">
                        <div className="modal-body">
                        <div className="py-5 profile">
                            <div className="card">
                            <div className="card-header d-flex">
                                <h3>Profile</h3>
                                <button type="button" className="d-block ml-auto close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                <div className="col-md-2">
                                    <img src="../../assets/img/about/ayodele_samuel_adebayo.jpg" alt />
                                </div>
                                <div className="col-md-4 profile-left-section">
                                    <input type="hidden" id="del-identifier" />
                                    <h4 className="m-t-0 mb-0" id="displayFullName">Ayodele Samuel Adebayo</h4>
                                    <h6 className="text-muted text-uppercase" id="displayRole">Frontend Developer</h6>
                                    <small className="text-muted" id="displayDepartment">Web Design</small>
                                    {/* <div class="user-name mt-3" id="displayUserName">Employee ID : <span id="displayUserName">unclebay143</span></div> */}
                                    <div className="text-muted">Date of Joined : <span id="displayJoinedDate">Aug 21, 2020</span></div>
                                    <button className="btn pace-bg-accent mt-3" onclick="deleteUser();">Delete Account</button>
                                </div>
                                <div className="col-md-6 my-lg-4">
                                    <ul className="profile-info profile-right-section">
                                    <li>
                                        <div className="title">Phone:</div>
                                        <div className="text" id="displayPhone">08038157444</div>
                                    </li>
                                    <li>
                                        <div className="title">Email:</div>
                                        <div className="text" id="displayEmail">unclebigbay@gmail.com</div>
                                    </li>
                                    {/* <li>
                                                            <div class="title">Birthday:</div>
                                                            <div class="text">24th May</div>
                                                        </li>
                                                        <li>
                                                            <div class="title">Address:</div>
                                                            <div class="text">TIIDELab cohort 2</div>
                                                        </li>
                                                        <li>
                                                            <div class="title">Report to:</div>
                                                            <div class="text">Solomon Chokor</div>
                                                        </li> */}
                                    <li>
                                        <div className="title">Completed Task : </div>
                                        <div className="text">5</div>
                                    </li>
                                    <li>
                                        <div className="title">Pending Task : </div>
                                        <div className="text">15</div>
                                    </li>
                                    <li>
                                        <div className="title">Salary:</div>
                                        <div className="text" id="displaySalary" />
                                    </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="row mt-5">
                                <div className="col-md-2" />
                                <div className="col-md-4 profile-stat">
                                    <ul>
                                    <li>
                                        <div className="title">Address 1 : </div>
                                        <div className="text" id="displayAddress1" />
                                    </li>
                                    <li>
                                        <div className="title">Address 2 : </div>
                                        <div className="text" id="displayAddress2">5</div>
                                    </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 profile-links">
                                    <ul>
                                    <li>
                                        <div className="title">City : </div>
                                        <div className="text" id="displayCity">5</div>
                                        {/* <div class="text"><a href="#">AyodeleSamuelAdebayo.pdf</a></div> */}
                                    </li>
                                    <li>
                                        <div className="title">State :</div>
                                        <div className="text" id="displayState" />
                                        {/* <div class="text"><a href="#">unclebay143</a></div> */}
                                    </li>
                                    </ul>
                                </div>
                                </div>
                                {/* <button type="button"class="btn pace-bg-primary"data-dismiss="modal">Close</button> */}
                                <div className="row">
                                <div className="col-2 mt-5" />
                                <div className="col-6" />
                                <div className="col-4">
                                    {/* <button type="button" class="btn pace-bg-primary mt-5 ml-5" onclick="alert(document.getElementById( 'email').value)">Employee</button> */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <div class="modal-footer">
                                
                            </div> */}
                        </div>
                    </div>
                    {/* <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-left text-primary">
                            <p className="mb-2 mb-md-0">Pace Timesheet © 2018-2020</p>
                            </div>
                            <div className="col-md-6 text-center text-md-right text-gray-400">
                            </div>
                        </div>
                        </div>
                    </footer> */}
                    <Footer />
                </div>
            </>
        )
    }
}



export default Invite;