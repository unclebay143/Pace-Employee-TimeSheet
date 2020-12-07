// react
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch } from "react-router-dom";
//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import './utilities.css';
// components
import Home from './components/App';
import About from './components/pages/About';
import PageNotFound from './components/pages/404';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import ContactUs from './components/pages/ContactUs';
// import ContactUsPage from './components/pages/ContactUs';
import Dashboard from './components/workspace/dashboard/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/dashboard" component = {Dashboard} />
        <Route exact path="/login" component = {LoginPage} />
        <Route exact path="/signup" component = {SignupPage} />
        <Route exact path="/about" component = {About} />
        <Route exact path="/" component = {Home} />
        <Route exact path="/contact" component = {ContactUs} />
        {/* <Route exact path="/contact" component = {ContactUsPage} /> */}
        <Route component = {PageNotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

