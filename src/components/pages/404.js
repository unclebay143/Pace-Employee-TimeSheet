import { useEffect } from "react";
import { Link }  from "react-router-dom";
import './pages-styles/404.css';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';


const formSchema = Yup.object().shape({
    surname: Yup.string()
        .min(2, 'Must')
        .max(50, "Name Long")
        .required("required"),
    secondName: Yup.string()
        .min(0, "greater than 2")
        .max(50, "rocess")
        .required("secired"),
    email: Yup.string()
        .email("Thisil")
        .required("emairocess")
})
const Formss = () =>{

    return(
        
        <div>

            <Formik
                initialValues = {
                    {
                        surname: '',
                        secondName: '',
                        email: ''
                    }
                }
                validationSchema = {formSchema}
                // onSubmit={handleSubmit}
                onSubmit={(values, errors) => {
                    // same shape as initial values
                    console.log(values.surname);
                    console.log(errors.surname);
                }}
                >


                {({values, errors, touched})=>(
                    <Form>
                        {errors.surname && touched.surname ? (<div>{errors.surname}</div>) : <p>no error</p>}
                        <Field name="surname" />
                        {errors.secondName && touched.secondName ? (<div>{errors.secondName}</div>) : <p>no error</p>}
                        <Field name="secondName" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : <p>no error</p>}
                        <Field name="email" type="email" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
</div>

)
}

const PageNotFound = () => {
    
    useEffect(()=>{
        document.title = 'Page not found | 404'
    })
    
    return(
        <>
            <div className="pageNotFound-wrapper">
                <div className="errorWrapper">
                    <h4 className="error404">404</h4> 
                    <p className="errorText">
                        You've clicked a broken link....let's get you back on track <Link to="/">Go Home</Link>
                    </p>
                </div>
            </div>

        </>
    )
}



export default Formss;


// import React from 'react';
//  import { Formik, Form, Field } from 'formik';
//  import * as Yup from 'yup';
 
//  const SignupSchema = Yup.object().shape({
//    firstName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    lastName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    email: Yup.string().email('Invalid email').required('Required'),
//  });
 
//  export const ValidationSchemaExample = () => (
//    <div>
//      <h1>Signup</h1>
//      <Formik
//        initialValues={{
//          firstName: '',
//          lastName: '',
//          email: '',
//        }}
//        validationSchema={SignupSchema}
//        onSubmit={values => {
//          // same shape as initial values
//          console.log(values);
//        }}
//      >
//        {({ errors, touched }) => (
//          <Form>
//            <Field name="firstName" />
//            {errors.firstName && touched.firstName ? (
//              <div>{errors.firstName}</div>
//            ) : null}
//            <Field name="lastName" />
//            {errors.lastName && touched.lastName ? (
//              <div>{errors.lastName}</div>
//            ) : null}
//            <Field name="email" type="email" />
//            {errors.email && touched.email ? <div>{errors.email}</div> : null}
//            <button type="submit">Submit</button>
//          </Form>
//        )}
//      </Formik>
//    </div>

//  );


//  export default ValidationSchemaExample;