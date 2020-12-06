import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Password Mismatch'),
    workSpaceName: Yup.string().required('Workspace Name is Required'),
    workSpaceEmail: Yup.string().required('Worspace Email is Required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid') 
  });




