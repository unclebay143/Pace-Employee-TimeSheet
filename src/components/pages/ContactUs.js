import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import landingPageImg from './pages-images/landingPage.svg';
import Button from '../layouts/Button';
import FormInput from '../../rough/FormInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import './pages-styles/form.css';
import './pages-styles/util.css'



class ContactUs extends Component{
   
    componentDidMount(){
        document.title = 'Contact Us | Pace'
    }

    handleChange = event => {
        const { user } = this.state;    
        user[event.target.name] = event.target.value;
        this.setState({ user });
    };

    render(){
       
        return(
            <div className="container">
                <main className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <div className="form-con col-lg-5 mb-5">
                            <Link to="/">
                                <i className="fas fa-long-arrow-alt-left" />
                            </Link>
                            <div className="form-heading mt-2">
                                <h1>Contact Us</h1>
                            </div>
                            <form className="mt-5" name="form">
                                       
                                <div className="form-group mt-b">
                                    <FormInput 
                                        label = "Name"
                                        name = "contact"
                                        type = "text"
                                        id = "contact-name"
                                        className="form-control lead"
                                        labelClassName="lea mt-3"
                                        placeholder = "John Doe"
                                        onChange={this.handleChange}
                                        required 
                                    />
                                    <FormInput 
                                        label = "Email"
                                        name = "email"
                                        type = "email"
                                        id = "contact-email"
                                        className="form-control lead"
                                        labelClassName="lea mt-3"
                                        placeholder = "johndoe@gmail.com"
                                        onChange={this.handleChange}
                                        required 
                                    />
                            
                                </div>
                                <Button 
                                    label="Contact Us"
                                    type = "button"
                                    className = "btn btn-primary"
                                    id = "contact-us"
                                />
                            </form>
                        </div>

                        {/* form container end */}

                        <div className="img-con col-lg-7 d-none d-lg-block">
                            <div className="login-intro-img mt-3">
                                <img src={landingPageImg} alt="office timing" className="img-fluid" />
                            </div>
                        </div>
                        
                    </div>
                </main>
            </div>

        )
    }
}


export default ContactUs;