import { Link } from 'react-router-dom';

// Others
import TypeWriter from './pages-js/TypeWriter';

// Images
import landingPageImg from './pages-images/landingPage.svg';


const IndexArea = () => {
    return(
      <>
        <div className="row">
          <section className="container d-flex flex-column-reverse home-intro flex-lg-row">
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
                    <Link
                      className="btn pace-btn pace-btn-primary" 
                      id="login-btn"
                      to="/login"
                      >
                      Login
                      <svg width="2em" height="1.3em" viewBox="0 0 16 16" className="bi bi-arrow-right" id="login-arrow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                    </Link>
                    <Link
                      type="submit" 
                      className="btn pace-btn pace-btn-accent" 
                      id="learn-btn"
                      to="/about"
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
        </div>
      </>
    )
}

export default IndexArea;  