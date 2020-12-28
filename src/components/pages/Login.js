// React
import { React, useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { ToastContainer, toast} from 'react-toastify'; 
// Layouts, Customs
import Button from '../layouts/Button';
import loginImage from './pages-images/login-img.png';
import { TextInput } from '../layouts/FormInput';
import { loginSchema } from '../Validation/Schema';
import { HomeButton } from '../layouts/HomeButton';
import axios from 'axios';

const invalidDetailsLogger = () => toast.warning("Invalid Login details")
const isUserAuthenticatedLogger = () => toast.info("Logging in")

const Login = (props) =>{
    const history = useHistory();
    useEffect(() => {
        document.title = 'Login | Pace'
    }, [])

    const [ isUserAuthenticated, setIsUserAuthenticated ] = useState(false)
        return(
            <div className="container">
                <main className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <div className="form-con col-lg-5 mb-5">
                            <ToastContainer 
                                position="bottom-right"
                            />
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
                            <div className="mt-5" name="form">
                                <div className="form-group mt-b">
                                    <Formik
                                        initialValues={{
                                            email: '',
                                            password: ''
                                        }}
                                        validationSchema = {loginSchema}
                                        onSubmit= {(values, action)=>{
                                            axios.post('https://reqres.in/api/login', values)
                                            .then((res)=>{
                                                localStorage.setItem('user', res.data.token)
                                                setIsUserAuthenticated(true)
                                                    if(isUserAuthenticated){
                                                        isUserAuthenticatedLogger();
                                                        setTimeout(() => {
                                                            history.push('/dashboard');
                                                        }, 2000);
                                                    }else{
                                                        invalidDetailsLogger()
                                                        setTimeout(() => {
                                                            action.setSubmitting(false)
                                                        }, 2000);
                                                    }
                                                })
                                            .catch(error =>{
                                                invalidDetailsLogger()
                                                console.log(error);
                                                setTimeout(() => {
                                                    action.setSubmitting(false)
                                                }, 2000);
                                            })
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
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Loading...</span>) : "Login"}
                                                    />
                                                <p>Create your workspace register <Link to="/signup">Here</Link></p>
                                                <span><Link to="/forgot">Forgot Passwords</Link></span>
                                            </div>
                                        </Form>
                                        
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    
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