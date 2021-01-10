// React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

// Actions
import { syncCurrentUser } from '../../actions/user/userAction';

// Service helper
import { authHeader } from '../../services/auth-header';
import { USER_PROFILE_URL } from '../../services/root-endpoints';

//Layout
import Button from '../layouts/Button';
import unclebay from '../pages/pages-images/ayodele_samuel_adebayo.jpg';

// Toaster
import { sessionExpired } from '../../toaster'


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
    const params = useParams();
    const [ userProfile, setUserProfile ] = useState({});
    const [ staffID, setStaffID ] = useState('');

    useEffect(() => {
        // Get staffID from the urls 
        const staffID = params.id;

        // Set the staffID state to be reusable in the edit profile button path
        setStaffID(staffID);

        // Function to get the user profile from the server (using local storage before but not synchronizing with the server)
        const fetchCurrentUserProfile = async() =>{

            // Get user profile from the server
            const response = await axios.get(USER_PROFILE_URL + staffID, { headers: authHeader })
            // Get current user from local storage
            const checkUserInLocalStorage = JSON.parse(localStorage.getItem('currentUser'));
            

            // Check if the response data is an object (error occurs where data is Token expired)
            if(response.data === 'invalid token or token expired'){
                syncCurrentUser(checkUserInLocalStorage.staffID)
            }else{
                //if there is a user in the local storage
                if(checkUserInLocalStorage && response){
                    
                        // Synchronize the local storage with the server
                // localStorage.setItem('currentUser', JSON.stringify(response))
            
                // synchronize with the redux store
                syncCurrentUser(params.id)
                setUserProfile(response)
            }
            
            if(!response || response === undefined){
                response = {}
                setUserProfile(checkUserInLocalStorage)
            }
            
            
            // Destructure the user information from the response.data.data[0] -response structure
            const {
                firstName,
                lastName,
                phoneNumber,
                email,
                address,
                userName,
            
            } = response.data.data[0]
            
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
        }
            
        fetchCurrentUserProfile()
    }, [params.id])

    if(!userProfile){
        return(
            <div className="d-flex justify-content-center align-items-center mt-2" style={{height:'100vh', background: '#cccccc'}}>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" style={{fontSize: "23px"}}></i>
                <span>Loading... Please wait</span>
            </div>
        )
    }
    
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
                                            <p className="text-secondary mb-1">Frontend Engineer</p>
                                            <p className="text-muted font-size-sm">{userProfile.address}</p>
                                            <Link to={`/dashboard/profile/update/${staffID}`}>
                                                <Button className="btn btn-primary mr-2" label="Edit Profile"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <ProfileRow title="Full Name" label={ ` ${userProfile.firstName} ${userProfile.lastName}` } />
                                    <ProfileRow title="Email" label={userProfile.email} />
                                    <ProfileRow title="Department" label="Web development" />
                                    <ProfileRow title="Role" label="Frontend Engineer" />
                                    <ProfileRow title="Salary" label={`# ${userProfile.billRateCharge}`} />
                                    <ProfileRow title="Phone" label={userProfile.phoneNumber} />
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
