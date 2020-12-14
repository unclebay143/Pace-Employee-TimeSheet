import { Link } from "react-router-dom";
import Button from "../layouts/Button";

const Pricing = () => {
    return(
        <>
            <div class="mb-1" id="pricing">&nbsp;</div>
            <div className="container pricing mb-5 pricing-tags">
                <div className="text-center">
                    <h4 className="w-2 mt-5 mg-lg-0 pace-accent-color p-2"  data-aos="zoom-out-down">Pricing</h4>
                    <h2 data-aos="fade-up-left">Optimized for businesses of all sizes.</h2>
                    <p className="pace-primary-color" data-aos="fade-up-right">Flexible monthly pricing for projects and teams of all sizes. Get billed in your local currency..</p>
                </div>
                <div className="row mt-5 p-lg-2">
                    <div className="p-3" data-aos="fade-up">
                        <h2 className="mb-3">Free</h2>
                        <h5 className="mb-4">#0 / month</h5>
                        <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-primary pricing-btn" />
                        </Link>
                        <h4 className="mt-3">What's included</h4>
                        <ul className="px-4">
                            <li>Timer Reminder</li>
                            <li>Workspace for 3 staff</li>
                            <li>Limited Todo List</li>
                            <li>Limited Request</li>
                        </ul>
                    </div>
                    <div className="row p-3 ml-lg-2 border bg-dark">
                        <div className="mr-2" data-aos="fade-up-left">
                            <h2 className="mb-3 pace-accent-color">Basic</h2>
                            <h5 className="mb-4 text-white">#12, 000 / month</h5>
                            <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-accent pricing-btn" />
                            </Link>
                            <h4 className="mt-3">What's included</h4>
                            <ul className="px-4">
                                <li>Timer Reminder</li>
                                <li>Workspace for 7 staff</li>
                                <li>Todo List</li>
                                <li>Request</li>
                            </ul>
                        </div>
                        <div className="" data-aos="fade-up-right">
                            <h2 className="mb-3 pace-accent-color">Premium</h2>
                            <h5 className="mb-4 text-white">#32, 000 / month</h5>
                            <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-accent pricing-btn" />
                            </Link>
                            <h4 className="mt-3">What's included</h4>
                            <ul className="px-4">
                                <li>Timer Reminder</li>
                                <li>Unlimited staff</li>
                                <li>Unlimited Todo List</li>
                                <li>Request</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Pricing;