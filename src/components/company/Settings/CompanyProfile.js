// React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';


// Components
import Button from '../../layouts/Button';
import Loader from '../../loader/Loader';

// Auth Header
import { authHeader, currentUserCompanyID } from '../../../services/auth-header';

//  Actions
import { FETCH_COMPANY_PROFILE_API } from '../../../services/root-endpoints';

// Helper function
import { formatDate } from '../../../_helper/dateFormatter';



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
            .then((response)=>setCompanyProfile(response.data.data[0]))
            .catch((error)=>console.log(error))
        }
        fetchCompanyProfile()
    }, [])
    console.log(companyProfile);
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
                                    <ProfileRow title="Company Name" label= {companyProfile.companyName} />
                                    <ProfileRow title="Email" label={companyProfile.email} />
                                    <ProfileRow title="Currency" label={companyProfile.currency}/>
                                    <ProfileRow title="Company Type" label={companyProfile.companyType} />
                                    <ProfileRow title="Company Adjective" label={companyProfile.companyAdjective} />
                                    <ProfileRow title="Created Date" label={formatDate(companyProfile.dateCreated)} />
                                    <Link to={`/dashboard/company/profile/update/${companyProfile.companyID}`}>
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
