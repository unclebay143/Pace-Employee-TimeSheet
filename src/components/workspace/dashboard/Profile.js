import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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



export default class Profile extends Component {
    render() {
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
                            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                            </ol>
                        </nav>
                        
                        {/* /Breadcrumb */}
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} /> */}
                                            <img src={unclebay} alt="Admin" className="rounded-circle" width={150} />
                                            <div className="mt-3">
                                                <h4>Ayodele S. Adebayo</h4>
                                                <p className="text-secondary mb-1">Frontend Engineer</p>
                                                <p className="text-muted font-size-sm">Forestry Area, Bako, Gwagwalada, Abuja</p>
                                               <Link to="/dashboard/edit"><Button className="btn btn-primary mr-2" label="Edit"/></Link>
                                                <Button className="btn btn-danger" label="Delete" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <ProfileRow title="Full Name" label="Ayodele Samuel Adebayo" />
                                        <ProfileRow title="Email" label="unclebigbay@gmail.com" />
                                        <ProfileRow title="Department" label="Web development" />
                                        <ProfileRow title="Role" label="Frontend Engineer" />
                                        <ProfileRow title="Salary" label="# 203, 900" />
                                        <ProfileRow title="Phone" label="080 8382 6262" />
                                        <ProfileRow title="Address" label="Forestry Area, Bako, Gwagwalada, Abuja" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

