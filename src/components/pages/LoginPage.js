import {React, Component} from 'react';
import Button from '../layouts/Button';
import FormInput from '../layouts/FormInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages-styles/loginpage.css';
import loginImage from './pages-images/login-img.png';
import { Link } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                workSpaceEmail: '',
            },
            isUserAuthenticated: false
        }
    }

    componentDidMount(){
        document.title = 'Login | Pace'
    }

    loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
      });


    Database = {
        db_username: "unclebay",
        db_company: "tiidelab.com",
        db_password: "samuel",
        user_profile: {
            fullName: "Ayodele Samuel Adebayo",
            role: "Admin",
            department: "Web Development",
            salary: 2300000,
        }
    }




    render(){
        const {isUserAuthenticated} = this.state;
        return(
            <div className="container">
                <main className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <div className="form-con col-lg-5 mb-5">
                            <Link to="/">
                                <i className="fas fa-long-arrow-alt-left"></i>
                            </Link>
                            <div className="form-heading mt-5">
                            <h3 className="mb-3">Login</h3>
                            <h4 className="mb-5">Welcome back!</h4>
                            </div>
                            <div className="mt-5" name="form">
                                <p id="errorMessage" />
                                <div className="form-group mt-b">
                                    <Formik
                                        initialValues={{
                                            email: '',
                                            password: ''
                                        }}
                                        validationSchema = {this.loginSchema}
                                            onSubmit={({setSubmitting})=>{
                                            setSubmitting(false)
                                        }}
                                    >{({touched, errors, isSubmitting}) => (
                                        <Form>
                                            <div className="email-wrapper pb-3">
                                                <label className="">Enter your workspace address</label>
                                                <Field 
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
                                                <label className="mt-3">Password</label>
                                                <Field 
                                                    name="password"
                                                    type="password"
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
                                                {/* <Link to="/dashboard"> */}
                                                    <Button 
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        id="loginBtn"
                                                        disabled={isSubmitting}
                                                        label={isSubmitting ? "Loading...." : "Login"}
                                                    />
                                                {/* </Link> */}
                                                <p>Create your workspace register <Link to="/signup">Here</Link></p>

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
}


export default LoginPage;