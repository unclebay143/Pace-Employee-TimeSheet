// react 
import React, {useEffect} from 'react';
// layout component
import Navbar from './layouts/Navbar';
import HomeBody from './pages/HomeBody';
import Footer from './layouts/Footer';
import { Route } from 'react-router-dom';
import AOS from 'aos'


function Home() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

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