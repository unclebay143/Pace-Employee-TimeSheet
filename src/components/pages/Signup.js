// react 
import {React, Component} from 'react';
import { Link } from 'react-router-dom'

// layouts
import Button from '../layouts/Button';
import loginImage from './pages-images/login-img.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpSchema } from '../Validation/Schema'
import { TextInput, CheckbBox } from '../layouts/FormInput';
// import PropTypes from 'prop-types';
import { HomeButton } from '../layouts/HomeButton'

class Signup extends Component{
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
                            <HomeButton />
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
                                    confirmPassword: '',
                                    termsOfService: false
                                }}
                                validationSchema = {signUpSchema}
                                onSubmit={(values)=>alert("done!!!", values)}
                            >
                                {
                                    ({values, errors, touched})=>(
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
                                                    titleClassName={values.termsOfService ? "text-blue" : "pace-accent-color"}
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
                                                    label="Signup"
                                                    disabled={!values.termsOfService}
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
}

// Signup.propTypes = {
//     workSpaceName : PropTypes.string.isRequired(),
//     workSpaceEmail : PropTypes.string.isRequired(),
//     password : PropTypes.string.isRequired(),
//     confirmPassword : PropTypes.string.isRequired(),
// }

export default Signup;