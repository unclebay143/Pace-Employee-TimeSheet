import React from 'react';
import './Layout-Styles/navbar.css';
import {Link} from "react-router-dom";
import Button from './Button';

function Navbar() {
  return (
    <React.Fragment>
    {/* <div className="container"> */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="../index.html" className="navbar-brand" id="logo">Pace</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#this_nav" aria-controls="this_nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button> */}
        <Button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#this_nav" 
          aria-controls="this_nav" 
          aria-expanded="false" 
          aria-label="Toggle navigation" 
          label={ <span className="navbar-toggler-icon"/> }
        />
        <div className="collapse navbar-collapse" id="this_nav">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="#pace-features" className="nav-link">Features</Link>
            <Link to="/about/#pacepricing" className="nav-link">Pricing</Link>
            <Link to='/about' className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          {/* <a href="../../new_ui_env/contents/signup.html" className="navbar-btn btn btn-sm btn-primary ml-auto to-btn" id="get-started-btn">Get Started</a> */}
          <Link to="../../new_ui_env/contents/signup.html" label="samuel" type="submit" className="navbar-btn btn btn-sm btn-primary ml-auto to-btn" id="get-started-btn">Get Started</Link>
        </div>
      </nav>
    {/* </div> */}

    </React.Fragment>
  )
};


export default Navbar;