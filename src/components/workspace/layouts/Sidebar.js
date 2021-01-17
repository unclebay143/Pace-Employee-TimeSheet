import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../actions/auth/authAction';
import { logOutSuccessLogger } from '../../../toaster';

const Sidebar = () => {
    const dispatch = useDispatch();
    const [currentUserRoleID, setCurrentUserRoleID] = useState('')
    const [currentUserRoleName, setCurrentUserRoleName] = useState('')
    
    useEffect(() => {
        const getCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(getCurrentUser){
            setCurrentUserRoleID(getCurrentUser.roleID)
            switch (getCurrentUser.roleID) {
                case 1:
                    return setCurrentUserRoleName('Super Admin')
                case 3:
                    return setCurrentUserRoleName('Co Admin')
                case 4:
                    return setCurrentUserRoleName('Internal Admin')
                case 5:
                    return setCurrentUserRoleName('Staff')
                default:
                    setCurrentUserRoleName('Welcome')
                    break;
            }
        }
    }, [])
    
    const logOut = () =>{
        
        // logout notification
        logOutSuccessLogger()

        // process the logout dispatch
        const processLogOut = () =>{
            dispatch(logout());
        }

        //callback to allow the notification to complete
        const waitForLogger = setTimeout(processLogOut, 2000)

        // unsubscribe the callback
        return(()=> clearTimeout(waitForLogger))
        // setTimeout(() => {
        //     dispatch(logout());
        // }, 2000);
    }
    return(
        <>
        <style>
            {
                `
                    .Toastify__toast--warning{
                        background: rgb(255,112,150);
                        color: #FFFFFF;
                    }
                `
            }
        </style>
            <div id="sidebar" className="sidebar py-3" h='6' data-tut='reactour__sidebar'>
                    <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family" id="role_display">{ currentUserRoleName }</div>
                        <ul className="sidebar-menu list-unstyled">
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard" className="sidebar-link text-muted" activeclassname="active"><i className="o-home-1 mr-3 text-gray"></i><span>Dashboard</span></NavLink></li>
                           {
                               currentUserRoleID === 5 ? '' : (

                                   <li className="sidebar-list-item"><a href="." data-toggle="collapse" data-target="#manage-employee" aria-expanded="false" aria-controls="manage-employee" className="sidebar-link text-muted" ><i className="o-user-details-1 mr-3 text-gray"></i><span>Employee</span></a>
                                        <div id="manage-employee" className="collapse">
                                            <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                                                <li className="sidebar-list-item"><NavLink to="/dashboard/employ" className="sidebar-link text-muted pl-lg-5">Add Employee</NavLink></li>
                                                <li className="sidebar-list-item"><NavLink to="/dashboard/employee-list" className="sidebar-link text-muted pl-lg-5">View Employee</NavLink></li>
                                            </ul>
                                        </div>
                                    </li>
                                )
                           }
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/task/all-tasks" className="sidebar-link text-muted" activeclassname="active"><i className="fas fa-tasks mr-3 text-gray"></i><span>Task</span></NavLink></li>
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/e-schedule" className="sidebar-link text-muted" activeclassname="active"><i className="o-timing-1 mr-3 text-gray"></i><span>e-schedule</span></NavLink></li>
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/todos" className="sidebar-link text-muted" activeclassname="active"><i className="o-paper-stack-1 mr-3 text-gray"></i><span>Todo</span></NavLink></li>
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/calendar" className="sidebar-link text-muted" activeclassname="active"><i className="o-table-content-1 mr-3 text-gray"></i><span>Calendar</span></NavLink></li>
                            <li className="sidebar-list-item"><NavLink exact to="/dashboard/timesheet" className="sidebar-link text-muted" activeclassname="active"><i className="o-table-content-1 mr-3 text-gray"></i><span>Time Sheet</span></NavLink></li>
                           {
                               currentUserRoleID === 5 ? '' : (
                                   <li className="sidebar-list-item"><a href="." data-toggle="collapse" data-target="#report" aria-expanded="false" aria-controls="pages" className="sidebar-link text-muted" activeclassname="active"><i className="o-wireframe-1 mr-3 text-gray"></i><span>Report</span></a>
                                        <div id="report" className="collapse">
                                            <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                                                <li className="sidebar-list-item"><NavLink to="/dashboard/task-report" className="sidebar-link text-muted pl-lg-5">Task</NavLink></li>
                                                <li className="sidebar-list-item"><NavLink to="/dashboard/timer-report" className="sidebar-link text-muted pl-lg-5">Timer</NavLink></li>
                                                <li className="sidebar-list-item"><NavLink to="/dashboard/billing-report" className="sidebar-link text-muted pl-lg-5">Billing</NavLink></li>
                                            </ul>
                                        </div>
                                    </li>
                               )
                           }
                        </ul>
                    <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">EXTRAS</div>
                    <ul className="sidebar-menu list-unstyled">
                        {
                            currentUserRoleID === 5 ? '' : (
                                <>
                                    {/* <li className="sidebar-list-item"><NavLink to="/dashboard/company/settings" className="sidebar-link text-muted" activeclassname="active"><i className="o-settings-window-1 mr-3 text-gray"></i><span>Settings</span></NavLink></li> */}
                                    <li className="sidebar-list-item"><a href="." data-toggle="collapse" data-target="#settings" aria-expanded="false" aria-controls="pages" className="sidebar-link text-muted" activeclassname="active"><i className="o-wireframe-1 mr-3 text-gray"></i><span>settings</span></a>
                                        <div id="settings" className="collapse">
                                            <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                                                <li className="sidebar-list-item"><NavLink to="/dashboard/company/profile/1" className="sidebar-link text-muted pl-lg-5">Company Profile</NavLink></li>
                                                <li className="sidebar-list-item"><NavLink to="/dashboard/company/settings/departments" className="sidebar-link text-muted pl-lg-5">Manage Team</NavLink></li>
                                                <li className="sidebar-list-item"><NavLink to="/dashboard/company/profile/update/1" className="sidebar-link text-muted pl-lg-5">Update Profile</NavLink></li>
                                            </ul>
                                        </div>
                                    </li>
                                </>
                            )
                        }
                        <li className="sidebar-list-item"><span onClick={logOut} className="sidebar-link text-muted cursor" activeclassname="active"><i className="o-exit-1 mr-3 text-gray"></i><span>Logout</span></span></li>
                    </ul>
                </div>
        </>
    )
}

export default Sidebar;