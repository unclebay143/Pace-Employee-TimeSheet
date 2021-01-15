import { toast } from 'react-toastify'; 


// Common
const netWorkError  =  () => toast.warning('Network Error')
const sessionExpired = () =>  toast.warning('Session Expired')
const somethingWentWrongLogger = () =>  toast.warning('Something went wrong, Please try again')



//  Login Toast
const invalidDetailsLogger = () => toast.warning('Invalid Login details');
const userIsAuthenticatedLogger = () => toast.info('Logging in');
const welcomeBackLogger = () => toast.info('Welcome Back');


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
const profileUpdateFailLogger = () => toast.warning('Update Failed, Please try again')

// Todo
const invalidTodoTitle  =  () => toast.warning('Todo title is required')


// Tasks
export const taskNotSent = () => toast.warning('Task Not Sent Try again')
export const taskSent = () => toast.info('Task Sent Successfully')


// Calendar
export const calendarEventNotSavedLogger = () => toast.warning('Event Not Set Please Try again')
export const eventAddedSuccessfullyLogger = () => toast.info('Event added Successfully')




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
    welcomeBackLogger,
}