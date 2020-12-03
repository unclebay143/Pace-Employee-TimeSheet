import { React, Component } from 'react';
import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar'
import DashBody from './DashBody';
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
                    <div class="d-flex align-items-stretch">
                        <Sidebar />
                        <DashBody />
                    </div>
                </div>

            </>
        )
    }
}


export default Dashboard;