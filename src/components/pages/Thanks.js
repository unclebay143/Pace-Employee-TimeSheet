// React
import { Link } from "react-router-dom";

// Layouts
import Button from "../../components/layouts/Button";
import messageSent from "../../components/pages/pages-images/message_sent.svg";

export default function Thanks(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <section className="d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center ">
                        <aside className="col-lg-6 col-12 mt-sm-3">
                            <h2 className="font-weight-bold mt-5">Thank you!</h2>
                            <p>We've received your message and we'll get back to you within 24 hours.</p>

                            <section className="mt-5">
                                <h5 className="pt-3 mb-4">
                                    Follow us on twitter &nbsp;
                                    <i className="fab fa-twitter text-blue"></i>
                                </h5>
                                <Link to="/">
                                    <Button
                                        label=" Go Home"
                                        icon="fa fa-arrow-left"
                                        className="btn pace-btn-accent"
                                    />
                                </Link>
                                <a href="https://twitter.com/tiidelab" target="_blank">
                                    <Button
                                        label=" Twitter"
                                        icon="fab fa-twitter"
                                        className="btn btn-primary ml-3"
                                    />
                                </a>
                            </section>
                        </aside>
                        <aside className="col-lg-6 col-9 mt-5">
                            <img src={messageSent} alt="message sent successfully" className="img-fluid mt-4" />
                        </aside>
                    </section>
                </div>
            </div>
        </>
    )
}

