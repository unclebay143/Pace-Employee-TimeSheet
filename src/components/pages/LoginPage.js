import {React, Component} from 'react';
import Button from '../layouts/Button';
import FormInput from '../layouts/FormInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages-styles/loginpage.css';
// import loginPageIMAGE from './pages-images/loginPageIMAGE.svg';



class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                workSpaceEmail: '',
            },
            companyValidated: false
        }
    }

    Database = {
        db_username: "unclebay",
        db_company: "tiidelab.com"
    }






    handleChange = event => {
        console.log(this.state.user.workSpaceEmail)
        const { user } = this.state;    
        user[event.target.name] = event.target.value;
        this.setState({ user });
    };

    emailSplitter = () =>{
        // e.preventDefault();
        console.log(this.state)
        const {user: { workSpaceEmail } } = this.state;
        const getUserName = workSpaceEmail.split('@')[0]
        const getCompanyName = workSpaceEmail.split('@')[1]
        // console.log("workspace",workSpaceEmail)
        // console.log("getusername",getUserName)
        // console.log("getcompany",getCompanyName)
        this.handleSubmit(getUserName, getCompanyName)
    };

    handleSubmit = (splittedUserName, splittedCompanyName) => {
        // const {user: {username} } = this.state;
        console.log("in handsubmit")
        const {db_username, db_company} = this.Database;

        if (splittedUserName !== db_username){
            console.log("err from username")
        }

        else if (splittedCompanyName !== db_company){
            console.log("err from company")
        } 
        
        else{
            this.setState({companyValidated: true})
            console.log("final")
            console.log(this.state)
        }

    }
    render(){
        var images = [],
        index = 0;
        images[0] = 'https://fylodarklanding.netlify.app/images/illustration-intro.png'
        images[1] = 'https://fylodarklanding.netlify.app/images/illustration-intro.png'
        images[2] = 'https://fylodarklanding.netlify.app/images/illustration-intro.png'
        index = Math.floor(Math.random() * images.length);
        const {companyValidated} = this.state;
        return(
            <div className="container">
                <main className="container d-flex justify-content-center align-items-center mt-5">
                    <div className="row">
                        <div className="form-con col-lg-5 mb-5">
                            <div className="form-heading mt-5">
                            <h3 className="mb-3">Login</h3>
                            <h4 className="mb-5">Track every second!</h4>
                            </div>
                            <form className="mt-5" name="form">
                            {
                                companyValidated ? (
                                    <>
                                        <div className="form-group mt-b">
                                            <FormInput 
                                                type="password"
                                                name="password"
                                                className="form-control lead"
                                                id="password"
                                                label="Enter your password"
                                                labelClassName="lea"
                                                placeholder="password"
                                                onChange={this.handleChange}
                                                required
                                            />
                                        </div>
                                        <Button 
                                            type="button"
                                            className="btn btn-primary"
                                            id="loginBtn"
                                            label="Login"
                                            handleClick={this.emailSplitter}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <p id="errorMessage" />
                                        <div className="form-group mt-b">
                                            <FormInput 
                                                type="email"
                                                name="workSpaceEmail"
                                                className="form-control lead"
                                                id="email"
                                                label="Enter your work email address"
                                                labelClassName="lea"
                                                placeholder="Example@company.com"
                                                onChange={this.handleChange}
                                                required
                                                />
                                        </div>
                                        <Button 
                                            type="button"
                                            className="btn btn-primary"
                                            id="loginBtn"
                                            label="Next"
                                            handleClick={this.emailSplitter}
                                        
                                        />
                                    </>
                                )
                                
                                
                            }
                            
                                
                            </form>
                        </div>

                        {/* form container end */}

                        <div className="img-con col-lg-7">
                            <div className="login-intro-img">
                            <img src={images[index]} alt="office timing" className="img-fluid" />
                            </div>
                        </div>
                        
                    </div>
                </main>
            </div>

        )
    }
}


export default LoginPage;