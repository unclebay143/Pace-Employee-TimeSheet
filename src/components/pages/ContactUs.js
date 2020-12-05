import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../layouts/FormInput';
import Textarea from '../layouts/Textarea'
import landingPageImg from './pages-images/landingPage.svg';
import Button from '../layouts/Button';


import 'bootstrap/dist/css/bootstrap.min.css';
import './pages-styles/form.css';
import './pages-styles/util.css'



class ContactUs extends Component{
    state = {
        name: '',
        email: '',
        message: '',
        errors: {},
      };
   
    componentDidMount(){
        document.title = 'Contact Us | Pace'
    }
    handleChange =(e) => this.setState({[e.target.name]: e.target.value});
    // handleChange = event => {
    //     const { user } = this.state;    
    //     user[event.target.name] = event.target.value;
    //     this.setState({ user });
    // };

    render(){
        const {name, email, message, errors} = this.state;
       
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
                                       
                                <div className="form-group">
                                    <FormInput 
                                        label = "Name"
                                        name = "name"
                                        id = "name"
                                        className="form-control lead"
                                        value = {name}
                                        labelClassName="lead"
                                        placeholder = "John Doe"
                                        onChange={this.handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">    
                                    <FormInput 
                                        label = "Email"
                                        name = "email"
                                        type = "email"
                                        id = "email"
                                        className="form-control lead"
                                        value = {email}
                                        labelClassName="lead"
                                        placeholder = "johndoe@gmail.com"
                                        onChange={this.handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <Textarea 
                                        label = "Message"
                                        name = "message"
                                        id = "message"
                                        className="form-control lead"
                                        rows = "8"
                                        cols = "57"
                                        value = {message}
                                        labelClassName="lead"
                                        placeholder = "please leave your message here"
                                        onChange={this.handleChange}
                                    />
                            
                                </div>
                                {/* <FormInput 
                                        name = "submit"
                                        type = "submit"
                                        value = "contact-us"
                                        className = "btn btn-primary"
                                        id = "submit"
                                    /> */}
                            
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