// react 
import React from 'react';
// layout component
import Navbar from './layouts/Navbar';
import HomeBody from './pages/HomeBody';
import Footer from './layouts/Footer';


function Home() {
  return (
    <React.Fragment>
      <main className="container">
        <Navbar />
        <HomeBody />
      </main>
      <Footer />
      
    </React.Fragment>
  )
}


export default Home;