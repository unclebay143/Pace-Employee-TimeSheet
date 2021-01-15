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
        </>
    )
}


export default Pricing;