// React
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

// Layouts
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer';

// Components
import Index from './Index';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeList from './EmployeeList';
import TimerReport from './reports/TimerReport';
import BillingReport from './reports/BillingReport';
import Profile from './Profile';
import Task from './Task';
import Todo from './todos/Todo'
import { getTodos } from '../../../actions/todo/todoAction';
import { getTasks } from '../../../actions/task/taskAction';


const Dashboard = () =>{

    const { isLoggedIn } = useSelector(state => state.authenticationState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodos())
        dispatch(getTasks())
    }, [])

    if(!isLoggedIn){
        return <Redirect to="/login" />
    }

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
                                    <Route exact path="/dashboard/profile/:id" component={Profile} />
                                    <Route exact path="/dashboard/billing-report" component={BillingReport} />
                                    <Route exact path="/dashboard/timer-report" component={TimerReport} />
                                    {/* <Route exact path="/dashboard/task" component={EmployeeTasks} /> */}
                                    <Route exact path="/dashboard/edit" component={EditEmployee} />
                                    <Route exact path="/dashboard/employ" component={AddEmployee} />
                                    <Route exact path="/dashboard/employee-list" component={EmployeeList} />
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