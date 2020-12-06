import {React, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages-styles/form.css';
import './pages-styles/util.css';
import { Link } from 'react-router-dom'
import Button from '../layouts/Button';
import loginImage from './pages-images/login-img.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../Validation/validateForms'


class SignupPage extends Component{
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
        document.title = "Signup | Pace "
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
                            <div className="form-heading mt-2">
                            <h3 className="mb-3">Signup</h3>
                            <h4 className="mb-4">Track every second!</h4>
                            </div>
                            <Formik 
                            
                                initialValues={{
                                    workSpaceName : '',
                                    workSpaceEmail : '',
                                    workSpacePhone : '',
                                    password: '',
                                    confirmPassword: ''
                                }}
                                validationSchema = {validationSchema}
                                onSubmit={(values)=>alert("done!!!", values)}
                            >
                                {
                                    ({values, errors, touched})=>(
                                        <Form>
                                            <pre>{JSON.stringify(values, null, 2)}</pre>
                                            <div className="form-group signupForm">
                                                <div className="workSpaceName-wrapper">
                                                    <label className="mt-3">Workspace Name</label>
                                                    <Field 
                                                        name="workSpaceName"
                                                        id="workSpaceName"
                                                        type="text"
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
                                                    <label className="mt-3">Email</label>

                                                    <Field 
                                                        name="workSpaceEmail"
                                                        id="workSpaceEmail"
                                                        type="email"
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
                                                <div className="password-wrapper">

                                                    <label className="mt-3">Password</label>

                                                    <Field 
                                                        name="password"
                                                        id="password"
                                                        type="password"
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
                                                <div className="confirmPassword-wrapper">

                                                <label className="mt-3"> Confirm Password</label>

                                                <Field 
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    type="password"
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
                                                <Button 
                                                    type="submit"
                                                    className="btn btn-primary mt-3"
                                                    id="signUp"
                                                    label="Signup"
                                                    />
                                                    <button type="submit">submit</button>
                                                <p>Already have an account? <Link to="./login">Login</Link></p>
                                </div>
                                        </Form>
                                    )
                                }

                            </Formik>
                        </div>

                        {/* form container end */}

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
}


export default SignupPage;