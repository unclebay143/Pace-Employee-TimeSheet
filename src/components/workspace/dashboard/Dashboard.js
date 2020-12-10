import { React, Component } from 'react';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar'
import DashBody from './DashBody';
import Invite from './ManageEmployee';

import AcceptedTasks from './employeeTasks/AcceptedTasks';
import EmployeeTasks from './employeeTasks/EmployeeTasks';

import Footer from '../layouts/Footer';

class Dashboard extends Component{
    render(){
        return(
            <>

                <div>
                    <Navbar  />
                    <div className="d-flex align-items-stretch">
                        <Sidebar />
                            <div className="page-holder w-100 d-flex flex-wrap">

<<<<<<< HEAD
                                <DashBody />
=======
                                {/* <DashBody /> */}
                                {/* <Invite /> */}
                                {/* <AcceptedTasks /> */}
                                <EmployeeTasks />
>>>>>>> 8ec18cd55b60abbf8482b26ff35fbb10f3ae3bbf
                            {/* <Footer /> */}
                            </div>
                    </div>
                    
                </div>

            </>
        )
    }
}


export default Dashboard;