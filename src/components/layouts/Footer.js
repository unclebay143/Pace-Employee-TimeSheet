import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer font-small unique-color-dark">
          <div style={{backgroundColor: 'rgb(51,94,234)'}}>
            <div className="container">
              <div className="row py-4 d-flex flex-column flex-md-row align-items-center">
                <div className="col-md-6 col-lg-5 text-cener text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 text-light footer-lead">Get connected with us on social networks!</h6>
                </div>
                <div className="col-md-6 col-lg-4 text-ceter social-links">
                  <a className="fb-ic" href="https://facebook.com">
                    <i className="fab fa-facebook-f white-text mr-4"> </i>
                  </a>
                  <a className="tw-ic" href="https://twitter.com">
                    <i className="fab fa-twitter white-text mr-4"> </i>
                  </a>
                  <a className="gplus-ic" href="https://gmail.com">
                    <i className="fab fa-google-plus-g white-text mr-4"> </i>
                  </a>
                  <a className="li-ic" href="https://linkedin.com">
                    <i className="fab fa-linkedin-in white-text mr-4"> </i>
                  </a>
                  <a className="ins-ic" href="https://instagram.com">
                    <i className="fab fa-instagram white-text"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-sm-left text-md-left mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold small-footer-heading">Pace Timesheet</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>Pace is an employee time tracking system, which provides employee clock time (timesheet).</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Services</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                  <Link to="/login">Business Management</Link>
                </p>
                <p>
                  <Link to="/login">Employee Timer</Link>
                </p>
                <p>
                  <Link to="/login">Timeline</Link>
                </p>
                <p>
                  <Link to="/login">Report</Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold small-footer-heading">Useful links</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                  <Link to="/login">Your Account</Link>
                </p>
                <p>
                  <Link to="/contact">Become an Affiliate</Link>
                </p>
                <p>
                  <Link to="/contact">Contact us</Link>
                </p>
                <p>
                  <Link to="/contact">Help</Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact-container">
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                  {/* <i className="fas fa-phone mr-2" /> */}
                   (+234) 9028272782
                </p>
                <p>
                  {/* <i className="fas fa-print mr-2" /> */}
                   (+234) 8083826262
                </p>
                <p>
                  {/* <i className="fas fa-envelope mr-2" /> */}
                  team@pace.com
                </p>
                <p>
                  {/* <i className="fas fa-home mr-2" /> */}
                  TIIDELab, Wuse, Abuja
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://tiidelab.com"> Tiidelab circuit</a>
          </div>
      </footer>
      

    </React.Fragment>
  )
}

export default Footer;