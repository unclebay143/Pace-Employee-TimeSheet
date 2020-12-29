import { toast } from 'react-toastify'; 

//  Login Toast
const invalidDetailsLogger = () => toast.warning('Invalid Login details');
const userIsAuthenticatedLogger = () => toast.info('Logging in');


// Registeration Toast

const registrationFailLogger = () => toast.warning('Registration Failed');
const registrationCompletedLogger = () => toast.info('Registration Successful');


// Logout Toast
const logOutSuccess = () => toast.warning('Logout Successful')


export{
    invalidDetailsLogger,
    userIsAuthenticatedLogger,
    registrationFailLogger,
    registrationCompletedLogger,
    logOutSuccess
}