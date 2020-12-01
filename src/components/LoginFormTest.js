import { React, Component} from 'react';
import FormInput from './layouts/FormInputTestWithValidation';
import Button from './layouts/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginFormTest extends Component {
    state = {
      user: {
        username: "",
        password: ""
      },
      errors: {},
      submitted: false
    };
  
    handleChange = event => {
        console.log(this.state)
        console.log(event.target.name)
      const { user } = this.state;
      user[event.target.name] = event.target.value;
      this.setState({ user });
    };
  
    onSubmit = () => {
      const { user: { username, password } } = this.state;
      let err = {};
  
      if (!username) {
        err.username = "Enter your username!";
      }
  
      if (password.length < 8) {
        err.password = "Password must be at least 8 characters!";
      }
  
      this.setState({ errors: err }, () => {
        if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
          this.setState({ submitted: true });
        }
      });
    };
  
    render() {
      const {
        submitted,
        errors,
        user: { username, password }
      } = this.state;
      return (
        <>
          {submitted ? (
            <p className="text-center mt-5 lead">Welcome onboard, {username}!</p>
          ) : (
            <>
                <div className="container m-5 ">
                    <h3 className="h3 mb-5 text-success b-5">Login!</h3>
                        <div className="row d-flex justify-content-center">
                            <form className="form-group">
                                <FormInput
                                    label="Username"
                                    labelClassName="text-success"
                                    name="username"
                                    type="text"
                                    value={username}
                                    onChange={this.handleChange}
                                    placeholder="Enter username..."
                                    error={errors.username}
                                    required
                                    className="form-control mt-3 mb-3"
                                />
                    
                                <FormInput
                                    label="Password"
                                    labelClassName="text-success"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    placeholder="Enter password..."
                                    error={errors.password}
                                    className="form-control mt-3 mb-3"
                                    required
                                />
                    
                                <Button
                                    type="submit"
                                    label="Submit"
                                    className="btn btn-success form-control"
                                    handleClick={this.onSubmit}
                                />

                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
      );
    }
  }
  


  export default LoginFormTest