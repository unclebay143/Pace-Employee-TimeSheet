// This file contains Authorization token and reusable properties of the currentUsers 

// Header for authentication
let accessToken = localStorage.getItem('token');
let getCurrentUser = localStorage.getItem('currentUser');
if(!getCurrentUser){
    getCurrentUser = {
            accessToken: '',
            response: [
                {
                    // firstName: 'sam'
                }
            ]
    }
}

// Current user token
const userAccessToken = accessToken;

// currentUser in the localstorage
const currentUserFromLocalStorage = getCurrentUser.response[0];

// Current user companyID
const currentUserCompanyID = currentUserFromLocalStorage.companyID;

// Authorization token
const authHeader = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  mode: 'no-cors',
  'Authorization': `basic ${userAccessToken}`
}




export {
  authHeader,
  getCurrentUser,
  userAccessToken,
  currentUserFromLocalStorage,
  currentUserCompanyID
}