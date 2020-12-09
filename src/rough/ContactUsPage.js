// ignore this page please but don't delete

import React, { Component } from 'react';
import Button from '../layouts/Button';

// styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import './pages-styles/form.css';
import './pages-styles/util.css';

// layouts , formik
import { Link } from 'react-router-dom';
import {Formik, Form, ErrorMessage} from 'formik';
import { TextInput } from '../layouts/FormInput';
import { contactUsSchema } from '../Validation/validateForms';
import PropTypes from 'prop-types';
// import LoginAuth from '../Authentication/LoginAuth';

class ContactUsPage extends Component {
  render() {
    return (
      <div className="container">
                <main className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <div className="form-con col-lg-12 mb-5">
                            <Link to="/">
                                <i className="fas fa-long-arrow-alt-left" />
                            </Link>
                            <div className="form-heading mt-2">
                                <h1>Contact Us</h1>
                            </div>
                            <Formik  className="mt-5" 
                              initialValues={{
                                name: '',
                                email: '',
                                message: ''
                            }}
                            validationSchema = {contactUsSchema}
                            onSubmit={ values=> console.log(values)}
                            >{({touched, errors, values, handleSubmit, handleChange}) => (
                              <Form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <TextInput 
                                        label = "Name"
                                        name = "name"
                                        id = "name"
                                        type = "text"
                                        value={values.name}
                                        className="form-control lead"
                                        labelClassName="lead"
                                        placeholder = "John Doe"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <TextInput 
                                        label = "Email"
                                        name = "email"
                                        id = "email"
                                        type = "email"
                                        value = {values.email}
                                        className="form-control lead"
                                        labelClassName="lead"
                                        placeholder = "johndoe@gmail.com"
                                        onChange={this.handleChange} 
                                    />
                                </div>

                                <Button 
                                    label="Contact Us"
                                    type = "button"
                                    className = "btn btn-primary"
                                    id = "contact-us"
                                />
                              </Form>
                            )}

                            </Formik>
                        </div>
                        {/* form container ends */}   
                    </div>
                </main>
            </div>

    )
  }
}

export default ContactUsPage;