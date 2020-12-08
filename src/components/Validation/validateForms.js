// yup validation
import * as Yup from 'yup';

// regex for email
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// add form input to be validated here if not already listed

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
});

export const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Password Mismatch'),
    workSpaceName: Yup.string().required('Workspace Name is Required'),
    workSpaceEmail: Yup.string().required('Email is Required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid') 
})

// ContactUs form input validation
export const contactUsSchema = Yup.object().shape({
    name: Yup.string().required('name is Required'),
    email: Yup.string().email('Invalid email format').required('Email is Required'),
});

