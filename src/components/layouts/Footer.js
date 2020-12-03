import React from 'react';
import './Layout-Styles/footer.css'

const Footer = () => {
  return (
    <React.Fragment>
            {/* Footer */}
      <footer className="page-footer font-small unique-color-dark">
        <div style={{backgroundColor: 'rgb(51,94,234)'}}>
          <div className="container">
            {/* Grid row*/}
            <div className="row py-4 d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0 text-light footer-lead">Get connected with us on social networks!</h6>
              </div>
              {/* Grid column */}
              <div className="col-md-6 col-lg-7 text-center text-md-right">
                {/* Facebook */}
                <a className="fb-ic" href="https://pacetimesheet.com">
                  <i className="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                {/* Twitter */}
                <a className="tw-ic" href="https://pacetimesheet.com">
                  <i className="fab fa-twitter white-text mr-4"> </i>
                </a>
                {/* Google +*/}
                <a className="gplus-ic" href="https://pacetimesheet.com">
                  <i className="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
                {/*Linkedin */}
                <a className="li-ic" href="https://pacetimesheet.com">
                  <i className="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
                {/*Instagram*/}
                <a className="ins-ic" href="https://pacetimesheet.com">
                  <i className="fab fa-instagram white-text"> </i>
                </a>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row*/}
          </div>
        </div>
        {/* Footer Links */}
        <div className="container text-center text-md-left mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase font-weight-bold">Pace Timesheet</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <p>we are working hard to replace this section with some better wording but TOLUWANI and AISHA are still on break .</p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Services</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <p>
                <a href="#!">Business Management</a>
              </p>
              <p>
                <a href="#!">Employee Timer</a>
              </p>
              <p>
                <a href="#!">Timeline</a>
              </p>
              <p>
                <a href="#!">Report</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Contact us</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact-container">
              {/* Links */}
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
              <p>
                <i className="fas fa-home mr-13" />TIIDELab, Wuse, Abuja</p>
              <p>
                <i className="fas fa-envelope mr-13" />team@pace.com</p>
              <p>
                <i className="fas fa-phone mr-13" /> + 234 9028272782</p>
              <p>
                <i className="fas fa-print mr-13" /> + 234 8083826262</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://pacetimesheet.com"> Tiidelab circuit</a>
        </div>
        {/* Copyright */}
      </footer>
      
      {/* Footer */}

    </React.Fragment>
  )
}

export default Footer;