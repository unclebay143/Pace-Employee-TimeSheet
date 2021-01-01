// react 
import { React, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify'; 
// import PropTypes from 'prop-types';


// layouts
import Button from '../layouts/Button';
import loginImage from './pages-images/login-img.png';
import { Formik, Form, ErrorMessage } from 'formik';
import { signUpSchema } from '../Validation/Schema'
import { TextInput, CheckbBox } from '../layouts/FormInput';
import { HomeButton } from '../layouts/HomeButton'

// Toast
import { registrationFailLogger, registrationCompletedLogger} from '../../toaster';


// Authentication
import { register } from '../../actions/auth/authAction';


const Signup = () =>{
    
    useEffect(() => {
        document.title = "Signup | Pace "
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const { isLoggedIn } = useSelector(state => state.authenticationState)

    if(isLoggedIn){
        return <Redirect to="/dashboard" />
    }
    return(
        <div className="container">
            <main className="container d-flex justify-content-center align-items-center mt-5">
                <div className="row">
                    <div className="form-con col-lg-5 mb-5">
                        <ToastContainer />
                        <style>
                            {
                                `
                                    .Toastify__toast--warning{
                                        background: rgb(255,112,150);
                                        color: #FFFFFF;
                                    }
                                `
                            }
                        </style>
                        
                        <HomeButton />
                        <div className="form-heading mt-2">
                        <h3 className="mb-3">Signup</h3>
                        <h4 className="mb-4">Track every second!</h4>
                        </div>
                        <Formik 
                        
                            initialValues={{
                                workSpaceName : '',
                                workSpaceEmail : '',
                                password: '',
                                confirmPassword: '',
                                termsOfService: false
                            }}
                            validationSchema = {signUpSchema}
                            onSubmit={(values, action)=>{
                                dispatch(register(values))
                                .then(()=>{
                                    action.setSubmitting(true)
                                    registrationCompletedLogger()
                                    setTimeout(() => {
                                        history.push('/dashboard');
                                    }, 2000);
                                })
                                .catch((err)=>{
                                    registrationFailLogger()
                                    action.setSubmitting(false)
                                })
                            }}
                        >
                            {
                                ({ values, errors, touched, isSubmitting })=>(
                                    <Form>
                                        <div className="form-group signupForm">
                                            <div className="workSpaceName-wrapper">
                                                {/* <label className="mt-3">Workspace Name """validate workspace name here onChange"""</label> */}
                                                <TextInput 
                                                    name="workSpaceName"
                                                    id="workSpaceName"
                                                    type="text"
                                                    label="Workspace Name"
                                                    labelClassName="mt-3"
                                                    placeholder="Bascom Limited"
                                                    className={`form-control lead p-2 ${
                                                        touched.workSpaceName && errors.workSpaceName ? "is-invalid" : ""
                                                    }`}                                                        
                                                    title = {touched.workSpaceName && errors.workSpaceName ? "Tooltip Text" : "Tooltip Text"}
                                                    data-placement = "bottom"
                                                />
                                                <ErrorMessage
                                                    component="span"
                                                    name="workSpaceName"
                                                    className="invalid-feedback p-0"
                                                />
                                            </div>
                                            <div className="email-wrapper">
                                                <TextInput 
                                                    name="workSpaceEmail"
                                                    id="workSpaceEmail"
                                                    type="email"
                                                    label="Email"
                                                    labelClassName="mt-3"
                                                    className={`form-control lead p-2 ${
                                                        touched.workSpaceEmail && errors.workSpaceEmail ? "is-invalid" : ""
                                                    }`}
                                                    placeholder="Email" 
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="workSpaceEmail"
                                                    className="invalid-feedback p-0"
                                                />
                                            </div>
                                        <div className="d-flex">

                                            <div className="form-group password-wrapper mr-2">
                                                <TextInput 
                                                    name="password"
                                                    id="password"
                                                    type="password"
                                                    label="Password"
                                                    labelClassName="mt-3"
                                                    className={`form-control lead p-2 ${
                                                        touched.password && errors.password ? "is-invalid" : ""
                                                    }`}
                                                    placeholder="Password" 
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="password"
                                                    className="invalid-feedback p-0"
                                                />
                                            </div>
                                            <div className="form-group confirmPassword-wrapper">
                                                <TextInput 
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    type="password"
                                                    label="Confirm Password"
                                                    labelClassName="mt-3"
                                                    className={`form-control lead p-2 ${
                                                        touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                                                    }`}
                                                    placeholder="Confirm Password" 
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="confirmPassword"
                                                    className="invalid-feedback p-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-check">
                                            <CheckbBox 
                                                name="termsOfService"
                                                id="termsOfService"
                                                title="Accept Terms and condition"
                                                titleclassname={values.termsOfService ? "text-blue" : "pace-accent-color"}
                                                className={`form-check-input ${touched.termsOfService && errors.termsOfService ? "is-invalid" : ""}`}
                                            />
                                                <ErrorMessage
                                                    name="termsOfService"
                                                    component="div"
                                                    className="invalid-feedback p-0"
                                            />
                                        </div>
                                            <Button 
                                                type="submit"
                                                className="btn btn-primary mt-3"
                                                id="signUp"
                                                disabled={!values.termsOfService}
                                                label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Please wait...</span>) : "Signup"}

                                            />
                                            <p>Already have an account? <Link to="./login">Login</Link></p>
                                        </div>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                    <div className="img-con col-lg-7">
                        {/* <img src={images[index]} alt="office timing" className="img-fluid" /> */}
                        <div className="login-intro-img mt-5 ml-5 d-none d-md-block">
                        <img src={loginImage} alt="office timing" className="img-fluid" />
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>

    )
}

// Signup.propTypes = {
//     workSpaceName : PropTypes.string.isRequired(),
//     workSpaceEmail : PropTypes.string.isRequired(),
//     password : PropTypes.string.isRequired(),
//     confirmPassword : PropTypes.string.isRequired(),
// }

export default Signup;