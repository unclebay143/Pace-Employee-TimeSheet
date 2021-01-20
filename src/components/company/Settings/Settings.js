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
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    {/* Pricing Card */}
                    <div className="pricing-card">
                    <div className="card shadow-sm border-light text-center mt-1">
                        {/* Header */}
                        <header className="card-header bg-white p-3">
                        <h2 className="h5 text-primary mb-4">Free</h2>
                        <span className="d-block">
                            <span className="display-4 text-dark font-weight-bold">
                            <span className="align-top font-medium">#</span>0
                            </span>
                            <span className="d-block text-light font-small">/ month</span>
                        </span>
                        </header>
                        {/* End Header */}
                        {/* Content */}
                        <div className="card-body">
                        <ul className="list-group mb-4">
                            <li className="list-group-item"><strong></strong> Timer Reminder</li>
                            <li className="list-group-item">Timer Reminder</li>
                            <li className="list-group-item">Workspace for 3 staff</li>
                            <li className="list-group-item">Limited Todo and eSchedule</li>
                        </ul>
                        <button type="button" className="btn btn-primary btn-block animate-up-1" tabIndex={0}>Start
                            Free</button>
                        </div>
                        {/* End Content */}
                    </div>
                    </div>
                    {/* End of Pricing Card */}
                </div>
                <div className="col-md-6 col-lg-4">
                    {/* Pricing Card */}
                    <div className="pricing-card">
                    <div className="card shadow-sm border-light text-center mt-1">
                        {/* Header */}
                        <header className="card-header bg-white p-3">
                        <h2 className="h5 text-secondary mb-4">Basic</h2>
                        <span className="d-block">
                            <span className="display-4 text-dark font-weight-bold">
                            <span className="align-top font-medium">#</span>12, 000
                            </span>
                            <span className="d-block text-light font-small">/ month</span>
                        </span>
                        </header>
                        {/* End Header */}
                        {/* Content */}
                        <div className="card-body">
                        <ul className="list-group mb-4">
                            <li className="list-group-item"><strong></strong> Timer Reminder</li>
                            <li className="list-group-item">Workspace for 7 staffs</li>
                            <li className="list-group-item">Unlimited Todo</li>
                            <li className="list-group-item">Task Report</li>
                        </ul>
                        <button type="button" className="btn btn-secondary btn-block animate-up-1" tabIndex={0}>Start
                            Basic</button>
                        </div>
                        {/* End Content */}
                    </div>
                    </div>
                    {/* End of Pricing Card */}
                    
                </div>
       
       
                <div className="col-md-6 col-lg-4">
                    {/* Pricing Card */}
                    <div className="pricing-card">
                    <div className="card shadow-sm border-light text-center mt-1">
                        {/* Header */}
                        <header className="card-header bg-white p-3">
                        <h2 className="h5 text-primary mb-4">Premium</h2>
                        <span className="d-block">
                            <span className="display-4 text-dark font-weight-bold">
                            <span className="align-top font-medium">#</span>32, 000
                            </span>
                            <span className="d-block text-light font-small">/ month</span>
                        </span>
                        </header>
                        {/* End Header */}
                        {/* Content */}
                        <div className="card-body">
                        <ul className="list-group mb-4">
                            <li className="list-group-item"><strong></strong> Screenshot (Beta)</li>
                            <li className="list-group-item">Unlimited staffs Workspace</li>
                            <li className="list-group-item">Unlimited Reports Access </li>
                            <li className="list-group-item">Unlimited Self Management Tools</li>
                        </ul>
                        <button type="button" className="btn btn-primary btn-block animate-up-1" tabIndex={0}>Upgrade Premium
                        </button>
                        </div>
                        {/* End Content */}
                    </div>
                    </div>
                    {/* End of Pricing Card */}
                </div>
        </div>
</div>

        </>  
    )
}


export default Settings;