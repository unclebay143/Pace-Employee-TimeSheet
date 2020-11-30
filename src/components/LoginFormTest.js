import { React, Component} from 'react';
import FormInput from './layouts/FormInputTestWithValidation';
import Button from './layouts/Button'


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
      const {
        user: { username, password }
      } = this.state;
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
            <p>Welcome onboard, {username}!</p>
          ) : (
            <>
              <h3>Login!</h3>
              <FormInput
                label="Username"
                name="username"
                type="text"
                value={username}
                onChange={this.handleChange}
                placeholder="Enter username..."
                error={errors.username}
                required
                className="input"
              />
  
              <FormInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Enter password..."
                error={errors.password}
                className="input"
                required
              />
  
              <Button
                type="submit"
                label="Submit"
                className="button"
                handleClick={this.onSubmit}
              />
            </>
          )}
        </>
      );
    }
  }
  


  export default LoginFormTest