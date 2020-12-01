import React, { Fragment } from 'react';
import './pages-styles/homebody.css';
import landingPageImg from './pages-images/landingPage.svg';
import dashboard from './pages-images/dashboard.png';
import manageEmployee from './pages-images/manage-employee.png';
import { Link } from 'react-router-dom';
import Button from '../layouts/Button';
import TypeWriter from './pages-js/TypeWriter';

const IndexArea = () => {
  return(
    <React.Fragment>
      <section className="row d-flex flex-column-reverse home-intro" onLoad={TypeWriter}>
        <div className="col d-flex flex-row">
          <section className="home-intro-text">
            {/* type-writing effect */}
            <h2>Track Your Time At Your Own  
              <span className="typewrite" data-period={2000} data-type='[ "Pace|" ]'>
                <span className="wrap" />
              </span>
            </h2>
            <p>Spend less time making the right and informed decisions</p>
            <section className="home-intro-btn">
              {/* <button type="submit" className="btn btn-primary to-btn" id="login-btn" onclick="window.location.href='contents/login.html'">Login
                <svg width="2em" height="1.3em" viewBox="0 0 16 16" className="bi bi-arrow-right" id="login-arrow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </button> */}
              <Link
                className="btn btn-primary to-btn" 
                id="login-btn"
                to="login"
              >
                Login
                <svg width="2em" height="1.3em" viewBox="0 0 16 16" className="bi bi-arrow-right" id="login-arrow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </Link>
              {/* <button type="submit" className="btn to-btn" id="learn-btn" onclick="window.location.href='contents/about.html'">Learn more</button> */}
              <Link
                type="submit" 
                className="btn to-btn" 
                id="learn-btn"
                >
                  Learn More
              </Link>
            </section>
          </section>
        </div>
        <div className="col home-intro-img">
          <img src={landingPageImg} alt="office timing" className="img-fluid" />
        </div>
      </section>
    </React.Fragment>
  )
}

const FeaturesCard = props =>{
  const {animation, duration, svg, heading, paragraph} = props
  return(
    <React.Fragment>
      <article className="col" data-aos={animation} data-aos-duration={duration} {...props}>
        {svg}
        <h3>{heading}</h3>
        <p>{paragraph} </p>
      </article>
    </React.Fragment>
  )
}

const Features = () =>{
  return(
    <React.Fragment>

      <section className="row m-t5 d-flex flex-column flex-sm-row align-items-center" id="pace-summary">

        <FeaturesCard
          svg = 
            {
              <svg viewBox="0 0 16 16" className="bi bi-alarm" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
              </svg>
            }
          animation="fade-right"
          duration="2000"
          heading="Time Tracking"
          paragraph="Easy time time tracking and monitoring process for day day to day activities and tasks."
        />

        <FeaturesCard
          svg = 
            {
              <svg viewBox="0 0 16 16" className="bi bi-file-earmark-spreadsheet" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 10H3V9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2zm1 0v2h3v-2H6z" />
                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
              </svg>
            }
          animation="fade-down"
          duration="1000"
          heading="Report Sheet"
          paragraph="Keep accountability for time and money spent on our report page."
        />

        <FeaturesCard
          svg = 
            {
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
              </svg>
            }
          animation="fade-left"
          duration="2000"
          heading="Productivity Management"
          paragraph="Assign and receive tasks and, make on tasks to suit your discomforts."
        />

      </section>

      {/* row 2 start */}
      
      <section className="row m-t5 d-flex flex-column flex-sm-row align-items-center" id="pace-summary">
        <FeaturesCard
            svg = 
              {
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                  <path fillRule="evenodd" d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              }
            animation="fade-right"
            duration="2000"
            heading="Calendar"
            paragraph="Stay up to date and management events and tasks on Pace Calendar"
          />
        
        <FeaturesCard
            svg = 
              {
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-receipt-cutoff" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v13h-1V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51L2 2.118V15H1V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zM0 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                  <path fillRule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
               </svg>
              }
            animation="fade-up"
            duration="1000"
            heading="Billing Management"
            paragraph="Cost your billings on an hourly employee work hour basis."
          />

        <FeaturesCard
            svg = 
              {
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-checklist" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                  <path fillRule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                </svg>
              }
            animation="fade-left"
            duration="2000"
            heading="Todo-List"
            paragraph="Breaking down task into smaller bits to increase work efficiency."
          />
      </section>
    </React.Fragment>
  )
}

const ShowDashboard = () => {
  return (
    <React.Fragment>
  
      {/* SAMPLES OF DASHBOARD SECTION*/}
      <section className="container">
        <div className="row block block-1">
          <article className="col d-flex flex-column-reverse" id="dashboard-display" data-aos="zoom-in" data-aos-duration="2000">
            <blockquote>
              <h3>Admin Dashboard</h3>
              Pace version 1 Dashboard with bar-chat report and also a section showing the most active employee
              <ul>
                <li>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                  </svg>
                  <span>Bar chart</span>
                </li>
                <li>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-stopwatch" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07A7.001 7.001 0 0 1 8 16 7 7 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3zm0 2.1a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <span>Dashboard Timer &amp; Title bar</span>
                </li>
                <li>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <span>View Active employee</span>
                </li>
              </ul>
            </blockquote>
            <img src={dashboard} alt=" pace dashboard " />
          </article>
        </div>
        <div className="row block block-2">
          <article className="col d-flex flex-column" id="dashboard-display">
            <img src={manageEmployee} alt=" pace dashboard " data-aos="fade-right" data-aos-duration="2000" />
            <blockquote data-aos="fade-left" data-aos-duration="2000">  
              <h3>Add Employee Board</h3>
              Pace version 1 Dashboard with bar-chat report and also a section showing the most active employee
              <ul>
                <li>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <span>Add new employee</span>
                </li>
                <li>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-list-task" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                    <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                    <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                  </svg>
                  <span>Assign task</span>
                </li>
                <li>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  </svg>
                  <span>Search feature</span>
                </li>
              </ul>
            </blockquote>
          </article>
        </div>
      </section>
    </React.Fragment>
  )
};

function HomeBody() {
  return (
    <React.Fragment>
    <header className="container">
      <IndexArea />
      <Features />
      <ShowDashboard />
    </header>

    </React.Fragment>
  )
}

export default HomeBody;