// React
import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect, useHistory } from 'react-router-dom';

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
import { syncCurrentUser } from '../../../actions/user/userAction';

// Tour
import TourContainer from '../../tour/config/TourContainer';
import ChangePassword from '../../user/ChangePassword';
import Eschedule from '../../../components/workspace/dashboard/eShedule/Eshedule';
import Calendar from '../../company/calendar/Calendar';
import ManageCalendar from '../../company/calendar/ManageCalendar';
import { welcomeBackLogger } from '../../../toaster';
import { currentUserFromLocalStorage } from '../../../services/auth-header';
import TaskReport from './reports/TaskReport';
import PersonalTimeSheet from './timer/PersonalTimeSheet';



const Dashboard = () =>{
    const { welcome, isLoggedIn } = useSelector(state => state.authenticationState)
    const history = useHistory()
    const [redirect, setRedirect] = useState(false)
    // console.log(currentUserFromLocalStorage)
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            setRedirect(true)
        }
    }, [isLoggedIn])
        
    useEffect(() => {
        if(welcome){
            welcomeBackLogger()
        }
    },[welcome]);
    
    if(redirect){
        //  history.push('/login')
        return <Redirect to="/login" push={true} />
    }

    return(
        <>
            <div h='1' data-tut='reactour__welcome'>
                <TourContainer />
                {/* >>>>> NAVBAR COMPONENT SECTION <<<<< */}
                <Navbar  />
                    <div className="d-flex align-items-stretch">
                {/* >>>>> SIDEBAR COMPONENT SECTION <<<<< */}
                        <Sidebar />
                        <div className="page-holder w-100 d-flex flex-wrap">
                            <div className="container-fluid dashboard-body-wrapper">
                {/* >>>>> BODIES COMPONENTS SECTION <<<<< */}
                                <Switch>

                                    <Route path="/dashboard/calendar" component={Calendar} />
                                    <Route path="/dashboard/e-schedule" component={Eschedule} />
                                    <Route path="/dashboard/manageCalendar" component={ManageCalendar} />

                                    <Route path="/dashboard/todos" component={Todo} />
                                    <Route path="/dashboard/task" component={Task} />

                                    {/* users paths */}
                                    <Route exact path="/dashboard/profile/:id" component={Profile} />
                                    <Route exact path="/dashboard/profile/changepassword/:id" component={ChangePassword} />
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

                                    {/* Personal timesheet */}
                                    <Route exact path="/dashboard/timesheet" component={PersonalTimeSheet} />

                                    <Route exact path="/dashboard/billing-report" component={BillingReport} />
                                    <Route exact path="/dashboard/task-report" component={TaskReport} />
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