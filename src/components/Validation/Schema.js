// Add form input to be validated here if not already listed


// yup validation
import * as Yup from 'yup';

// regex for email
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// Forgot Password
export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalide email format').required('Email is required')
})

// Reset Password
export const resetPasswordSchema = Yup.object().shape({
    password: Yup.string().min(5, 'Password must be more than 7').required('Password is required'),
    confirmPassword: Yup.string().required('Please confirm password').oneOf([Yup.ref('password')], 'Password Mismatch')
})

// Login Schema
export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

// Signup Schema
export const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
    confirmPassword: Yup.string().required('Please confirm password').oneOf([Yup.ref('password')], 'Password Mismatch'),
    workSpaceName: Yup.string().required('Workspace Name is required'),
    workSpaceEmail: Yup.string().required('Email is required'),
    // phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    termsOfService : Yup.bool().oneOf([true], 'Please review and accept Terms and Condition')
})

// ContactUs form input validation
export const contactUsSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message cannot be blank'),
});

//  AddEmployee Schema
export const AddEmployeeSchema = Yup.object().shape({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string().email('Invalid Email Format').required('Email is required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
    salary: Yup.number().required('Salary is required'),
    password: Yup.string().min(7).required('Password is required'),
    password2: Yup.string().required('Please confirm password').oneOf([Yup.ref('password')], 'Password mismatch'),
    department: Yup.string().required('Department is required'),
    role: Yup.string().required('Role is required'),
    type: Yup.string().required('Type is required')
})

