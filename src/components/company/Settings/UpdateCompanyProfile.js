// React
import axios from 'axios';
import { ErrorMessage, Form, Formik,Field } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../../layouts/Button';
import { TextInput } from '../../layouts/FormInput';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authHeader, currentUserCompanyID } from '../../../services/auth-header';
import { FETCH_COMPANY_PROFILE_API } from '../../../services/root-endpoints';
import CompanyService from '../../../services/company/company-service';

const UpdateCompanyProfile = () =>{
    const params = useParams();
    const dispatch = useDispatch()
    // const { currentUser } = useSelector(state => state.authenticationState)
    // const [ staffID, setStaffID ] = useState('')
    const [companyProfile, setCompanyProfile] = useState({
        companyName: '',
        companyType: '',
        companyAdjective: '',
        email: '',
        currency: '',
    })
    useEffect(() => {
        const fetchCompanyProfile = async() =>{
           const { data } = await axios.get(FETCH_COMPANY_PROFILE_API + currentUserCompanyID, { headers: authHeader })
           setCompanyProfile(data.data[0])
        }

        fetchCompanyProfile()
        
    }, [])

    return ( 
        <>
            <div className="container">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="main-breadcrumb mt-2 ml-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to='/dashboard/company/settings' className="text-grey">
                                        Settings
                                </Link>
                            </li>
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to={`/dashboard/company/profile/${2}`} className="text-grey">
                                        Company Profile
                                </Link>
                            </li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Company Profile</li>
                        </ol>
                    </nav>
                    
                    {/* /Breadcrumb */}
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
                                    initialValues = {companyProfile}
                                    enableReinitialize
                                    // validationSchema={UpdateCompanyProfileSchema}
                                    onSubmit={(values, action)=>{
                                        CompanyService.updateCompanyProfile(values, action)
                                        .then(()=>alert('kkk'))
                                    }
                                    }
                                >
                                    { (({ values, touched, errors, handleSubmit, isSubmitting, resetForm })=>{
                                        return <Form onSubmit={handleSubmit}>
                                            <div className="mb-5 text-gray">
                                                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                                                <h5>EDIT COMPANY PROFILE</h5>
                                            </div>
                                            <hr />

                                            {/* COMPANY NAME */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Company Name</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="companyName"
                                                        id="companyName"
                                                        placeholder="Update Company Name"
                                                        type="text" 
                                                        className={`form-control ${ touched.companyName && errors.companyName ? "is-invalid" : ""}`} 
                                                        />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="companyName"
                                                        className="invalid-feedback p-0"
                                                        />
                                                </div>
                                            </div>
                                            <hr />

                                             {/* COMPANY TYPE */}
                                             <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Company Type</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="companyType"
                                                        id="companyType"
                                                        placeholder="Update Company Type"
                                                        type="text" 
                                                        className={`form-control ${ touched.companyType && errors.companyType ? "is-invalid" : ""}`} 
                                                        />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="companyType"
                                                        className="invalid-feedback p-0"
                                                        />
                                                </div>
                                            </div>
                                            <hr />
                                            
                                             {/* COMPANY CURRENCY */}
                                             <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Currency</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="currency"
                                                        id="currency"
                                                        placeholder="Update Company Currency"
                                                        type="text" 
                                                        className={`form-control ${ touched.currency && errors.currency ? "is-invalid" : ""}`} 
                                                        />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="currency"
                                                        className="invalid-feedback p-0"
                                                        />
                                                </div>
                                            </div>
                                            <hr />

                                             {/* COMPANY ADJECTIVE */}
                                             <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Company Adjective</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="companyAdjective"
                                                        id="companyAdjective"
                                                        placeholder="Update Company Adjective"
                                                        type="text" 
                                                        className={`form-control ${ touched.companyAdjective && errors.companyAdjective ? "is-invalid" : ""}`} 
                                                        />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="companyAdjective"
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

export default UpdateCompanyProfile;
