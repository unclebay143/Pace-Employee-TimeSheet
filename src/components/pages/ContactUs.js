// React
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Formik
import { Formik, Form, ErrorMessage } from 'formik';
import { contactUsSchema } from '../Validation/Schema';

// Layouts 
import Button from '../layouts/Button';
import { TextInput, TextArea } from '../layouts/FormInput';
import { CONTACT_PACETEAM_API } from '../../services/root-endpoints';
import axios from 'axios';
import { somethingWentWrongLogger } from '../../toaster';
import { ToastContainer } from 'react-toastify';

class ContactUs extends Component {
  redirectToThanks = () =>{
    const { history } = this.props;
    history.push('/thanks')

  }

  componentDidMount() {
    document.title = 'Contact us'
  }
  render() {
    return (
      <div className="container">
        <ToastContainer />
        <main className="container d-flex justify-content-center align-items-center mt-5">
          <div className="row">
            <div className="form-con col-lg-12 mb-5">
              {/* link to go back to the home page */}
              <Link to="/">
                <i className="fas fa-home" />
              </Link>
              <div className="form-heading mt-2">
                <h1>Contact Us</h1>
              </div>
              <Formik  
                initialValues={{
                contactName: '',
                contactEmail: '',
                message: ''
              }}
                validationSchema = {contactUsSchema}
                onSubmit={ (values, action) =>{
                  axios.post(CONTACT_PACETEAM_API, values)
                  .then((response)=>{
                    console.log(response)
                    this.redirectToThanks()
                  })
                  .catch((error)=>{
                    console.log(error)
                    action.setSubmitting(false)
                    somethingWentWrongLogger()
                  })
                }}
              > 
                {({touched, errors, values, handleSubmit, handleChange, isSubmitting}) => (
                  <Form className="mt-5"  onSubmit={handleSubmit}>
                    <div className="form-group">
                      <TextInput 
                        label = "Name"
                        name = "contactName"
                        id = "contactName"
                        type = "text"
                        value={values.contactName}
                        className = {`form-control lead  ${
                          touched.contactName && errors.contactName ? "is-invalid" : ""
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
                        name = "contactEmail"
                        id = "contactEmail"
                        type = "email"
                        value = {values.contactEmail}
                        className={`form-control lead  ${
                          touched.contactEmail && errors.contactEmail ? "is-invalid" : ""
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
                      type="submit"
                      className = "btn btn-primary"
                      id = "contact-us"
                      disabled={isSubmitting}
                      label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Sending...</span>) : "Contact Us"}
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

export default withRouter(ContactUs);