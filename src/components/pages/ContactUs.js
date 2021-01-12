// React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Formik
import { Formik, Form, ErrorMessage } from 'formik';
import { contactUsSchema } from '../Validation/Schema';

// Layouts 
import Button from '../layouts/Button';
import { TextInput, TextArea } from '../layouts/FormInput';

class ContactUs extends Component {

  componentDidMount() {
    document.title = 'Contact us'
  }
  render() {
    return (
      <div className="container">
        <main className="container d-flex justify-content-center align-items-center mt-5">
          <div className="row">
            <div className="form-con col-lg-12 mb-5">
              {/* link to go back to the home page */}
              <Link to="/">
                {/* <i className="fas fa-long-arrow-alt-left" /> */}
                <i className="fas fa-home" />
              </Link>
              <div className="form-heading mt-2">
                <h1>Contact Us</h1>
              </div>
              <Formik  
                initialValues={{
                name: '',
                email: '',
                message: ''
              }}
                validationSchema = {contactUsSchema}
                onSubmit={ values=> console.log(values)}
              > 
                {({touched, errors, values, handleSubmit, handleChange, isSubmitting}) => (
                  <Form className="mt-5"  onSubmit={handleSubmit}>
                    <div className="form-group">
                      <TextInput 
                        label = "Name"
                        name = "name"
                        id = "name"
                        type = "text"
                        value={values.name}
                        className = {`form-control lead  ${
                          touched.name && errors.name ? "is-invalid" : ""
                          }`}
                        labelClassName="lead"
                        placeholder = "John Doe"
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback p-0"
                     />
                    </div>
                    <div className="form-group">
                      <TextInput 
                        label = "Email"
                        name = "email"
                        id = "email"
                        type = "email"
                        value = {values.email}
                        className={`form-control lead  ${
                          touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        labelClassName="lead"
                        placeholder = "johndoe@gmail.com"
                        onChange={handleChange} 
                      />
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback p-0"
                      />
                    </div>
                    <div className="form-group">
                      <TextArea 
                        label = "Message"
                        name = "message"
                        id = "message"
                        value = {values.message}
                        className={`form-control lead  ${
                          touched.message && errors.message ? "is-invalid" : ""
                          }`}
                        labelClassName="lead"
                        rows = "8"
                        cols = "57"
                        placeholder = "please drop your message here"
                        onChange={handleChange} 
                      />
                      <ErrorMessage
                        component="div"
                        name="message"
                        className="invalid-feedback p-0"
                     />    
                    </div>
                   
                    <Button 
                      label="Contact Us"
                      type="submit"
                      className = "btn btn-primary"
                      id = "contact-us"
                      disabled={isSubmitting}
                      // label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Loading...</span>) : "Login"}
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

export default ContactUs;