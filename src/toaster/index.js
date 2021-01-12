import { toast } from 'react-toastify'; 


// Common
const netWorkError  =  () => toast.warning('Network Error')
const sessionExpired = () =>  toast.warning('Session Expired')
const somethingWentWrongLogger = () =>  toast.warning('Something went wrong')



//  Login Toast
const invalidDetailsLogger = () => toast.warning('Invalid Login details');
const userIsAuthenticatedLogger = () => toast.info('Logging in');


// Registration Toast
const registrationFailLogger = () => toast.warning('Registration Failed');
const registrationCompletedLogger = () => toast.info('Registration Successful');
const emailAlreadyExistLogger = () => toast.warning('Email Already Exist')


// Manage Employee Toast
const emailAlreadyExist = () => toast.warning('Email Already Exist');


// Logout Toast
const logOutSuccessLogger = () => toast.warning('Logout Successful')

// Users Setting Toasts
const profileUpdateCompletedLogger = () => toast.info('Profile Update Successfully');
const profileUpdateFailLogger = () => toast.warning('Profile Update Failed')

// Todo
const invalidTodoTitle  =  () => toast.warning('Todo title is required')





export{
    invalidDetailsLogger,
    userIsAuthenticatedLogger,
    emailAlreadyExistLogger,
    registrationFailLogger,
    registrationCompletedLogger,
    logOutSuccessLogger,
    invalidTodoTitle,
    netWorkError,
    somethingWentWrongLogger,
    sessionExpired,
    profileUpdateCompletedLogger,
    profileUpdateFailLogger,
    emailAlreadyExist,
}