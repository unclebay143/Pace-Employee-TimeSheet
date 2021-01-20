import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { initializeBasicPayment, initializePremiumPayment, initiatePayment } from '../../../actions/company/payment/planPurchaseAction'

const Settings = () =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const basicPlan = 122;
    const premiumPlan = 133;
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
                            <span className="d-block text-dark font-small">/ month</span>
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
                        <button type="button" className="btn btn-primary btn-block animate-up-1" tabIndex={0} disabled>
                            Current Plan
                        </button>
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
                            <span className="d-block text-dark font-small">/ month</span>
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
                        <button 
                            type="button" 
                            className="btn btn-secondary btn-block animate-up-1" 
                            tabIndex={0}
                            onClick={(()=>{
                                dispatch(initializeBasicPayment(basicPlan))
                                .then((response) => {
                                    console.log(response)
                                    const parsedResponse = JSON.parse(response.data);
                                    const redirectLink = parsedResponse.data.link
                                    console.log(parsedResponse)
                                    console.log(redirectLink)
                                //    window.location.href(redirectLink)
                                Swal.fire({
                                    title: '<strong>Payment <u>Initialized</u></strong>',
                                    icon: 'question',
                                    html:
                                      'Do you wish to continue to <b> this Payment ?</b>, ' +
                                      `<a href=${redirectLink}>links</a> ` +
                                      '',
                                    showCloseButton: true,
                                    showCancelButton: true,
                                    focusConfirm: false,
                                    confirmButtonText:
                                      '<i class="fa fa-thumbs-up"></i> Great!',
                                    confirmButtonAriaLabel: 'Thumbs up, great!',
                                    cancelButtonText:
                                      '<i class="fa fa-thumbs-down"></i>',
                                    cancelButtonAriaLabel: 'Thumbs down'
                                  })
                                })
                            })}

                        >Start
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
                            <span className="d-block text-dark font-small">/ month</span>
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
                        <button 
                            type="button" 
                            className="btn btn-primary btn-block animate-up-1" 
                            tabIndex={0}
                            onClick={(()=>dispatch(initializePremiumPayment(premiumPlan)))}
                        >
                            Upgrade Premium
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