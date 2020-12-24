// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch } from "react-router-dom";

//  >>>>>>>> APPLICATION STYLES  <<<<<<<<<<

// UTILITIES
import './components/pages/pages-styles/util.css';
import './components/pages/pages-styles/form.css';
import './components/layouts/layout-styles/button.css';

// CUSTOM
import './components/layouts/layout-styles/navbar.css';
import './components/layouts/layout-styles/footer.css';
import './components/pages/pages-styles/homebody.css';
import './components/pages/pages-styles/forgotpassword.css';
import './components/pages/pages-styles/confirmation.css';
import './components/pages/pages-styles/404.css';
import './components/pages/pages-styles/about.css';


// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// AOS
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';

// DASHBOARD STYLES
import './components/workspace/dashboard/dashboard-styles/style.default.css';
import './components/workspace/dashboard/dashboard-styles/utilities.css';
import './components/workspace/dashboard/dashboard-styles/custom.css';
import './components/workspace/dashboard/dashboard-styles/orionicons.css';
import './components/workspace/dashboard/dashboard-styles/card.css';
import './components/workspace/dashboard/dashboard-styles/task.css';
import './components/workspace/dashboard/dashboard-styles/task-sidebar.css';
import'./components/workspace/dashboard/dashboard-styles/timer.css';

// DASHBOARD SCRIPT
import './components/workspace/layouts/SibarToggle';

// Redux 
import store from "./Store";
import { Provider } from 'react-redux';

// test DEVcomponent
import Test from './rough/Test';

// COMPONENTS
import Home from './components/App';
import ContactUs from './components/pages/ContactUs';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import ForgotPassword from './components/pages/ForgotPassword';
import Confirmation from './components/pages/Confirmation';
import ResetPassword from './components/pages/ResetPassword';
import Dashboard from './components/workspace/dashboard/Dashboard';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/contact" component = {ContactUs} />
          <Route exact path="/ResetPassword" component = {ResetPassword} />
          <Route exact path="/confirmation" component = {Confirmation} />
          <Route exact path="/forgot" component = {ForgotPassword} />
          <Route exact path="/signup" component = {Signup} />
          <Route exact path="/login" component = {Login} />
          {/* Development Component for testing */}
          <Route exact path="/test" component = {Test} />
          {/* Top Level Components */}
          <Route path="/dashboard" component = {Dashboard} />
          <Route path="/" component = {Home} />

        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

