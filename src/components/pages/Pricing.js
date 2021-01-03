import { Link } from "react-router-dom";
import Button from "../layouts/Button";

//import pricing stylesheet
import './pages-styles/pricing.css';
//import react fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import fontawesome icon
import { faSitemap, faSnowflake, faBookReader } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
    return(
        <>
            <div class="mb-1" id="pricing">&nbsp;</div>
            <div className="container pricing mb-5 pricing-tags ">
                <div className="text-center">
                    <h4 className="w-2 mt-5 mg-lg-0 pace-accent-color p-2"  data-aos="zoom-out-down">Pricing</h4>
                    <h2 data-aos="fade-up-left">Optimized for businesses of all sizes.</h2>
                    <p className="pace-primary-color" data-aos="fade-up-right">Flexible monthly pricing for projects and teams of all sizes. Get billed in your local currency..</p>
                </div>
                <div className="row mt-3 mt-4 p-lg-2 d-flex justify-content-center">
                    <div className="p-2 border" data-aos="fade-down">
                        <h2 className="mb-3 pace-accent-color text-center">
                        <FontAwesomeIcon icon={faSitemap} />&nbsp;Premium
                        </h2>
                        <h5 className="mb-4 text-center">#32, 000 / month</h5>
                        <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-accent pricing-btn" />
                        </Link>
                        <h4 className="mt-3 text-center">What's included</h4>
                        <ul className="px-4 text-center">
                            <li>Timer Reminder</li>
                            <li>Unlimited staff</li>
                            <li>Unlimited Todo List</li>
                            <li>Request</li>
                        </ul>
                    </div>
                    <div>&nbsp;</div>
                    <div className="p-2 border mt-md-0 mt-3" data-aos="fade-down">
                        <h2 className="mb-3 pace-accent-color text-center">
                        <FontAwesomeIcon icon={faSnowflake} />&nbsp;Basic
                        </h2>
                        <h5 className="mb-4 text-center">#12, 000 / month</h5>
                        <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-accent pricing-btn" />
                        </Link>
                        <h4 className="mt-3 text-center">What's included</h4>
                        <ul className="px-4 text-center">
                            <li>Timer Reminder</li>
                            <li>Workspace for 7 staff</li>
                            <li>Todo List</li>
                            <li>Request</li>
                        </ul>
                    </div>
                    <div>&nbsp;</div>
                    <div className="p-2 bg-dark mt-md-0 mt-3" data-aos="fade-down">
                        <h2 className="mb-3 pace-accent-color text-center">
                        <FontAwesomeIcon icon={faBookReader} />&nbsp;Free
                        </h2>
                        <h5 className="mb-4  text-white text-center">#0 / month</h5>
                        <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-primary pricing-btn" />
                        </Link>
                        <h4 className="mt-3 text-center">What's included</h4>
                        <ul className="px-4 text-center">
                            <li>Timer Reminder</li>
                            <li>Workspace for 3 staff</li>
                            <li>Limited Todo List</li>
                            <li>Limited Request</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Pricing;