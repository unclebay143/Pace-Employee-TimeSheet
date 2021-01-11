// React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { authHeader, currentUserCompanyID } from '../../../services/auth-header';
import { FETCH_COMPANY_PROFILE_API } from '../../../services/root-endpoints';
import Button from '../../layouts/Button';
import Loader from '../../loader/Loader';
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
    const params = useParams();
    const [companyProfile, setCompanyProfile] = useState({});
  
    useEffect(() => {
        const fetchCompanyProfile = async () =>{
            axios.get(FETCH_COMPANY_PROFILE_API + currentUserCompanyID, { headers: authHeader })
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error))
        }
        fetchCompanyProfile()
    }, [])
    if(companyProfile === undefined){
        return(
            <>
                <Loader />
            </>
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
                    <nav aria-label="breadcrumb" className="main-breadcrumb mt-2 ml-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to='/dashboard/company/settings' className="text-grey">
                                        Settings
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Company Profile
                            </li>
                        </ol>
                    </nav>
                    
                    {/* /Breadcrumb */}
                    <div className="row gutters-sm mt-3">
                        <div className="col-md-12 ml-2">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <ProfileRow title="Company Name" label={ ` ${companyProfile.name} ${companyProfile.username}` } />
                                    <ProfileRow title="Company Type" label="IT" />
                                    <ProfileRow title="Company Adjective" label={companyProfile.phone} />
                                    <ProfileRow title="Currency" label="Naira(#)"/>
                                    <ProfileRow title="Email" label={companyProfile.email} />
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
