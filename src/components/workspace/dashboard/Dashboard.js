import { React, Component } from 'react';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar'
import DashBody from './DashBody';
import Invite from './ManageEmployee';

import AcceptedTasks from './employeeTasks/AcceptedTasks';
import EmployeeTasks from './employeeTasks/EmployeeTasks';

import Footer from '../layouts/Footer';
import './dashboard-styles/style.default.css';
import './dashboard-styles/utilities.css';
import './dashboard-styles/custom.css';
import './dashboard-styles/orionicons.css';

class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>

                <div>
                    <Navbar  />
                    <div className="d-flex align-items-stretch">
                        <Sidebar />
                            <div className="page-holder w-100 d-flex flex-wrap">

                                {/* <DashBody /> */}
                                {/* <Invite /> */}
                                {/* <AcceptedTasks /> */}
                                <EmployeeTasks />
                            {/* <Footer /> */}
                            </div>
                    </div>
                    
                </div>

            </>
        )
    }
}


export default Dashboard;