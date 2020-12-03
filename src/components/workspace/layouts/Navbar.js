import { React, Component } from 'react';
import Timer from '../dashboard/Timer';
import './dashboard-styles/timer.css';

class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {

        };
    };

    render(){

        return(
            <>
                <header className="header">
                    <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow"><a href="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead"><i className="fas fa-align-left"></i></a><a href="index.html" className="navbar-brand font-weight-bold text-uppercase text-base pace-primary-color dashboard-lead companyDisplay">Ayodele Samuel Adebayo</a>
                        <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
                            <Timer />
                            <li className="nav-item dropdown mr-3"><a id="notifications" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-gray-400 px-1"><i className="fa fa-bell pace-primary-color"></i><span className="notification-icon pace-bg-accent"></span></a>
                                <div aria-labelledby="notifications" className="dropdown-menu">
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <div className="icon icon-sm pace-bg-accent text-white"><i className="fab fa-twitter"></i></div>
                                            <div className="text ml-2">
                                                <p className="mb-0">You have 2 followers</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <div className="icon icon-sm bg-green text-white"><i className="fas fa-envelope"></i></div>
                                            <div className="text ml-2">
                                                <p className="mb-0">You have 6 new messages</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <div className="icon icon-sm bg-blue text-white"><i className="fas fa-upload"></i></div>
                                            <div className="text ml-2">
                                                <p className="mb-0">Server rebooted</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <div className="icon icon-sm pace-bg-accent text-white"><i className="fab fa-twitter"></i></div>
                                            <div className="text ml-2">
                                                <p className="mb-0">You have 2 followers</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div><a href="#" className="dropdown-item text-center"><small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown ml-auto">
                                <a id="userInfo" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><img src="../../assets/img/about/ayodele_samuel_adebayo.jpg" alt="Jason Doe" style={{maxWidth: "2.5rem"}} className="img-fluid rounded-circle shadow" />work</a>
                                <div aria-labelledby="userInfo" className="dropdown-menu"><a href="#" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family companyDisplay">Ayodele Samuel Adebayo</strong><small id="role_display">Web Developer</small></a>
                                    <div className="dropdown-divider"></div><a href="#" className="dropdown-item">Settings</a><a href="#" className="dropdown-item">Activity log</a>
                                    <div className="dropdown-divider"></div><a href="#" className="dropdown-item" onclick="logOut()">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}

export default Navbar;