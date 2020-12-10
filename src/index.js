// react
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch } from "react-router-dom";

//  >>>>>>>> APPLICATION STYLES  <<<<<<<<<<

// utilities
import './components/pages/pages-styles/util.css';
import './components/pages/pages-styles/form.css';

// custom
import './components/layouts/Layout-Styles/navbar.css'
import './components/pages/pages-styles/forgotpassword.css'
import './components/pages/pages-styles/confirmation.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


// dashboard
import './components/workspace/dashboard/dashboard-styles/style.default.css';
import './components/workspace/dashboard/dashboard-styles/utilities.css';
import './components/workspace/dashboard/dashboard-styles/custom.css';
import './components/workspace/dashboard/dashboard-styles/orionicons.css';
import './components/workspace/dashboard/dashboard-styles/card.css'



// components
import Home from './components/App';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import PageNotFound from './components/pages/404';
import ForgotPassword from './components/pages/ForgotPassword';
import Confirmation from './components/pages/Confirmation';
import ResetPassword from './components/pages/ResetPassword';
import Dashboard from './components/workspace/dashboard/Dashboard';


// Redux 

import store from "./Store";
import { Provider } from 'react-redux';

// test DEVcomponent
import Test from './rough/Test'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component = {Dashboard} />
          <Route exact path="/forgot" component = {ForgotPassword} />
          <Route exact path="/confirmation" component = {Confirmation} />
          <Route exact path="/ResetPassword" component = {ResetPassword} />
          <Route exact path="/login" component = {LoginPage} />
          <Route exact path="/signup" component = {SignupPage} />
          <Route exact path="/contact" component = {ContactUs} />
          <Route exact path="/about" component = {About} />
          <Route exact path="/test" component = {Test} />
          <Route exact path="/" component = {Home} />
          <Route component = {PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

