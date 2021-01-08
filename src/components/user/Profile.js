// React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { syncCurrentUser } from '../../actions/user/userAction';
import Button from '../layouts/Button';
import unclebay from '../pages/pages-images/ayodele_samuel_adebayo.jpg';



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
    const params = useParams()
    const [ user, setUser ] = useState({})
    
    useEffect(() => {
        
        const getCurrentUser = JSON.parse(localStorage.getItem('token'));
        if(getCurrentUser){
            const currentUser = getCurrentUser.response[0];
            setUser(currentUser)
            syncCurrentUser(params.id)
        }

        return(()=>{
            const currentUser = []
        })
    }, [])
    
    return (
        <>
            <div className="container">
                <style jsx>
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
                        <li className="breadcrumb-item active" aria-current="page"></li>
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
                                            <h4 className="text-capitalize">{user.firstName} {user.lastName}</h4>
                                            <h4>{user.id} </h4>
                                            <p className="text-secondary mb-1">Frontend Engineer</p>
                                            <p className="text-muted font-size-sm">{user.address}</p>
                                            <Link to={`/dashboard/profile/update/${user.staffID}`}>
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
                                    <ProfileRow title="Full Name" label={ ` ${user.firstName} ${user.lastName}` } />
                                    <ProfileRow title="Email" label={user.email} />
                                    <ProfileRow title="Department" label="Web development" />
                                    <ProfileRow title="Role" label="Frontend Engineer" />
                                    <ProfileRow title="Salary" label={`# ${user.billRateCharge}`} />
                                    <ProfileRow title="Phone" label={user.phoneNumber} />
                                    <ProfileRow title="Address" label={user.address} />
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
