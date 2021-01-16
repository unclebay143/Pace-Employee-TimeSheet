import { ErrorMessage, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { TextInput } from '../layouts/FormInput'
import Button from '../layouts/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { updatePassword } from '../../actions/user/userAction';
import { changePasswordSchema } from '../Validation/Schema';

export default function ChangePassword() {
    const [staffID, setStaffID] = useState();
    const params = useParams();
    const dispatch = useDispatch()
    
    useEffect(() => {
        const staffID = params.id; // get id from urls(path)
        setStaffID(staffID);

    }, []);
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
                            Change Password
                        </li>
                    </ol>
                </nav>
                {/* /Breadcrumb */}
                <div className="main-body">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <Formik
                                    initialValues = {{
                                        password: '',
                                        confirmPassword: '',
                                    }}
                                    enableReinitialize
                                    validationSchema={changePasswordSchema}
                                    onSubmit={(values, action)=>{
                                        dispatch(updatePassword(values, action))
                                    }
                                    }
                                >
                                    { (({ values, touched, errors, handleSubmit, isSubmitting, resetForm })=>{
                                        return <Form onSubmit={handleSubmit}>
                                            <div className="mb-5 text-gray">
                                                {/* <pre>{JSON.stringify(values, null, 2)}</pre>  */}
                                                <h5>CHANGE PASSWORD</h5>
                                            </div>
                                            <hr />
                                        {/* CREATE PASSWORD */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">New Password</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="password"
                                                        placeholder="Create Password"
                                                        type="password" 
                                                        className={`form-control ${ touched.password && errors.password ? "is-invalid" : ""}`} 
                                                        id="password"
                                                        autoComplete='on'
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
                                                        autoComplete='on'
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="password2"
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
