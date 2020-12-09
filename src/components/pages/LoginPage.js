// react
import {React, Component} from 'react';
import Button from '../layouts/Button';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages-styles/form.css';
import './pages-styles/util.css';
// layouts , formik
import loginImage from './pages-images/login-img.png';
import { Link } from 'react-router-dom';
import {Formik, Form, ErrorMessage} from 'formik';
import { TextInput } from '../layouts/FormInput';
import { loginSchema } from '../Validation/validateForms';
import PropTypes from 'prop-types';
import auth from '../Authentication/LoginAuth';



class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                workSpaceEmail: '',
                workSpacePassword: ''
            },
            isUserAuthenticated: false
        }
    }

    componentDidMount(){
        document.title = 'Login | Pace'
    }
   
    
    
    render(){
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
                                        validationSchema = {loginSchema}
                                        onSubmit={(values)=>auth(values)}
                                        
                                    >{({touched, errors, isSubmitting, handleSubmit, handleChange}) => (
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
                                                    onBlur = {this.handleChange}
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
                                            {/* <Link to="/dashboard"> */}

                                                <Button 
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    id="loginBtn"
                                                    disabled={isSubmitting}
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Loading...</span>) : "Login"}
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

LoginPage.propTypes = {
    workSpaceEmail: PropTypes.string.isRequired,
    password: PropTypes.any.isRequired
};


export default LoginPage;