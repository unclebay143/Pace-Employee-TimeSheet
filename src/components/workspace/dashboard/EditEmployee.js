// React
import { ErrorMessage, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../../layouts/Button';
import { TextInput } from '../../layouts/FormInput';
import { updateUserProfile } from '../../../actions/userSetting/settings';
import UserService from "../../../services/user.service";

const AddEmployee = () =>{
    const params = useParams();
    // const { currentUser } = useSelector(state => state.authenticationState)
    const [profile, setProfile] = useState({})
    useEffect(() => {
        // Get user from local storage
        const currentUser = JSON.parse(localStorage.getItem('token'));
        console.log(currentUser);
        UserService.fetchUserProfile(currentUser.response[0].staffID)
        .then((response)=>{
            // profileUpdateCompletedLogger()
            // Destructure response data
            const { 
                firstName,
                lastName,
                phoneNumber,
                email,
                address,
                userName,
                staffID
             } = response.data.data[0]
             // Store response destructuring into array of currenUserProfile
             const currentUserserProfile = {
                firstName,
                lastName,
                phoneNumber,
                email,
                address,
                userName,
                staffID
             }
            setProfile(currentUserserProfile)
            console.log(profile);
        })
        .catch((error)=>{
            console.log(error)
            // profileUpdateFailLogger()
        })
        console.log(profile)

        // Destructure user information
        // const { firstName, lastName, phone, email, address, username, staffID} = currentUser.response[0]

        // Store user information into an object
        // const currentUserProfile = {
        //     firstName,
        //     lastName,
        //     phone,
        //     email,
        //     address,
        //     username,
        //     staffID,
        // }
        
        // Store user profile into profile state
        // setProfile(currentUserProfile)

    }, [])

    return ( 
        <>
            <div className="container py-5">
                <style>
                    {
                        `
                        .dashboard-body-wrapper, .page-holder{
                            background: #e9ecef;
                        }
                        `
                    }
                </style>
                <div className="main-body">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <Formik
                                    initialValues = {profile}
                                    enableReinitialize
                                    // validationSchema={AddEmployeeSchema}
                                    onSubmit={(values)=>{
                                        updateUserProfile(values);
                                        alert(values)
                                    }
                                    }
                                >
                                    { (({ values, touched, errors, handleSubmit, isSubmitting, resetForm })=>{
                                        return <Form onSubmit={handleSubmit}>
                                            <div className="mb-5 text-gray">
                                                <pre>{JSON.stringify(values, null, 2)}</pre>
                                                <h5>EDIT PROFILE</h5>
                                            </div>
                                            <hr />

                                            {/* FIRST NAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">First Name</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="firstName"
                                                        id="firstName"
                                                        placeholder="Enter Firstname"
                                                        type="text" 
                                                        className={`form-control ${ touched.firstName && errors.firstName ? "is-invalid" : ""}`} 
                                                        />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="firstName"
                                                        className="invalid-feedback p-0"
                                                        />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* LAST NAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Last Name</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="lastName"
                                                        placeholder="Enter last Name"
                                                        type="text" 
                                                        className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`} 
                                                        id="lastName"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="lastName"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* USERNAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Username</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="username"
                                                        placeholder="Enter Username"
                                                        type="text" 
                                                        className={`form-control ${touched.username && errors.username ? "is-invalid" : ""}`} 
                                                        id="username"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="username"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* PHONE NUMBER */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Phone Number</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                <TextInput
                                                            name="phoneNumber"
                                                            placeholder="Enter Phone Number"
                                                            type="tel" 
                                                            className={`form-control ${touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""}`} 
                                                            id="phoneNumber"
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name="phoneNumber"
                                                            className="invalid-feedback p-0"
                                                        />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* EMAIL ADDRESS */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Email Address</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="email"
                                                        placeholder="Enter Valid Email Address"
                                                        type="text" 
                                                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`} 
                                                        id="email"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* CREATE PASSWORD */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Create Password</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="password"
                                                        placeholder="Create Password"
                                                        type="password" 
                                                        className={`form-control ${ touched.password && errors.password ? "is-invalid" : ""}`} 
                                                        id="password"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* CONFIRM PASSWORD */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Confirm Password</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="password2"
                                                        placeholder="Confirm Password"
                                                        type="password" 
                                                        className={`form-control ${ touched.password2 && errors.password2 ? "is-invalid" : ""}`} 
                                                        id="password2"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password2"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* ADDRESS */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Address</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="address"
                                                        id="address"
                                                        type="text" 
                                                        placeholder="143 work and connect"
                                                        className={`form-control ${touched.address && errors.address ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="address"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <Button 
                                                    type="submit" 
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Updating...</span>) : "Update"}
                                                    className="btn pace-btn-primary" 
                                                />
                                                <Button 
                                                    type="submit" 
                                                    className="btn pace-btn-accent d-none" 
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Please wait...</span>) : "Reset"}
                                                    onClick={(()=>resetForm())} 
                                                />
                                            </div>
                                        </Form>
                                    })
                                }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee;
