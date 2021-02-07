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
              As the world is now experiencing a global pandemic, the need for remote work has become glaring in nations all over the world. Even with the need and convenience that comes with working from ones home, Nigerian employers are not employing remote workers as they worry about having to pay remote workers for unproductive hours. The same applies to workers who are manually signing their time sheet. The headache of collation and trust is a lot for the Employers to worry about.
              {/* Also, Nigerian Employers who have found out timesheet in time past have been bothered by the technicalities behind the use of such. It was from this need that brought about the idea to build a web application that gives employers an a avenue to track the time and productivity of their employees and also do it seamlessly. */}
              </p>
            </section>
            <section className="mt-4">
              <h3 className="mb-3">How it started</h3>
              <p>
                Pace timesheet is a project the T-circuit embarked on at TIIDELab Cohort 2, this product is an outcome of their 6 months web development and soft skills, the project was first built with html, css and vanilla javascript in the first 4 months of the cohort and later developed with React Js and Node js.
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