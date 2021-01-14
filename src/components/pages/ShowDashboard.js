// Images
import dashboard from './pages-images/dashboard.png';
import manageEmployee from './pages-images/manage-employee.png';

const ShowDashboard = () => {
    return (
      <>
    
        {/* SAMPLES OF DASHBOARD SECTION*/}
        <h3 data-aos="fade-right" className="dashboard-show-lead mr-4 h3 text-dark text-center">UI <span className="pace-accent-color">SCREENSHOTS</span></h3>
        <section className="container dashboard-display-wrapper mt-md-5">
          <div className="row block block-1">
            <article className="col d-md-flex flex-md-row-reverse" id="dashboard-display" data-aos="zoom-in" data-aos-duration="2000">
              <h3 className="d-md-none d-sm-block mb-4">Admin Dashboard</h3>
              <img src={dashboard} alt="pace dashboard" className="img-fluid mb-5" />
              <blockquote>
              <h3 className="d-none d-md-block">Admin Dashboard</h3>
                Pace version 1 Dashboard with bar-chat report and also a section showing the most active employee
                <ul className="mt-3">
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
            </article>
          </div>
          <div className="row block block-2">
            <article className="col d-md-flex" id="dashboard-display">
              <h3 className="d-md-none d-sm-block mb-4">Add Employee Board</h3>
              <img src={manageEmployee} className="img-fluid mb-5" alt="pace dashboard " data-aos="fade-right" data-aos-duration="2000" />
              <blockquote data-aos="fade-left" data-aos-duration="2000">  
              <h3 className="d-none d-md-block">Add Employee Board</h3>
                Pace version 1 Dashboard with bar-chat report and also a section showing the most active employee
                <ul className="mt-3">
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
      </>
    )
};

  
  export default ShowDashboard;