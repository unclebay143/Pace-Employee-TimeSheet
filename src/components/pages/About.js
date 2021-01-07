// React
import React, { useEffect } from 'react';

// Images
import peter from './pages-images/adeyemon_peter.jpg';
import akan from './pages-images/akan_asanga.jpg';
import baseet from './pages-images/ariyibi_baseet_.jpg';
import tolu from './pages-images/toluwanimi_ayoola.jpg';
import unclebay from './pages-images/ayodele_samuel_adebayo.jpg'
import aisha from './pages-images/opaluwa_aisha.jpg';
import aboutImage from './pages-images/v.jpg';


const About = () => {

  useEffect(()=>{
    document.title = 'About | Pace'
  })
  
  return (
    <React.Fragment>
      <AboutContent />
    </React.Fragment>
  )
}


const AboutContent = () => {
  const paceEngineersProfile = [
    {
      id: 1,
      name: "Ayodele Samuel Adebayo",
      img: unclebay,
      stack: "Frontend Developer",
    },
    {
      id: 2,
      name: "Opaluwa Aisha",
      img: aisha,
      stack: "Frontend Developer",    
    },
    {
      id: 3,
      name: "Ariyibi Baseet",
      img: baseet,
      stack: "Frontend Developer",    
    },
    {
      id: 4,
      name: "Adeyemo Peter",
      img: peter,
      stack: "Backend Developer",
    },
    {
      id: 5,
      name: "Toluwanimi Ayoola",
      img: tolu,
      stack: "Backend Developer",
    },
    {
      id: 6,
      name: "Akan Asanga",
      img: akan,
      stack: "Backend Developer",
    }

  ]

  return(
    <React.Fragment>
      <section className="container about">
        <section className="row pace-big-screen flex-column-reverse flex-lg-row">
          <article className="col-12 col-lg-6">
            <section>
              <h3 className="mb-3">Our Vision</h3>
              <p>
              The most key component of time trackers are increasing in productivity,
issues identifying and eliminating. Pace timesheet give you that opportunity.
with Time Tracking, Report Sheet and  productivity management features, it is very easy
to track how much each task takes from start to finish, which websites was used during the work
and understand how to boost you and your employees productivity.
              </p>
            </section>
            <section className="mt-5">
              <h3 className="mb-3">How it started</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quisquam sit debitis harum esse necessitatibus iusto obcaecati unde eligendi perspiciatis et nostrum maxime, earum fugit sequi inventore! Odit, cupiditate velit!
              </p>
            </section>
          </article>
          <article className="col-12 col-lg-6">
            <img src={aboutImage} alt="pace developer " className="img-fluid mb-5 clock-image" />
          </article>
        </section>
        <summary className="team">
          <h3>Pace Team </h3>
        </summary>
        <section className="row text-center pace-team">
         {

          paceEngineersProfile.filter((paceEngineer) => paceEngineer.stack === "Frontend Developer").map(function (paceEngineerProfile){ 
              return (
                <article className="col-sm" key={paceEngineerProfile.id}>
                  <img src={paceEngineerProfile.img} alt="pace developer " className="rounded-circle mx-auto d-block" />
                  <h4>{paceEngineerProfile.name}</h4>
                  <p className="pace-accent">{paceEngineerProfile.stack}</p>
                </article>
              )
            })
         }         
        </section>
        <section className="row text-center pace-team">
         {

          paceEngineersProfile.filter((paceEngineer) => paceEngineer.stack === "Backend Developer").map(function (paceEngineerProfile){ 
              return (
                <article className="col-sm" key={paceEngineerProfile.id}>
                  <img src={paceEngineerProfile.img} alt="pace developer " className="rounded-circle mx-auto d-block" />
                  <h4>{paceEngineerProfile.name}</h4>
                  <p className="pace-accent">{paceEngineerProfile.stack}</p>
                </article>
              )
            })
         }         
        </section>
      </section>
    </React.Fragment>
  );
};



export default About