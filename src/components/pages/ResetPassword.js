import { React, Fragment, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import {TextInput} from '../layouts/FormInput';
import Button from '../layouts/Button';
import { resetPasswordSchema } from '../Validation/Schema';
import { HomeButton } from './HomeButton'

const ResetPassword = () =>{

    useEffect(() => {
        
        return () => {
            document.title = "Reset Password"
        }
    }, [])
    return(
        <>
            <main className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="form-con col-lg-5 mb-5">
                        <HomeButton />
                        <div className="form-heading mt-5">
                        <h4 className="mb-5">Reset Password</h4>
                        </div>
                        <div className="mt-5" name="form">
                            <p id="errorMessage" />
                            <div className="form-group">
                                <Formik
                                    initialValues={{
                                        password: '',
                                        confirmPassword: ''
                                    }}
                                    validationSchema = {resetPasswordSchema}
                                >{({values, touched, errors, isSubmitting, handleSubmit, handleChange}) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="password-wrapper pb-3">
                                            <TextInput 
                                                label="Enter New Password"
                                                name="password"
                                                type="password"
                                                className={`form-control p-2 ${
                                                    touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                                id="password"
                                                placeholder="Create strong password"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback p-0"
                                            />
                                        </div>
                                        <div className="confirm-password-wrapper">
                                            <TextInput 
                                                name="confirmPassword"
                                                type="password"
                                                label="Confirm password"
                                                labelClassName="mt-3"
                                                className={`form-control p-2 ${
                                                    touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                                                }`}
                                                id="passwords"
                                                placeholder="Password"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="confirmPassword"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="mt-3">
                                        {/* <Link to="/dashboard"> */}

                                            <Button 
                                                type="submit"
                                                className="btn btn-primary"
                                                id="loginBtn"
                                                disabled={isSubmitting}
                                                label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Resetting...</span>) : "Login"}
                                                />
                                        {/* </Link> */}
                                        </div>
                                    </Form>
                                    
                                )}
                            </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default ResetPassword;