// React
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 

// Layouts
import Button from '../layouts/Button';
import loginImage from './pages-images/login-img.png';
import { TextInput } from '../layouts/FormInput';
import { loginSchema } from '../Validation/Schema';
import { HomeButton } from '../layouts/HomeButton';

// Actions
import { login } from '../../actions/auth/authAction';

/* Development fake user credentials */

// this is should be used when the server is down and you need to login to the dashboard
// const data = {
//     firstName: 'Ayodele Samuel',
//     lastName: 'Dummy',
//     staffID: 123,
//     companyID: 1928,
//     roleID: 1
// }

// const token = 'wkknohsiosdoiwoihh.wohoifhfiohiohfiuhui.iuwiuhiuhfuhiuwhg'
// localStorage.setItem('token', JSON.stringify(token))
// localStorage.setItem('currentUser', JSON.stringify(data) )
//


const Login = () =>{
   
    const currentUserFromLocalStorage = JSON.parse(localStorage.getItem('currentUser'));
    const authenticationState = useSelector(state => state.authenticationState)
    const dispatch = useDispatch()
    const history = useHistory()
    
    // Function to redirect user to the dashboard when there is a user in the local storage
    useEffect(() => {
        document.title = 'Login | Pace'
        if(currentUserFromLocalStorage){
            if(authenticationState.isLoggedIn){
                history.push('./dashboard')
            }
        }
    },[currentUserFromLocalStorage, authenticationState.isLoggedIn, history])
    
    return(
        <div className="container">
            <main className="container d-lg-flex justify-content-center align-items-center mt-5">
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
                        <div className="form-heading mt-5">
                            <h3 className="mb-3">Login</h3>
                            <h4 className="mb-5">Welcome back!</h4>
                        </div>
                        {/* message can be placed here */}
                        <div className="mt-5" name="form">
                            <div className="form-group mt-b">
                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: ''
                                    }}
                                    validationSchema = {loginSchema}
                                    onSubmit= {(values, action)=>{
                                        dispatch(login(values, action))
                                        // Reload to referesh the app (solve the fetch error from profile)
                                        // .then((response)=>window.location.reload())
                                    }}
                                >{({touched, errors, isSubmitting, handleSubmit}) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="email-wrapper pb-3">
                                            <TextInput 
                                                label="Enter your workspace address"
                                                name="email"
                                                type="email"
                                                className={`form-control p-2 ${
                                                    touched.email && errors.email ? "is-invalid" : ""
                                                }`}
                                                id="email"
                                                placeholder="example@company.com"
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback p-0"
                                            />
                                        </div>
                                        <div className="password-wrapper">
                                            <TextInput 
                                                name="password"
                                                type="password"
                                                label="Password"
                                                labelClassName="mt-3"
                                                className={`form-control p-2 ${
                                                    touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                                id="passwords"
                                                placeholder="Password"
                                                autoComplete='on'
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <Button 
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={isSubmitting}
                                                label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Loading</span>) : "Login"}
                                                />
                                            <p>Create your workspace register <Link to="/signup">Here</Link></p>
                                            <span><Link to="/forgot">Forgot Passwords</Link></span>
                                        </div>
                                    </Form>)}
                                </Formik>
                            </div>
                        </div>
                    </div>

                    {/* Login Image Section */}
                    <div className="img-con col-lg-7 d-none d-lg-block">
                        <div className="login-intro-img mt-3">
                            <img src={loginImage} alt="office timing" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default withRouter(Login);