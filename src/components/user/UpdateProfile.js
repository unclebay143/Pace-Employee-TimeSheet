// React
import { Link } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';

// Layouts
import Button from '../layouts/Button';
import { TextInput } from '../layouts/FormInput';

//  Actions
import { syncCurrentUser, updateUserProfile } from '../../actions/user/userAction';

// Services helper
import Loader from '../loader/Loader';
import ChangePassword from './ChangePassword';

const UpdateProfile = () =>{
    const { currentUser } = useSelector(state => state.authenticationState)
    const params = useParams(); 
    const dispatch = useDispatch();
    const [ staffID, setStaffID ] = useState('');
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true)

    // User credentials
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        userName: '',
    });

    useEffect(() => {
        const staffID = params.id; // get id from urls(path)
        setStaffID(staffID);

        // Destructure the user information from the redux
        if(currentUser){
            const {
                firstName,
                lastName,
                userName,
                phoneNumber,
                email,
                address,
                
            } = currentUser
        
            // Set the destructure user information into the profile state (ES6 syntax)
            setProfile({
                firstName : typeof firstName !== 'string' ? '' : firstName,
                lastName : typeof lastName !== 'string' ? '' : lastName,
                userName,
                phoneNumber: typeof phoneNumber === null || undefined ? '' : phoneNumber,
                email,
                address : typeof address !== 'string' ? '' : address,
                // userName : typeof userName !== 'string' ? '' : userName,
            })

            setIsLoading(false)
        }
    }, [params.id, currentUser])
    
    if(isLoading){
        return(
            <>
                <Loader />
            </>
        )
    }

    return ( 
        <>
            <div className="container">
                <style>
                    {
                        `
                        .dashboard-body-wrapper, .page-holder{
                            background: #e9ecef;
                        }
                        `
                    }
                </style>
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="main-breadcrumb pt-3">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to={`/dashboard/profile/${params.id}`}>
                                Profile
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Edit Profile
                        </li>
                    </ol>
                </nav>
                {/* /Breadcrumb */}
                <div className="main-body">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <Formik
                                    initialValues = {profile}
                                    enableReinitialize
                                    // validationSchema={UpdateProfileSchema}
                                    onSubmit={(values, action)=>{
                                        dispatch(updateUserProfile(values, staffID, action))
                                        .then((response)=>{
                                            dispatch(syncCurrentUser(staffID))
                                            history.push(`/dashboard/profile/${params.id}`)
                                        })
                                        .catch((error)=>{
                                            console.log(error)
                                        })
                                    }
                                    }
                                >
                                    { (({ values, touched, errors, handleSubmit, isSubmitting, resetForm })=>{
                                        return <Form onSubmit={handleSubmit}>
                                            <div className="mb-5 text-gray">
                                                {/* <pre>{JSON.stringify(values, null, 2)}</pre>  */}
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
                                                        name="userName"
                                                        placeholder="Enter username"
                                                        type="text" 
                                                        className={`form-control ${touched.userName && errors.userName ? "is-invalid" : ""}`} 
                                                        id="userName"
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="userName"
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
                                                    label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Updating</span>) : "Update"}
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

export default UpdateProfile;
