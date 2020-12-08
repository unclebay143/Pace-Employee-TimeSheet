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
import Dashboard from './components/workspace/dashboard/Dashboard';
import store from "./Store";
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component = {Dashboard} />
          <Route exact path="/login" component = {LoginPage} />
          <Route exact path="/signup" component = {SignupPage} />
          <Route exact path="/about" component = {About} />
          <Route exact path="/" component = {Home} />
          <Route exact path="/contact" component = {ContactUs} />
          <Route component = {PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

