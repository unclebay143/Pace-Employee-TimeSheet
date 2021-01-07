// This file contains Authorization token and reusable properties of the currentUsers 

// Header for authentication
let getCurrentUser = JSON.parse(localStorage.getItem('token'));
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
const userAccessToken = getCurrentUser.accessToken;

// currentUser in the localstorage
const currentUserFromLocalStorage = getCurrentUser.response[0];

// Current user companyID
const currentUserCompanyID = currentUserFromLocalStorage.companyID;

// Authorization token
const authHeader = {
  'Content-Type': 'application/json',
  "Accept": "application/json",
  'Authorization': `basic ${userAccessToken}`
}




export {
  authHeader,
  userAccessToken,
  currentUserFromLocalStorage,
  currentUserCompanyID
}