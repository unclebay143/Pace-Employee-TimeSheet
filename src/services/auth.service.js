// Axios
import axios from "axios";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "../actions/types";
import { registrationFailLogger, registrationCompletedLogger, emailAlreadyExistLogger, invalidDetailsLogger, somethingWentWrongLogger, netWorkError } from "../toaster";

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
    console.log(response)
    if (response.data.code === 'ECONNREFUSED'){
      netWorkError()
    }
    // Set Formik form to loading - for the spinnig icon
    action.setSubmitting(true)

    // Toast success if the since the registration is sucessful
    registrationCompletedLogger()

    // Throw an action to reducer
    dispatch({ type: REGISTER_SUCCESS })

    // Login the user
    axios.post(AUTH_API_URL + 'login', { 
      email,
      password,
    })
    .then((response)=>{
      
      // Destructure the response to get the email and password (the response 'data' has a 'data' and accessToken in it)
      // const { data }  = response;
      // console.log(response.data)
      // console.log(response.data.data2[0])

      // Store the response token to the localstorage
      localStorage.setItem('token', JSON.stringify(response.data.data.accessToken));
      localStorage.setItem('currentUser', JSON.stringify(response.data.data.response[0]));
      
      // Store the data(user's) to the store
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.data.response[0]
      })
    })
    .catch((error)=>{ // CATCH LOGIN FAILURE
      console.log('LOGIN CATCH', error)
      
      // Set Formik form submission state to false (stop the spinning icon)
      action.setSubmitting(false)

      // Show something went wrong logger
      somethingWentWrongLogger()
      
      // Trigger lofin fail and store error in redux
      dispatch({
        type: LOGIN_FAIL,
        payload: error
      })
    }) 
  }) 
  .catch((error)=>{ // CATCH FOR REGISTRATION FAILURE
    // If the error from the backend is not handled well
    if(error === undefined || error.response === undefined){
      
      // Set Formik form submission state to false (stop the spinning icon)
      action.setSubmitting(false)

      // Show alert for something went wrong
      somethingWentWrongLogger()
      
      // Error code 500 means email already exist  
    }else if(error.response.status === 500 || error.response.data.message === 'This email already exists'){
      
      // taost a warning notification
      emailAlreadyExistLogger()
      
      // Set Formik form submission state to false (stop the spinning icon)
      action.setSubmitting(false)
    
    }else{
      // Set Formik form submission to false (stop the spinning icon)
      action.setSubmitting(false)

      // If there's more error, toast a failure warning
      registrationFailLogger()
    }
      
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
      console.log(response)
      // console.log(response.data.data.accessToken)
      // don't forget to destructure later
      localStorage.setItem('token', JSON.stringify(response.data.data.accessToken));
      localStorage.setItem('currentUser', JSON.stringify(response.data.data.response[0]));
      
      // Store the data(user's) to the store
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.data.response[0]
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


const logout = () => (dispatch) =>{
  setTimeout(() => {
    // Clear the application localStorage
    
    dispatch({
      type: LOGOUT
    })
    localStorage.clear()
  
  }, 1000);
};

const AuthService = {
  register,
  login,
  logout
}

export default AuthService;
