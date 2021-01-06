// Axios
import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "../actions/types";
import { registrationFailLogger, registrationCompletedLogger, emailAlreadyExistLogger, invalidDetailsLogger, profileUpdateCompletedLogger, profileUpdateFailLogger } from "../toaster";

// API
import { AUTH_API_URL, options, currentUserFromLocalStorage, USER_PROFILE_URL } from "./root-endpoints";


// Function handling the user-Company registration
const register = (companyName, email, password, action) => (dispatch) =>{
    console.log(('in register action'));


    // Post user for validation and registration in the backend ( this method returns a response )
    return axios.post( AUTH_API_URL + 'signUp', {  
    companyName,
    email,
    password,
  }).then(()=>{

    // Set Formik form to loading - for the spinnig icon
    action.setSubmitting(true)

    // Toast success if the since the registration is sucessful
    registrationCompletedLogger()

    // Throw an action to reducer
    dispatch({ type: REGISTER_SUCCESS })

  
    axios.post(AUTH_API_URL + 'login', { 
      email,
      password,
    })
    .then((response)=>{
      
      // Destructure the response to get the email and password (the response 'data' has a 'data' and accessToken in it)
      // const { data, data: { accessToken } }  = response.data;

      const { data }  = response.data;
      // Store the response token to the localstorage
      localStorage.setItem('token', JSON.stringify(data));

      // Store the data(user's) to the store
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
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
      console.log(response);
      // Destructure the response to get the email and password (the response 'data' has a 'data' and accessToken in it)
      const { data }  = response;
      console.log(data);
      localStorage.setItem('token', JSON.stringify(data.data));
      
      console.log('here')
      // Store the data(user's) to the store
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
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


const fetchUserProfile = async (staffID) =>{
  console.log(staffID)
  console.log('in fetch')
  // Get token from the localstorage
      axios.get(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/${staffID}`, { headers: options })
      .then((response)=>{
          console.log(response)
          // profileUpdateCompletedLogger()
      }).catch((error)=>{
          console.log(error)
          // profileUpdateFailLogger()
      })
  // }

}

const logout = () => {

  // Clear the application localStorage
  localStorage.clear()

  // Reload the tab to clear the redux state
  setTimeout(()=>{
    window.location.reload();
  }, 1000)
};

const AuthService = {
  register,
  login,
  fetchUserProfile,
  logout
}

export default AuthService;
