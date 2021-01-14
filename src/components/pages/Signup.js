// react 
import { React, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';


// layouts
import Button from '../layouts/Button';
import loginImage from './pages-images/login-img.png';
import { Formik, Form, ErrorMessage } from 'formik';
import { signUpSchema } from '../Validation/Schema'
import { TextInput, CheckbBox } from '../layouts/FormInput';
import { HomeButton } from '../layouts/HomeButton'


// Authentication
import { register } from '../../actions/auth/authAction';
import { ToastContainer } from 'react-toastify';


const Signup = () =>{
    
    useEffect(() => {
        document.title = "Signup | Pace "
    });

    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.authenticationState)

    if(isLoggedIn){
        return <Redirect to="/dashboard" />
    }
    return(
        <div className="container">
            <ToastContainer />
            <main className="container d-flex justify-content-center align-items-center mt-3 mt-md-5">
                <div className="row">
                    <div className="form-con col-lg-5 mb-5">
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
                                companyName : '',
                                email : '',
                                password: '',
                                confirmPassword: '',
                                termsOfService: false
                            }}
                            validationSchema = {signUpSchema}
                            onSubmit={(values, action)=>{
                                dispatch(register(values, action))
                            }}
                        >
                            {
                                ({ values, errors, touched, isSubmitting })=>(
                                    <Form>
                                        <div className="form-group signupForm">
                                            <div className="companyName-wrapper">
                                                {/* <label className="mt-3">Workspace Name """validate workspace name here onChange"""</label> */}
                                                <TextInput 
                                                    name="companyName"
                                                    id="companyName"
                                                    type="text"
                                                    label="Workspace Name"
                                                    labelClassName="mt-md-3"
                                                    placeholder="Bascom Limited"
                                                    className={`form-control lead p-2 ${
                                                        touched.companyName && errors.companyName ? "is-invalid" : ""
                                                    }`}                                                        
                                                    title = {touched.companyName && errors.companyName ? "Tooltip Text" : "Tooltip Text"}
                                                    data-placement = "bottom"
                                                />
                                                <ErrorMessage
                                                    component="span"
                                                    name="companyName"
                                                    className="invalid-feedback p-0"
                                                />
                                            </div>
                                            <div className="email-wrapper">
                                                <TextInput 
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    label="Email"
                                                    labelClassName="mt-3"
                                                    className={`form-control lead p-2 
                                                    ${
                                                        touched.email && errors.email ? "is-invalid" : ""
                                                    }`}
                                                    placeholder="Email" 
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="email"
                                                    className="invalid-feedback p-0"
                                                />
                                            </div>
                                        <div className="d-md-flex passwords">
                                            <style>
                                                {
                                                    `
                                                        @media(max-width:800px){
                                                            .passwords .password-wrapper,
                                                            .passwords .confirmPassword-wrapper{
                                                                width: 100% !important;
                                                            }
                                                    `
                                                }
                                            </style>
                                            <div className="form-group password-wrapper mr-2" style={{ width: '50%' }}>
                                                <TextInput 
                                                    name="password"
                                                    id="password"
                                                    type="password"
                                                    label="Password"
                                                    labelClassName="mt-3"
                                                    className={`form-control lead p-2 col-12
                                                    ${ 
                                                        touched.password && errors.password ? "is-invalid" : ""
                                                     }
                                                    `}
                                                    placeholder="Password"
                                                    autoComplete='on'
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="password"
                                                    className="invalid-feedback p-0"
                                                />
                                            </div>
                                            
                                            {/* confirm password */}
                                            <div className="form-group confirmPassword-wrapper" style={{ width: '50%' }} >
                                                <TextInput 
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    type="password"
                                                    label="Confirm Password"
                                                    labelClassName="mt-md-3"
                                                    className={`form-control lead p-2 ${
                                                        touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                                                    }`}
                                                    placeholder="Confirm Password" 
                                                    autoComplete='on'
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
//     companyName : PropTypes.string.isRequired(),
//     email : PropTypes.string.isRequired(),
//     password : PropTypes.string.isRequired(),
//     confirmPassword : PropTypes.string.isRequired(),
// }

export default Signup;