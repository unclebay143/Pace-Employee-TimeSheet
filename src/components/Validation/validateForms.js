// Add form input to be validated here if not already listed


// yup validation
import { yupToFormErrors } from 'formik';
import * as Yup from 'yup';

// regex for email
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


// Login Schema
export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

// Signup Schema
export const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Password Mismatch'),
    workSpaceName: Yup.string().required('Workspace Name is required'),
    workSpaceEmail: Yup.string().required('Email is required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid') 
})

// ContactUs form input validation
export const contactUsSchema = Yup.object().shape({
    name: Yup.string().required('name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
});

//  AddEmployee Schema
export const AddEmployeeSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string().email("Invalid Email Format").required("Email is required"),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    salary: Yup.number().required("Salary is required"),
    password: Yup.string().min(7).required("Password is required"),
    password2: Yup.string().required("Please confirm password").oneOf([Yup.ref("password")], 'Password mismatch'),
    department: Yup.string().required("Department is required"),
    role: Yup.string().required("Role is required"),
    type: Yup.string().required("Type is required")
})

