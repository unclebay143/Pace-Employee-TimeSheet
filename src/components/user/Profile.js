// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

//Layout
import Button from '../layouts/Button';
import unclebay from '../pages/pages-images/ayodele_samuel_adebayo.jpg';

// Toaster
import Loader from '../loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserFromLocalStorage } from '../../services/auth-header';


const ProfileRow = (props) => {
    const { title, label } = props
    return(
        <>
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0">{title}</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    {label}
                </div>
            </div>
            <hr />
        </>
    )
}



const Profile = () =>{
    const { currentUser } = useSelector(state => state.authenticationState)
    const params = useParams();
    const [ userProfile, setUserProfile ] = useState('');
    const [ staffID, setStaffID ] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {

        // Get staffID from the urls 
        const staffID = params.id;

        // Set the staffID state to be reusable in the edit profile button path
        setStaffID(staffID);
        if(currentUser){

            // Destructure the user information from the response.data.data[0] -response structure
            const {
                firstName,
                lastName,
                phoneNumber,
                email,
                address,
                userName,
                
            } = currentUser;
            
            // Set the destructure user information into the profile state (ES6 syntax)
            setUserProfile({
                firstName,
                    lastName,
                    phoneNumber,
                    email,
                    address,
                    userName,
                })
            }   
            
        }, [currentUser, params.id])

    // if(userProfile.firstName === undefined){
    //     return(
    //         <>
    //          {/* <div className="d-flex justify-content-center align-items-center mt-2" style={{height:'100vh', background: '#cccccc'}}>
    //                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" style={{fontSize: "23px"}}></i> 
    //                <span>Loading... Please wait</span> 
    //          </div> */}
    //             <Loader />
    //         </>
    //     )
    // }
    return (
        <>
            <div className="container">
                <style>
                    {
                        `
                        .dashboard-body-wrapper, .page-holder{
                            background: #e9ecef;
                        }
                        `
                    }
                </style>
                <div className="main-body">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Profile
                        </li>
                        </ol>
                    </nav>
                    
                    {/* /Breadcrumb */}
                    <div className="row gutters-sm mt-4">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} /> */}
                                        <img src={unclebay} alt="Admin" className="rounded-circle" width={150} />
                                        <div className="mt-3">
                                            <h4 className="text-capitalize">{userProfile.firstName} {userProfile.lastName}</h4>
                                            <h4>{userProfile.id} </h4>
                                            <p className="text-secondary mb-1">{ userProfile.staffRole === undefined || null ? userProfile.userName : userProfile.staffRole }</p>
                                            <p className="text-muted font-size-sm">{userProfile.address}</p>
                                            <Link to={`/dashboard/profile/update/${staffID}`}>
                                                <Button className="btn btn-primary mr-2 m-2 btn-sm" label="Edit Profile"/>
                                            </Link>
                                            <Link to={`/dashboard/profile/changepassword/${staffID}`}>
                                                <Button className="btn btn-warning text-white m-2  mt-2 btn-sm" label="Change Password"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <ProfileRow title="Full Name" label={ ` ${userProfile.firstName === undefined ? '' : userProfile.firstName} ${userProfile.lastName === undefined ? '' : userProfile.lastName}` } />
                                    <ProfileRow title="Email" label={userProfile.email} />
                                    <ProfileRow title="Department" label="Web development" />
                                    <ProfileRow title="Role" label={ userProfile.staffRole === undefined ? currentUserFromLocalStorage.staffRole : userProfile.staffRole} />
                                    <ProfileRow title="Salary" label={`# ${userProfile.billRateCharge === undefined || null ? '' : userProfile.billRateCharge}`} />
                                    <ProfileRow title="Phone" label={userProfile.phoneNumber} />
                                    <ProfileRow title="Work Hours" label={ userProfile.expectedWorkHours === undefined ? currentUserFromLocalStorage.expectedWorkHours : userProfile.expectedWorkHours} />
                                    <ProfileRow title="Address" label={userProfile.address} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
