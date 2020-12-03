const Sidebar = () => {
    return(
        <>
            <div id="sidebar" class="sidebar py-3">
                    <div class="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family" id="role_display">Admin</div>
                        <ul class="sidebar-menu list-unstyled">
                            <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted active"><i class="o-home-1 mr-3 text-gray"></i><span>Dashboard</span></a></li>
                            <li class="sidebar-list-item"><a href="manage-employee.html" class="sidebar-link text-muted"><i class="o-user-details-1 mr-3 text-gray"></i><span>Employee</span></a></li>
                            <li class="sidebar-list-item"><a href="task.html" class="sidebar-link text-muted"><i class="fas fa-tasks mr-3 text-gray"></i><span>Task</span></a></li>
                            <li class="sidebar-list-item"><a href="forms.html" class="sidebar-link text-muted"><i class="o-timing-1 mr-3 text-gray"></i><span>e-schedule</span></a></li>
                            <li class="sidebar-list-item"><a href="todo.html" class="sidebar-link text-muted"><i class="o-paper-stack-1 mr-3 text-gray"></i><span>Todo</span></a></li>
                            <li class="sidebar-list-item"><a href="../calendar.html" class="sidebar-link text-muted"><i class="o-table-content-1 mr-3 text-gray"></i><span>Calendar</span></a></li>
                            <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#pages" aria-expanded="false" aria-controls="pages" class="sidebar-link text-muted"><i class="o-wireframe-1 mr-3 text-gray"></i><span>Report</span></a>
                                <div id="pages" class="collapse">
                                    <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                                        <li class="sidebar-list-item"><a href="timer-report.html" class="sidebar-link text-muted pl-lg-5">Timer</a></li>
                                        <li class="sidebar-list-item"><a href="billing-report.html" class="sidebar-link text-muted pl-lg-5">Billing</a></li>
                                        {/* <!-- <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Page three</a></li> -->
                                        <!-- <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted pl-lg-5">Page four</a></li> --> */}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    <div class="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">EXTRAS</div>
                    <ul class="sidebar-menu list-unstyled">
                        <li class="sidebar-list-item"><a href="request.html" class="sidebar-link text-muted"><i class="o-letter-1 mr-3 text-gray"></i><span>Request</span></a></li>
                        <li class="sidebar-list-item"><a href="billing.html" class="sidebar-link text-muted"><i class="o-database-1 mr-3 text-gray"></i><span>Billing</span></a></li>
                        <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted"><i class="o-settings-window-1 mr-3 text-gray"></i><span>Settings</span></a></li>
                        <li class="sidebar-list-item" onclick="logOut()"><a href="#" class="sidebar-link text-muted"><i class="o-exit-1 mr-3 text-gray"></i><span>Logout</span></a></li>
                    </ul>
                </div>
        </>
    )
}

export default Sidebar;