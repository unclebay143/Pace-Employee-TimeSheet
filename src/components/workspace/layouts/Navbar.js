
// React
import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Component
import TimerContainer from '../dashboard/timer/Timer';

// End session
import { logout } from '../../../actions/auth/authAction'

// Toast
import { ToastContainer } from 'react-toastify';
import { logOutSuccess } from '../../../toaster';


const Navbar = () =>{
    // Set initial value for user details in case of slow network when fetching
    const [ user_first_name, setUser_First_name ] = useState('user_first_name')
    const [ user_last_name, setUser_Last_name ] = useState('user_last_name')
    const [ user_Image, setUser_image ] = useState('user_image')
    const data = {
        first_name: user_first_name,
        last_name: user_last_name,
        avatar: user_Image
    }
    // Store data === userDummy-data inside localStorage
    localStorage.setItem('currentUser', JSON.stringify(data))

    const dispatch = useDispatch();
    
    useEffect(() => {
        const getUser = async()=>{
            const { data } = await axios.get('https://reqres.in/api/users/1');
            localStorage.setItem('currentUser', JSON.stringify(data))
            const { data: {first_name, last_name, avatar} } = JSON.parse(localStorage.getItem('currentUser'));
            setUser_First_name(first_name)
            setUser_Last_name(last_name)
            setUser_image(avatar)
        }
        getUser()
    }, [])
    
    const logOut = () =>{
        logOutSuccess()
        setTimeout(() => {
            dispatch(logout());
        }, 2000);
    }
    
    return(
        <>
            <ToastContainer />
            <style>
                {
                    `
                        .Toastify__toast--warning{
                            background: rgb(255,112,150);
                            color: #FFFFFF;
                        }
                    `
                }
            </style>
            <header className="header">
                <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow">
                    <i className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead">
                        <i className="fas fa-align-left"></i>
                    </i>
                    <Link to="/dashboard/profile" className="navbar-brand font-weight-bold text-uppercase text-base pace-primary-color dashboard-lead companyDisplay">
                        { user_first_name } { user_last_name }
                    </Link>
                    <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
                        <TimerContainer />
                        <li className="nav-item dropdown mr-3 ml-4">
                            <a id="notifications" href="." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle text-gray-400 px-1">
                                <i className="fa fa-bell pace-primary-color"></i>
                                <span className="notification-icon pace-bg-accent"></span>
                            </a>
                            <div aria-labelledby="notifications" className="dropdown-menu">
                                <a href="/" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm pace-bg-accent text-white">
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                        <div className="text ml-2">
                                            <p className="mb-0">Lunch by 2pm</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm bg-green text-white">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="text ml-2">
                                            <p className="mb-0">Delivery in 2 days</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm bg-blue text-white">
                                            <i className="fas fa-upload"></i>
                                        </div>
                                        <div className="text ml-2">
                                            <p className="mb-0">1 new event</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <div className="icon icon-sm pace-bg-accent text-white">
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                        <div className="text ml-2">
                                            <p className="mb-0">2 new tasks</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="/" className="dropdown-item text-center">
                                    <small className="font-weight-bold headings-font-family text-uppercase">
                                        View all notifications
                                    </small>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <a id="userInfo" href="." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">
                                <img src={user_Image} alt={user_first_name} style={{maxWidth:"2.5rem"}} className="img-fluid rounded-circle shadow" /></a>
                            <div aria-labelledby="userInfo" className="dropdown-menu">
                                <a href="/" className="dropdown-item">
                                    <strong className="d-block text-uppercase headings-font-family companyDisplay">
                                        { user_first_name } { user_last_name }
                                    </strong>
                                    <small id="role_display">Web Developer</small>
                                </a>
                                <div className="dropdown-divider"></div>
                                <Link to="/dashboard/profile" className="dropdown-item">Profile</Link>
                                <a href="/" className="dropdown-item">Settings</a>
                                <div className="dropdown-divider"></div><span className="dropdown-item" style={{cursor: 'pointer'}} onClick={logOut}>Logout</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;