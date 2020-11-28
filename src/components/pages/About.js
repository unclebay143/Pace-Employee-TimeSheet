import React from 'react'

function About() {
  return (
    <React.Fragment>
      <section className="container about">
        <section className="row pace-big-screen flex-column-reverse flex-lg-row">
          {/* 
        <article class="col-6">
          <img src="/assets/img/about/v.jpg" alt="pace developer "="" class="img-fluid">
        </article> */}
          <article className="col-12 col-lg-6">
            <section>
              <h3 className="mb-3">Our Vision</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quisquam sit debitis harum esse necessitatibus iusto obcaecati unde eligendi perspiciatis et nostrum maxime, earum fugit sequi inventore! Odit, cupiditate velit!
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
            <img src="/assets/img/about/v.jpg" alt="pace developer " className="img-fluid mb-5 clock-image" />
          </article>
        </section>
        <summary className="team">
          <h3>Pace Team </h3>
        </summary>
        <section className="row text-center pace-team">
          <article className="col-sm">
            <img src="../assets/img/about/ayodele_samuel_adebayo.jpg" alt="pace developer " className="rounded-circle mx-auto d-block" />
            <h4>Ayodele Samuel Adebayo</h4>
            <p className="pace-accent">Frontend Developer</p>
          </article>
          <article className="col-sm">
            <img src="../assets/img/about/opaluwa_aisha.jpg" alt="pace developer " className="rounded-circle mx-auto d-block" />
            <h4>Opaluwa Aisha</h4>
            <p>Frontend Developer</p>
          </article>
          <article className="col-sm">
            <img src="../assets/img/about/ariyibi_baseet_.jpg" alt="pace developer " className="rounded-circle mx-auto d-block" />
            <h4>Ariyibi Baseet</h4>
            <p>Frontend Developer</p>
          </article>
        </section>
        <section className="row text-center pace-team">
          <article className="col-sm">
            <img src="../assets/img/about/adeyemon_peter.jpg" alt="pace developer " className="rounded-circle mx-auto d-block" />
            <h4>Adeyemo Peter</h4>
            <p>Backend Developer</p>
          </article>
          <article className="col-sm">
            <img src="../assets/img/about/toluwanimi_ayoola.jpg" alt="pace developer " className="rounded-circle mx-auto d-block" />
            <h4>Toluwanimi Ayoola</h4>
            <p>Backend Developer</p>
          </article>
          <article className="col-sm">
            <img src="../assets/img/about/akan_asanga.jpg" alt="pace developer " className="rounded-circle mx-auto d-block" />
            <h4>Akan Asanga</h4>
            <p>Backend Developer</p>
          </article>
        </section>
      </section>
    </React.Fragment>
  )
}

export default About