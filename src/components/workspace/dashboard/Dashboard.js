// React
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';

// Layouts
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer';

// Components
import Index from './Index';
import AddEmployee from '../../company/employee/AddEmployee';
import EmployeeList from '../../company/employee/EmployeeList';
import EmployeeProfile from '../../company/employee/EmployeeProfile';
import ManageDepartment from '../../company/department/ManageDepartment';
import Profile from '../../user/Profile';
import UpdateProfile from '../../user/UpdateProfile';
import Task from './Task';
import Todo from './todos/Todo'
import BillingReport from './reports/BillingReport';
import TimerReport from './reports/TimerReport';
import UpdateEmployeeProfile from '../../company/employee/UpdateEmployeeProfile';
import UpdateCompanyProfile from '../../company/Settings/UpdateCompanyProfile';
import CompanyProfile from '../../company/Settings/CompanyProfile';
import Settings from '../../company/Settings/Settings';

// Actions
import { getTodos } from '../../../actions/todo/todoAction';
import { getTasks } from '../../../actions/task/taskAction';
import { syncCurrentUser } from '../../../actions/user/userAction';


const Dashboard = () =>{

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        const currentUser  = JSON.parse(localStorage.getItem('currentUser'));
        if( currentUser === null || currentUser === undefined ){
            history.push('./login');
        }
        
        if ( currentUser ){
            dispatch(syncCurrentUser( currentUser.staffID ))
        }

    },[])

    useEffect(() => {
        // Fetch user todo list
        dispatch(getTodos())

        // Fetch user tasks
        dispatch(getTasks())
    }, [dispatch, history])

    return(
        <>
            <div>
                {/* >>>>> NAVBAR COMPONENT SECTION <<<<< */}
                <Navbar  />
                    <div className="d-flex align-items-stretch">
                {/* >>>>> SIDEBAR COMPONENT SECTION <<<<< */}
                        <Sidebar />
                        <div className="page-holder w-100 d-flex flex-wrap">

                            <div className="container-fluid dashboard-body-wrapper">
                {/* >>>>> BODIES COMPONENTS SECTION <<<<< */}
                                <Switch>
                                    <Route path="/dashboard/todos" component={Todo} />
                                    <Route path="/dashboard/task" component={Task} />

                                    {/* users paths */}
                                    <Route exact path="/dashboard/profile/:id" component={Profile} />
                                    <Route exact path="/dashboard/profile/update/:id" component={UpdateProfile} />

                                    {/* company paths */}
                                    <Route exact path="/dashboard/company/profile/:id" component={CompanyProfile} />
                                    <Route exact path="/dashboard/company/profile/update/:id" component={UpdateCompanyProfile} />
                                    <Route exact path="/dashboard/company/settings" component={Settings} />
                                    <Route path="/dashboard/company/settings/departments" component={ManageDepartment} />
                                    <Route exact path="/dashboard/employ" component={AddEmployee} />
                                    <Route exact path="/dashboard/employee-list" component={EmployeeList} />
                                    <Route exact path="/dashboard/employee/profile/:id" component={EmployeeProfile} />
                                    <Route exact path="/dashboard/employee/profile/update/:id" component={UpdateEmployeeProfile} />

                                    <Route exact path="/dashboard/billing-report" component={BillingReport} />
                                    <Route exact path="/dashboard/timer-report" component={TimerReport} />
                                    {/* <Route exact path="/dashboard/task" component={EmployeeTasks} /> */}
                                    <Route exact path="/dashboard" component={Index} />
                                </Switch>
                            </div>
                {/* >>>>> FOOTER COMPONENT SECTION <<<<< */}
                        <Footer />
                    </div>
                </div>
            </div>

        </>
    )
}


export default Dashboard;