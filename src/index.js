import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
// import './jquery.js';
import './utilities.css';
import Home from './components/Home';
import About from './components/pages/About';
import {HashRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import PageNotFound from './components/pages/404';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/login" component = {LoginPage} />
        <Route exact path="/signup" component = {SignupPage} />
        <Route exact path="/about" component = {About} />
        <Route exact path="/" component = {Home} />
        <Route component = {PageNotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

