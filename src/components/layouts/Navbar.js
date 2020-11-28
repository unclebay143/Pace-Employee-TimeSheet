import React from 'react';
import './Layout-Styles/navbar.css';
function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="../index.html" className="navbar-brand" id="logo">Pace</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#this_nav" aria-controls="this_nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="this_nav">
          <div className="navbar-nav">
            <a href="../../new_ui_env/index.html" className="nav-link active">Home</a>
            <a href="../../new_ui_env/index.html#pace-features" className="nav-link">Features</a>
            <a href="../../new_ui_env/index.html#pace-pricing" className="nav-link">Pricing</a>
            <a href="../../new_ui_env/contents/about.html" className="nav-link">About</a>
            <a href="../../new_ui_env/contents/contact.html" className="nav-link">Contact</a>
          </div>
          <a href="../../new_ui_env/contents/signup.html" className="navbar-btn btn btn-sm btn-primary ml-auto to-btn" id="get-started-btn">Get Started</a>
        </div>
      </nav>

    </React.Fragment>
  )
};


export default Navbar;