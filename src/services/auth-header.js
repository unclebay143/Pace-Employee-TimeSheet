// This file contains Authorization token and reusable properties of the currentUsers 

// Header for authentication
let accessToken = JSON.parse(localStorage.getItem('token'));

// let accessToken = localStorage.getItem('token')
let getCurrentUser = JSON.parse(localStorage.getItem('currentUser'));


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

// currentUser in the localstorage
const currentUserFromLocalStorage = getCurrentUser;

// Current user companyID
const currentUserCompanyID = currentUserFromLocalStorage.companyID;

// Authorization token
const authHeader = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'mode': 'no-cors',
  'Authorization': `Basic ${accessToken}`
}




export {
  authHeader,
  getCurrentUser,
  accessToken,
  currentUserFromLocalStorage,
  currentUserCompanyID
}