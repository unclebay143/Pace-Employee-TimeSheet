// react 
import React, {useEffect} from 'react';
// layout component
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import AOS from 'aos';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './pages/About';
import Pricing from './pages/Pricing';
import HomeBody from './pages/HomeBody';


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
          <Switch>
            <Route exact path="/about" component = {About} />
            <Route exact path="/pricing" component = {Pricing} />
            <Route exact path="/" component = {HomeBody} />
          </Switch>
        </main>
          <Footer />
    </React.Fragment>
  )
}


export default Home;