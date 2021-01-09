// React 
import React, {useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';

// Layouts
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Others
import AOS from 'aos';

// Components
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/404';
import { syncCurrentUser } from '../actions/user/userAction';


function App() {
  const histroy = useHistory()
  const dispatch = useDispatch()

  const  currentUser  = JSON.parse(localStorage.getItem('currentUser'));

  // if( currentUser === null || currentUser === undefined ){
  //     // history.push('./login');
  // }
  
  if ( currentUser ){
    console.log(currentUser)
      dispatch(syncCurrentUser( currentUser.staffID ))
  }

  useEffect(() => {

    // Initialize AOS animation
    AOS.init({
      duration : 2000
    });
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