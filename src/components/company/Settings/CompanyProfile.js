// React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../../layouts/Button';
import unclebay from '../../pages/pages-images/ayodele_samuel_adebayo.jpg';



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
    const [ employeeProfile, setEmployeeProfile ] = useState([])
    
    useEffect(() => {
        const fetchEmployeeProfile = async() =>{
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            console.log(data)
            setEmployeeProfile(data)
        }

        fetchEmployeeProfile()
        
    //     const getCurrentUser = JSON.parse(localStorage.getItem('token'));
    //     if(getCurrentUser){
    //         const currentUser = getCurrentemployeeProfile.response[0];
    //         setUser(currentUser)
    //         syncCurrentUser(params.id)
    //     }

    //     return(()=>{
    //         const currentUser = []
    //     })
    }, [])
    
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
                    <nav aria-label="breadcrumb" className="main-breadcrumb mt-2 ml-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to='/dashboard/company/settings' className="text-grey">
                                        Settings
                                </Link>
                            </li>
                        <li className="breadcrumb-item active" aria-current="page">Company Profile</li>
                        </ol>
                    </nav>
                    
                    {/* /Breadcrumb */}
                    <div className="row gutters-sm mt-3">
                        <div className="col-md-12 ml-2">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <ProfileRow title="Company Name" label={ ` ${employeeProfile.name} ${employeeProfile.username}` } />
                                    <ProfileRow title="Company Type" label="IT" />
                                    <ProfileRow title="Company Adjective" label={employeeProfile.phone} />
                                    <ProfileRow title="Currency" label="Naira(#)"/>
                                    <ProfileRow title="Email" label={employeeProfile.email} />
                                    <Link to={`/dashboard/company/profile/update/${1}`}>
                                        <Button className="btn btn-primary mr-2" label="Edit"/>
                                    </Link>
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
