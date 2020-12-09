import { React, Component } from 'react';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar'
import DashBody from './DashBody';
import Invite from './ManageEmployee';
import Footer from '../layouts/Footer';

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
                                <Invite />
                            {/* <Footer /> */}
                            </div>
                    </div>
                </div>

            </>
        )
    }
}


export default Dashboard;