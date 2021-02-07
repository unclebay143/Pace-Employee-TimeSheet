// This file contains Authorization token and reusable properties of the currentUsers 

// Header for authentication
let accessToken = JSON.parse(localStorage.getItem('token'));
let currentUserCompany = JSON.parse(localStorage.getItem('company'));

// let accessToken = localStorage.getItem('token')
let getCurrentUser = JSON.parse(localStorage.getItem('currentUser'));

// if(getCurrentUser === null){
//     getCurrentUser = null
// }

// CurrentUser in the localstorage
const currentUserFromLocalStorage = getCurrentUser;

// Current user companyID
const currentUserCompanyID = getCurrentUser === null ? null : currentUserFromLocalStorage.companyID;

// Current user staffID 
const currentUserStaffID = getCurrentUser === null ? null : currentUserFromLocalStorage.staffID;

// CurrentUserStaffID
const currentUserRoleID = getCurrentUser === null ? null : currentUserFromLocalStorage.roleID;

// currentUserEmail
const currentUserEmail = getCurrentUser === null ? null : currentUserFromLocalStorage.email;


console.log(currentUserEmail)
// CurrentUser Company Name
const currentUserCompanyName = currentUserCompany === null ? null : currentUserCompany[0].companyName;


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
  currentUserCompanyID,
  currentUserStaffID,
  currentUserRoleID,
  currentUserCompanyName,
  currentUserEmail,
}