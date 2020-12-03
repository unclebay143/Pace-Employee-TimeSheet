import {React, Component} from 'react';
import { Link } from 'react-router-dom'
import Button from '../layouts/Button';
import FormInput from '../layouts/FormInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages-styles/loginpage.css';
import loginImage from './pages-images/login-img.png';



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

    // 2:46AM working on password auth.... make sure you push username and password to the state and also init the password


    handleChange = event => {
        const { user } = this.state;    
        user[event.target.name] = event.target.value;
        this.setState({ user });
    };

    handleEmailSplit = () =>{
        console.log(this.state)
        const {user: { workSpaceEmail } } = this.state;
        const getUserName = workSpaceEmail.split('@')[0]
        const getCompanyName = workSpaceEmail.split('@')[1]
        this.handleWorkSpaceSubmit(getUserName, getCompanyName)
    };

    handleWorkSpaceSubmit = (splittedUserName, splittedCompanyName) => {
        const {db_username, db_company} = this.Database;
       
        // control err from here/consider using bootstrap err handler
        if (splittedUserName !== db_username){
            console.log("err from username")
        }

        else if (splittedCompanyName !== db_company){
            console.log("err from company")
        } 
        
        else{
            this.setState({isUserAuthenticated: true})
        }

    }
    render(){
       
        const {isUserAuthenticated} = this.state;
        return(
            <div className="container">
                <main className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <div className="form-con col-lg-5 mb-5">
                            <div className="form-heading mt-2">
                            <h3 className="mb-3">Signup</h3>
                            <h4 className="mb-4">Track every second!</h4>
                            </div>
                            <form className="" name="form">
                                <p id="errorMessage" />
                                <div className="row form-group signupForm">
                                    <FormInput 
                                        type="text"
                                        name="companyName"
                                        className="form-control lead"
                                        id="companyName"
                                        label="Workspace Name"
                                        labelClassName="lea"
                                        placeholder="Bascom Limited"
                                        onChange={this.handleChange}
                                        required
                                        />
                                    <FormInput 
                                        type="email"
                                        name="email"
                                        className="form-control lead"
                                        id="email"
                                        label="Email"
                                        labelClassName="lea mt-3"
                                        placeholder="Email"
                                        onChange={this.handleChange}
                                        required
                                        />

                                    <FormInput 
                                        type="password"
                                        name="password"
                                        className="form-control lead"
                                        id="password"
                                        label="Password"
                                        labelClassName="lea mt-3"
                                        placeholder="Password"
                                        onChange={this.handleChange}
                                        required
                                        />
                                    <FormInput 
                                        type="password"
                                        name="cpassword"
                                        className="form-control lead"
                                        id="cpassword"
                                        label="Confirm Password"
                                        labelClassName="lea mt-3"
                                        placeholder="Confirm Password"
                                        onChange={this.handleChange}
                                        required
                                        />
                                    {/* <FormInput 
                                        type="password"
                                        name="password"
                                        className="form-control lead"
                                        id="passwords"
                                        label="Password"
                                        labelClassName="lea mt-3"
                                        placeholder="password"
                                        onChange={this.handleChange}
                                        required
                                        /> */}
                                </div>
                                <Button 
                                    type="button"
                                    className="btn btn-primary"
                                    id="signUp"
                                    label="Signup"
                                    handleClick={this.handleEmailSplit}
                                
                                />
                                <p>Already have an account? <Link to="./login">Login</Link></p>
                        
                            </form>
                        </div>

                        {/* form container end */}

                        <div className="img-con col-lg-7">
                            {/* <img src={images[index]} alt="office timing" className="img-fluid" /> */}
                            <div className="login-intro-img mt-5 ml-5">
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