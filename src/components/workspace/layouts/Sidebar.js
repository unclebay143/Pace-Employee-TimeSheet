import {Link} from 'react-router-dom'


const Sidebar = () => {
    return(
        <>
            <div id="sidebar" className="sidebar py-3">
                    <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family" id="role_display">Admin</div>
                    {/* <Link to="invite">LINK</Link> */}
                        <ul className="sidebar-menu list-unstyled">
                            <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted active"><i className="o-home-1 mr-3 text-gray"></i><span>Dashboard</span></a></li>
                            <li className="sidebar-list-item"><a href="manage-employee.html" className="sidebar-link text-muted"><i className="o-user-details-1 mr-3 text-gray"></i><span>Employee</span></a></li>
                            <li className="sidebar-list-item"><a href="task.html" className="sidebar-link text-muted"><i className="fas fa-tasks mr-3 text-gray"></i><span>Task</span></a></li>
                            <li className="sidebar-list-item"><a href="forms.html" className="sidebar-link text-muted"><i className="o-timing-1 mr-3 text-gray"></i><span>e-schedule</span></a></li>
                            <li className="sidebar-list-item"><a href="todo.html" className="sidebar-link text-muted"><i className="o-paper-stack-1 mr-3 text-gray"></i><span>Todo</span></a></li>
                            <li className="sidebar-list-item"><a href="../calendar.html" className="sidebar-link text-muted"><i className="o-table-content-1 mr-3 text-gray"></i><span>Calendar</span></a></li>
                            <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-controls="pages" className="sidebar-link text-muted"><i className="o-wireframe-1 mr-3 text-gray"></i><span>Report</span></a>
                                <div id="pages" className="collapse">
                                    <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                                        <li className="sidebar-list-item"><a href="timer-report.html" className="sidebar-link text-muted pl-lg-5">Timer</a></li>
                                        <li className="sidebar-list-item"><a href="billing-report.html" className="sidebar-link text-muted pl-lg-5">Billing</a></li>
                                        {/* <!-- <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page three</a></li> -->
                                        <!-- <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted pl-lg-5">Page four</a></li> --> */}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">EXTRAS</div>
                    <ul className="sidebar-menu list-unstyled">
                        <li className="sidebar-list-item"><a href="request.html" className="sidebar-link text-muted"><i className="o-letter-1 mr-3 text-gray"></i><span>Request</span></a></li>
                        <li className="sidebar-list-item"><a href="billing.html" className="sidebar-link text-muted"><i className="o-database-1 mr-3 text-gray"></i><span>Billing</span></a></li>
                        <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="o-settings-window-1 mr-3 text-gray"></i><span>Settings</span></a></li>
                        <li className="sidebar-list-item" onclick="logOut()"><a href="#" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray"></i><span>Logout</span></a></li>
                    </ul>
                </div>
        </>
    )
}

export default Sidebar;