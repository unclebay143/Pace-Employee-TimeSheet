import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Pricing = () => {
    return(
        <>
            <div className="container">
                <Navbar />
            </div>
            <div className="container pricing mb-5">
                <div className="text-center">
                    <h4 className="w-2 mt-5 mg-lg-0 pace-accent-color">Pricing</h4>
                    <h2>Optimized for businesses of all sizes.</h2>
                    <p className="pace-primary-color">Flexible monthly pricing for projects and teams of all sizes. Get billed in your local currency..</p>
                </div>
                <div className="row mt-5">
                    <div className="ml-4 p-3">
                        <h2 className="mb-3">Free</h2>
                        <h5 className="mb-4">#0 / month</h5>
                        <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-primary pricing-btn" />
                        </Link>
                        <h4 className="mt-3">What's included</h4>
                        <ul className="p-3">
                            <li>Timer Reminder</li>
                            <li>Workspace for 3 staffs</li>
                            <li>Limited Todo List</li>
                            <li>Limited Request</li>
                        </ul>
                    </div>
                    <div className="row ml-4 p-3 border border-info">
                        <div className="mr-3">
                            <h2 className="mb-3">Basic</h2>
                            <h5 className="mb-4">#12, 000 / month</h5>
                            <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-accent pricing-btn" />
                            </Link>
                            <h4 className="mt-3">What's included</h4>
                            <ul className="p-3">
                                <li>Timer Reminder</li>
                                <li>Workspace for 7 staffs</li>
                                <li>Todo List</li>
                                <li>Request</li>
                            </ul>
                        </div>
                        <div className="">
                            <h2 className="mb-3">Premium</h2>
                            <h5 className="mb-4">#32, 000 / month</h5>
                            <Link to="/pricing">
                            <Button label="Get Started" className="btn pace-btn pace-btn-accent pricing-btn" />
                            </Link>
                            <h4 className="mt-3">What's included</h4>
                            <ul className="p-3">
                                <li>Timer Reminder</li>
                                <li>Unlimited staffs</li>
                                <li>Unlimited Todo List</li>
                                <li>Request</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Pricing;