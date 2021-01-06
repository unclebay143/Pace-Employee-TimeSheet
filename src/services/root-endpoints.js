//  This file contains all the root endpoint for Api in this application



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
const userAccessToken = getCurrentUser.accessToken
const currentUserFromLocalStorage = getCurrentUser.response[0]
const options = {
    'Content-Type': 'application/json',
    "Accept": "application/json",
    'Authorization': `basic ${userAccessToken}`
  }

const AUTH_API_URL = 'https://pacetimesheet.herokuapp.com/api/users/';
const USER_PROFILE_URL = 'https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/'





const TODO_API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';



// const TASK_API_URL = 'https://api.fake.rest/6c02d615-a40c-47ce-89c1-a4cf5a547ba0/task'
const TASK_API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';

export {
    options,
    currentUserFromLocalStorage,
    userAccessToken,
    AUTH_API_URL,
    USER_PROFILE_URL,


    TODO_API_URL,
    TASK_API_URL
}