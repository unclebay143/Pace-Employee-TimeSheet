// React
import { Link } from "react-router-dom";

// Layout
import Button from "../layouts/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faSnowflake, faBookReader } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
    return(
        <>
            <div className="mb-1" id="pricing">&nbsp;</div>
            <div className="container pricing mb-5 pricing-tags ">
                <div className="text-center">
                    <h4 className="w-2 mt-5 mg-lg-0 pace-accent-color p-2"  data-aos="zoom-out-down">Pricing</h4>
                    <h2 data-aos="fade-up-left">Optimized for businesses of all sizes.</h2>
                    <p className="pace-primary-color" data-aos="fade-up-right">Flexible monthly pricing for projects and teams of all sizes. Get billed in your local currency..</p>
                </div>
                <div className="row mt-3 mt-4 p-lg-2 d-flex justify-content-center">
                    <div className="p-2 border" data-aos="fade-down">
                        <h2 className="mb-3 pace-accent-color text-center">
                        <FontAwesomeIcon icon={faSitemap} />&nbsp;Premium...
                        </h2>
                        <h5 className="mb-4 text-center">#32, 000 / month</h5>
                        <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-accent pricing-btn" />
                        </Link>
                        <h4 className="mt-3 text-center">What's included</h4>
                        <ul className="px-4 text-center list-unstyled">
                            <li>Timer Reminder</li>
                            <li>Unlimited staff</li>
                            <li>Unlimited Todo List</li>
                            <li>Request</li>
                        </ul>
                    </div>
                    <div>&nbsp;</div>
                    <div className="p-2 border mt-md-0 mt-3" data-aos="fade-down">
                        <h2 className="mb-3 pace-accent-color text-center">
                        <FontAwesomeIcon icon={faSnowflake} />&nbsp;Basic...
                        </h2>
                        <h5 className="mb-4 text-center">#12, 000 / month</h5>
                        <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-accent pricing-btn" />
                        </Link>
                        <h4 className="mt-3 text-center">What's included</h4>
                        <ul className="px-4 text-center list-unstyled">
                            <li>Timer Reminder</li>
                            <li>Workspace for 7 staff</li>
                            <li>Todo List</li>
                            <li>Request</li>
                        </ul>
                    </div>
                    <div>&nbsp;</div>
                    <div className="p-2 bg-dark mt-md-0 mt-3" data-aos="fade-down">
                        <h2 className="mb-3 pace-accent-color text-center">
                        <FontAwesomeIcon icon={faBookReader} />&nbsp;Free....
                        </h2>
                        <h5 className="mb-4  text-white text-center">#0 / month</h5>
                        <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-primary pricing-btn" />
                        </Link>
                        <h4 className="mt-3 text-center">What's included</h4>
                        <ul className="px-4 text-center list-unstyled">
                            <li>Timer Reminder</li>
                            <li>Workspace for 3 staff</li>
                            <li>Limited Todo List</li>
                            <li>Limited Request</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*--------------------------- FAQ Section --------------------------------------------------------*/}
            {/* <div className="container mb-5">
            <h3 className="text-center text-bold mt-3" style={{color:'#FF6584'}}>Frequently Asked Questions</h3>
        <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="p-2 mt-3">
                <div className="card mb-3 mt-3 ml-3" style={{width:'325px',height:'200px'}}>
                    <div className="card-header p-3" style={{background:'rgb(51, 94, 234)'}}>
                        <h6 className="text-white text-center">Can we access pacetimesheet for free?</h6>
                    </div>
                    <div className="card-body p-2 text-justify">
                        <h6 style={{fontSize:'16px',fontWeight:'normal'}}>
                            yes! you will have a chance to try pacetimesheet for free. No credit card, contract, or signature is required. But you will be restricted to some features like a workspace for staff, to-do list, and request.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-3">
                <div className="card mb-3 mt-3 ml-3" style={{width:'325px',height:'200px'}}>
                    <div className="card-header p-3" style={{background:'rgb(51, 94, 234)'}}>
                    <h6 className="text-white text-center">What forms of payment did you accept?</h6>
                    </div>
                    <div className="card-body p-2 text-justify">
                        <h6 style={{fontSize:'16px',fontWeight:'normal'}}>
                        we accept all major credit cards - Visa, MasterCard, Paypal. so you can choose the one that better works for you. Also, for every charge you will get full PDF invoice.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-3">
                <div className="card mb-3 mt-3 ml-3" style={{width:'325px',height:'200px'}}>
                    <div className="card-header p-3" style={{background:'rgb(51, 94, 234)'}}>
                    <h6 className="text-white text-center">Can we run as many projects as we like?</h6>
                    </div>
                    <div className="card-body p-2 text-justify">
                        <h6 style={{fontSize:'16px',fontWeight:'normal'}}>
                        Yes you can run as many project as you want as we don't have any limitation. and you will never be charged extra for more projects in  Pacetimesheet.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-3">
                <div className="card mb-3 mt-3 ml-3" style={{width:'325px',height:'200px'}}>
                    <div className="card-header p-3" style={{background:'rgb(51, 94, 234)'}}>
                    <h6 className="text-white text-center">Does pacetimesheet automatically stop after several minutes of user inactivity?</h6>
                    </div>
                    <div className="card-body p-2 text-justify">
                        <h6 style={{fontSize:'16px',fontWeight:'normal'}}>
                        Yes, pacetimesheet automatically stops tracking time when your employees don't perform any activity for 5minutes.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-3">
                <div className="card mb-3 mt-3 ml-3" style={{width:'325px',height:'200px'}}>
                    <div className="card-header p-3" style={{background:'rgb(51, 94, 234)'}}>
                    <h6 className="text-white text-center">Can we cancel at anytime?</h6>
                    </div>
                    <div className="card-body p-2 text-justify">
                        <h6 style={{fontSize:'16px',fontWeight:'normal'}}>
                        Yes you can cancel subscription at anytime. Use how long you want and cancel when you want.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-3">
                <div className="card mb-3 mt-3 ml-3" style={{width:'325px',height:'200px'}}>
                    <div className="card-header p-3" style={{background:'rgb(51, 94, 234)'}}>
                    <h6 className="text-white text-center">Can we use this for project management?</h6>
                    </div>
                    <div className="card-body p-2 text-justify">
                        <h6 style={{fontSize:'16px',fontWeight:'normal'}}>
                        Yes our platform has built in feature where you can track your time on per meeting or project basis. This feature is very useful if you want to bill your client on the basis of hours worked on a task.
                        </h6>
                    </div>
                </div>
            </div>
        </div> */}
        {/* </div> */}
       <div className="container py-3 mb-5">
           <h3 className='text-center mb-4'><span className="pace-accent-color">Frequestly Asked</span> <span className="pace-primary-color">Questions</span></h3>
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="accordion" id="paceFaq">
                        <div className="card">
                            <div className="card-header p-2" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Q: How does this work?
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#paceFaq">
                                <div className="card-body">
                                    <b>Answer:</b> Register your a workspace for your company or Team, invite or employ your staffs, assign tasks to them and monitor their tasks progress and time.
                                </div>
                            </div>
                        </div>
                        
                        <div className="card">
                        <div className="card-header p-2" id="headingTwo">
                            <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Q: How do I start?
                            </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#paceFaq">
                            <div className="card-body">
                                Very easy! you have a chance to try pacetimesheet for free. No credit card, contract, or signature is required. But you will be restricted to some features on the free option.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header p-2" id="headingThree">
                            <h5 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Q. What forms of payment did you accept?
                            </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#paceFaq">
                            <div className="card-body">
                                we accept all major payment credit cards - Visa, MasterCard, Paypal. so you can choose the one that better works for you. Also, for every charge you will get full PDF invoice on your mail.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                                <div className="card-header p-2" id="headingSeven">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            Q. How secure is your platform?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#paceFaq">
                                    <div className="card-body">
                                        Pace timesheet software is built with security in mind, we are using one of the world best technologies for our frontend and backend services, your ideas are
                                    </div>
                                </div>
                            </div>
                        <div className="card">
                            <div className="card-header p-2" id="headingFour">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        Q: How many team or department can I have in my workspace?
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#paceFaq">
                                <div className="card-body">
                                    <b>Answer:</b> The package subscription determmines the number of features you will have access to, we recommend trying our premium package.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header p-2" id="headingFive">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                        Q: Can I cancle my subscription?
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseFive" className="collapse show" aria-labelledby="headingFive" data-parent="#paceFaq">
                                <div className="card-body">
                                    <b>Answer:</b> Yes, you can cancel your subscription on your dashboard, this can only be done by the admin of the workspace.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header p-2" id="headingSix">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                        Q: Do I need to use any third party with Pace timesheet?
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseSix" className="collapse show" aria-labelledby="headingSix" data-parent="#paceFaq">
                                <div className="card-body">
                                    <b>Answer:</b> we have almost everything your team needs to be more productive, self management is also one key we keep in mind.
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


export default Pricing;