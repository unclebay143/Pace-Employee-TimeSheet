//  This file contains all the root endpoint for Api in this application



// Handles Authentication, /signUp, /login
const AUTH_API_URL = 'https://pacetimesheet.herokuapp.com/api/users/';

// Update user personal profile (/:staffID)
const USER_PROFILE_URL = 'https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/'


// TODO API
const TODO_API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';



// const TASK_API_URL = 'https://api.fake.rest/6c02d615-a40c-47ce-89c1-a4cf5a547ba0/task'
const TASK_API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';

// ACCEPTED TASK API
const ACCEPTED_TASK_API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';



//>>>>>>>>>>> MANAGE DEPARTMENT API


// (POST/ADD NEW DEPARTMENT)
const ADD_DEPARTMENT_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/addDepartment/'

// GET ALL DEPARTMENT
const GET_DEPARTMENT_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/department/'





export {
    AUTH_API_URL,
    USER_PROFILE_URL,


    ADD_DEPARTMENT_API,
    GET_DEPARTMENT_API,


    TODO_API_URL,

    
    TASK_API_URL,
    ACCEPTED_TASK_API_URL
}