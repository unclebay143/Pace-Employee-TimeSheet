import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../layouts/Button';

const Settings = () =>{
    return(
        <>

            <div className="container py-5">
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
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div  className="d-flex flex-md-row align-items-center justify-content-center flex-column">
                                    {/* ADD NEW DEPARTMENT BUTTON */}
                                    <div className="p-3 col-9 col-md-4">
                                        <Link to="/dashboard/company/settings/departments">
                                            <Button to="/" 
                                                className="btn btn-sm btn-primary"
                                                label="Add New Department"
                                                />
                                        </Link>
                                    </div>

                                    {/* VIEW COMPANY PROFILE BUTTON */}
                                    <div className="p-3 col-9 col-md-4">
                                        <Link to="/dashboard/company/profile/1">
                                            <Button to="/" 
                                                className="btn btn-sm btn-theme"
                                                label="View Company Profile"
                                                />
                                        </Link>
                                    </div>
                                    {/* UPDATE COMPANY PROFILE BUTTON */}
                                    <div className="p-3 col-10 col-md-4 ml-3">
                                        <Link to="/dashboard/company/profile/update/1">
                                            <Button to="/" 
                                                className="btn btn-sm pace-btn-accent"
                                                label="Update Company Profile"
                                                />
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>    
    )
}


export default Settings;