import React from 'react';
import {Link} from "react-router-dom";
import Button from './Button';
import {HashLink as ScrollLink} from 'react-router-hash-link';


function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light home-nav">
        <a href="../index.html" className="navbar-brand" id="logo">Pace</a>
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
            <ScrollLink 
              to="/#pace-features"         
              spy={true} 
              smooth={true} 
              duration={500} 
              activeClass='active'
              className="nav-link"
            >Features
            </ScrollLink>
            <Link to="/about/#pacepricing" className="nav-link">Pricing</Link>
            <Link to='/about' className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <Link to="/signup" label="samuel" type="submit" className="navbar-btn btn btn-sm btn-primary ml-auto to-btn" id="get-started-btn">Get Started</Link>
        </div>
      </nav>
    </React.Fragment>
  )
};


export default Navbar;