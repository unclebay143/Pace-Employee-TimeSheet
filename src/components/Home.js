import React from 'react';
import Navbar from './layouts/Navbar'
import HomeBody from './pages/HomeBody'
import Footer from './layouts/Footer'
import About from './About'
function Home() {
  return (
    <React.Fragment>
      <main class="container">
        <Navbar />
        {/* <HomeBody /> */}
        <About />
      </main>
      <Footer />
      
    </React.Fragment>
  )
}


export default Home;