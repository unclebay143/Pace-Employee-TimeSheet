import { React, useEffect} from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { TextInput } from '../layouts/FormInput';
import Button from '../layouts/Button';
import forgotIllustration from '../pages/pages-images/forgotpassword.svg';
import { forgotPasswordSchema } from '../Validation/Schema';
import { HomeButton } from './HomeButton';


export default function ForgotPassword() {
    useEffect(() => {
        
        return () => {
            document.title = "Forgot Password"
        }
    }, [])
    return (
        <>

            <div className="container d-flex justify-content-center pl-5 align-items-center mt-5">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col mt-5">
                        <HomeButton className="mb-4" />
                        <div>
                            <h3 className="lad">Forgot Password</h3>
                            <p className="w-3 pace-accent-color">Looks like you forgot your password, let's help you out</p>
                        </div>                    
                        
                        <div className="form-wrapper">
                            <Formik 
                                initialValues = {{
                                    email:"",
                                    isSubmitting:false
                                }}

                                validationSchema = {forgotPasswordSchema}

                            >
                                {({values, errors, touched, isSubmitting})=>{
                                    return(
                                        <div className="form-group">
                                            <Form>
                                                <TextInput 
                                                    name="email"
                                                    type="email"
                                                    id="email"
                                                    placeholder="example@company.com"
                                                    label="Enter your registered email"
                                                    labelClassName="mt-2"
                                                    className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="email"
                                                    className="invalid-feedback p-0"
                                                />
                                                <Button
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Sending...</span>) : "Request"}
                                                    type="submit"
                                                    className="btn btn-primary mt-3"
                                                    disabled={isSubmitting}
                                                />
                                            </Form>
                                        </div>
                                        
                                    )
                                }}
                            </Formik>            
                        </div>
                    </div>
                </div>
                <div className="col-6 d-none d-lg-block forgot-password-wrapper ml-lg-5 mt-lg-5">
                    <img src={forgotIllustration} alt="human forgot password" className="img-fluid mt-4" />
                </div>
            </div>
        </>
    )
}
