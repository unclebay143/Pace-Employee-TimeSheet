// Axios
import axios from "axios";
import { REGISTER_SUCCESS } from "../actions/types";
import { registrationFailLogger, registrationCompletedLogger, emailAlreadyExistLogger, invalidDetailsLogger } from "../toaster";

// API
import { AUTH_API_URL } from "./root-endpoints";


// Function handling the user-Company registration
const register = (values, action) => (dispatch) =>{
  // Destructure values to get companayName, email, password from the Formik registration form
  const { companyName, email, password } = values;

    // Post user for validation and registration in the backend ( this method returns a response )
    return axios.post( AUTH_API_URL + 'signUp', {  
    companyName,
    email,
    password,
  }).then((response)=>{
    // Set Formik form to loading - for the spinnig icon
    action.setSubmitting(true)

    // Toast success if the since the registration is sucessful
    registrationCompletedLogger()

    // Throw an action to reducer
    dispatch({ type: REGISTER_SUCCESS, payload: response.data})

    // Destructure the response to get the email and password (the response 'data' has a 'data' in it)
    const { data: { email, password } } = response.data

    // Revoke login function to sign the user in
    login( email, password )
})
.catch((error)=>{
    // Error code 500 means email already exist
    if(error.response.status === 500){
      
      // taost a warning notification
      emailAlreadyExistLogger()

      // Set Formik form submission state to false (stop the spinning icon)
      action.setSubmitting(false)
    
    }else{
      
      // If there's more error, toast a failure warning
      registrationFailLogger()

      // Set Formik form submission to false (stop the spinning icon)
      action.setSubmitting(false)
    }
})

};


// Function handling logging into the application
const login = (email, password, action) => {
  
  // Post user for validation in the backend
  return axios.post(AUTH_API_URL + 'login', {
      email,
      password,
    })
    .then((response)=>{
      
      // Destructure the response to get the email and password (the response 'data' has a 'data' in it)
      const { data: { accessToken } }  = response.data;

      // Store the response token to the localstorage
      localStorage.setItem('token', JSON.stringify(accessToken));
    })
    .catch(()=>{
        // If user details returns invalid from backend, toast an invalidDetails notification
        invalidDetailsLogger()

        // Set form submission to false (spinning icon) after 2 seconds for the invalidDetails notification to show
        setTimeout(() => {
            action.setSubmitting(false)
        }, 2000);
      });
};

const logout = () => {
  localStorage.removeItem('user');
};

const AuthService = {
  register,
  login,
  logout,
}

export default AuthService;
