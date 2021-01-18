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
    companyName: Yup.string().max(15, 'Workspace Name must be less than 16').required('Workspace Name is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().min(4, 'Password must be at least 7 characters').required('Password is required'),
    confirmPassword: Yup.string().required('Please confirm password').oneOf([Yup.ref('password')], 'Password Mismatch'),
    termsOfService : Yup.bool().oneOf([true], 'Please review and accept Terms and Condition')
})

// Change Password
export const changePasswordSchema = Yup.object().shape({
    password: Yup.string().min(4, 'Password must be at least 7 characters').required('Password is required'),
    confirmPassword: Yup.string().required('Please confirm password').oneOf([Yup.ref('password')], 'Password Mismatch'),
})

// ContactUs form input validation
export const contactUsSchema = Yup.object().shape({
    contactName: Yup.string().required('Name is required'),
    contactEmail: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message cannot be blank'),
});

//  AddEmployee Schema
export const AddEmployeeSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email Format').required('Email is required'),
    billRateCharge: Yup.number().required('Bill Rate Charge is required'),
    expectedWorkHours: Yup.number().required('Expected Work Hour is required'),
    departmentID: Yup.string().required('Department is required'),
    roleID: Yup.string().required('Role is required'),
    staffRole: Yup.string().required('Position is required')
})



//  Todo

export const TodoListSchema = Yup.object().shape({
    title: Yup.string().required('Todo Title is required'),
    // dueDate: Yup.date().required("Due Date is Required").nullable('kll')
})