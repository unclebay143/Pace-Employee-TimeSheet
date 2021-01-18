// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch } from "react-router-dom";
//  >>>>>>>> APPLICATION STYLES  <<<<<<<<<<

// DASHBOARD SCRIPT
import './components/workspace/layouts/SibarToggle';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// UTILITIES
import './components/pages/pages-styles/util.css';
import './components/pages/pages-styles/form.css';
import './components/layouts/layout-style/button.css';
import './components/loader/loader.css';

// CUSTOM
import './components/layouts/layout-style/navbar.css';
import './components/layouts/layout-style/footer.css';
import './components/pages/pages-styles/homebody.css';
import './components/pages/pages-styles/forgotpassword.css';
import './components/pages/pages-styles/confirmation.css';
import './components/pages/pages-styles/404.css';
import './components/pages/pages-styles/about.css';

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
// import './components/workspace/dashboard/dashboard-styles/task-sidebar.css';
import './components/workspace/dashboard/dashboard-styles/timer.css';
import './components/workspace/dashboard/todos/todoform.css';
import './components/workspace/dashboard/todos/todo.css';


// TOUR STYLES -- will only apply when the user is a first timer
import './components/tour/tour-styles/tour.css';

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
import Thanks from './components/pages/Thanks';
import NewStaffPassword from './components/pages/NewStaffPassword';




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/contact" component = {ContactUs} />
          <Route exact path="/ResetPassword" component = {ResetPassword} />
          <Route exact path="/confirmation" component = {Confirmation} />
          <Route exact path="/thanks" component = {Thanks} />
          <Route exact path="/forgot" component = {ForgotPassword} />
          <Route exact path="/createpassword" component = {NewStaffPassword} />
          <Route exact path="/signup" component = {Signup} />
          <Route exact path="/login" component = {Login} />
          {/* Development Component for testing */}
          <Route exact path="/test" component = {Test} />
          {/* Top Level Components */}
          <Route path="/dashboard" component = {Dashboard} />
          <Route path="/" component = {Home} />

        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

