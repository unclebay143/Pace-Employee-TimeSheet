
// React
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Component
import TimerContainer from '../dashboard/timer/Timer';

// End session
import { logout } from '../../../actions/auth/authAction'

// Toast
import { ToastContainer } from 'react-toastify';
import { accessToken, currentUserFromLocalStorage, currentUserStaffID } from '../../../services/auth-header';
import { syncCurrentUser } from '../../../actions/user/userAction';


const Navbar = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const { currentUser, isLoggedIn } = useSelector(state => state.authenticationState)
    const [fullName, setFullName] = useState('') // the fullName is empty before the data are fetch, to prevent seeing undefined
    const [staffID, setStaffID] = useState('')
    const [roleID, setRoleID] = useState('')

    useEffect(() => {
        if(currentUser){
            const { firstName, lastName, staffID, roleID } = currentUser || '';
            setFullName(` ${ firstName === undefined ? '' : firstName } ${ lastName === undefined ? '' : lastName} `)
            setStaffID(staffID)
            setRoleID(roleID)
            
        }
    },[currentUser])
    
    useEffect(() => {
        dispatch(syncCurrentUser(staffID))    
    }, [dispatch]);

    useEffect(() => {
        // console.log('here')
        // // Check if there is a user in the local storage, don't use redux state , it get cleared before synchronizing
        // if(currentUserFromLocalStorage.length > 0){
        //     console.log('here2')
        //     // sync the current user with the server, redux, and localstorage
        //     console.log('local', currentUserFromLocalStorage)
        // }else{
        //     // alert('me')
        // }
    }, [dispatch])
        

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
                    <Link to={`/dashboard/profile/${staffID}`} className="navbar-brand font-weight-bold text-uppercase text-base pace-primary-color dashboard-lead companyDisplay">
                        { fullName }
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
                        <li className="nav-item dropdown ml-auto" h='7' data-tut='reactour__profileImage'>
                            <a id="userInfo" href="." data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">
                                {/* <img src={user_Image} alt={user_first_name} style={{maxWidth:"2.5rem"}} className="img-fluid rounded-circle shadow" /> */}
                                <img src='https://github.com/unclebay143.png' alt='unclebay' style={{maxWidth:"2.5rem"}} className="img-fluid rounded-circle shadow" />
                            </a>
                            <div aria-labelledby="userInfo" className="dropdown-menu">
                                <a href="/" className="dropdown-item">
                                    <strong className="d-block text-uppercase headings-font-family companyDisplay">
                                        { fullName }
                                    </strong>
                                    <small id="role_display">Web Developer</small>
                                </a>
                                <div className="dropdown-divider"></div>
                                <Link to={`/dashboard/profile/${staffID}`} className="dropdown-item">Profile</Link>
                                {
                                    roleID !== 5 ? '' : (
                                        <a href="/" className="dropdown-item">Settings</a>
                                    )
                                }
                                <div className="dropdown-divider"></div><span className="dropdown-item" style={{cursor: 'pointer'}} onClick={(()=>dispatch(logout()))}>Logout</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;