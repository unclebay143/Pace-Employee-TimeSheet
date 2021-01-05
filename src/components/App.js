// React 
import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
// Layouts
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Others
import AOS from 'aos';

// Components
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/404';
import { getUserProfile } from '../actions/auth/authAction';


function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });

    getUserProfile()
    console.log('In App')
  }, []);



  return (
    <>
      <main className="container">
        <Navbar />
          <Switch>
            <Route exact path="/about" component = {About} />
            <Route exact path="/" component = {Home} />
            <Route component = {PageNotFound} />
          </Switch>
      </main>
        <Footer />
    </>
  )
}


export default App;