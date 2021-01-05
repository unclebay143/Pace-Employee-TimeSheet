// Axios
import axios from "axios";
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actions/types";
import { registrationFailLogger, registrationCompletedLogger, emailAlreadyExistLogger, invalidDetailsLogger } from "../toaster";

// API
import { AUTH_API_URL } from "./root-endpoints";


// Function handling the user-Company registration
const register = (companyName, email, password, action) => (dispatch) =>{

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

  
    axios.post(AUTH_API_URL + 'login', { 
      email,
      password,
    })
    .then((response)=>{
      
      // Destructure the response to get the email and password (the response 'data' has a 'data' and accessToken in it)
      const { data: { accessToken } }  = response.data;
    
      // Store the response token to the localstorage
      localStorage.setItem('token', JSON.stringify(accessToken));

      // Store the data(user's) to the store
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      })
    })
    .catch((error)=>{

      // Error code 500 means email already exist
      console.log(error)
      console.log(error.response)
      console.log(error.response.status)
      if(error && error.response.status === 500){
        
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
  }) 
}


// Function handling logging into the application
const login = ( email, password, action ) => ( dispatch ) =>{

  // Post user for validation in the backend
  return axios.post(AUTH_API_URL + 'login', {
      email,
      password,
    })
    .then((response)=>{
      
      // Destructure the response to get the email and password (the response 'data' has a 'data' and accessToken in it)
      const { data: { accessToken } }  = response.data;

      // Store the response token to the localstorage
      localStorage.setItem('token', JSON.stringify(accessToken));

      // Store the data(user's) to the store
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      })
    })
    .catch((error)=>{
        // If user details returns invalid from backend, toast an invalidDetails notification
        invalidDetailsLogger()

        // Set form submission to false (spinning icon) after 2 seconds for the invalidDetails notification to show
        setTimeout(() => {
            action.setSubmitting(false)
        }, 2000);
      });
};


const fetchUserProfile = () =>{
  console.log('In service');
  // Get token from the localstorage
  const token = localStorage.token;
  if(token){
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
      } 
    }
      return axios('https://pacetimesheet.herokuapp.com/', config)
      .then((response)=>console.log(response))

  }
}

const logout = () => {
  localStorage.removeItem('user');
};

const AuthService = {
  register,
  login,
  fetchUserProfile,
  logout,
}

export default AuthService;
