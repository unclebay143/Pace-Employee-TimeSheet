import { toast } from 'react-toastify'; 


// Common
const netWorkError  =  () => toast.warning('Network Error')


//  Login Toast
const invalidDetailsLogger = () => toast.warning('Invalid Login details');
const userIsAuthenticatedLogger = () => toast.info('Logging in');


// Registration Toast

const registrationFailLogger = () => toast.warning('Registration Failed');
const registrationCompletedLogger = () => toast.info('Registration Successful');
const emailAlreadyExistLogger = () => toast.warning('Email Already Exist')


// Logout Toast
const logOutSuccess = () => toast.warning('Logout Successful')


// Todo
const invalidTodoTitle  =  () => toast.warning('Todo title is required')





export{
    invalidDetailsLogger,
    userIsAuthenticatedLogger,
    emailAlreadyExistLogger,
    registrationFailLogger,
    registrationCompletedLogger,
    logOutSuccess,
    invalidTodoTitle,
    netWorkError
}