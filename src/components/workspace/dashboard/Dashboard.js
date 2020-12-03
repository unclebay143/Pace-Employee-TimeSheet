import { React, Component } from 'react';
import Navbar from '../layouts/Navbar';
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
                </div>

            </>
        )
    }
}


export default Dashboard;