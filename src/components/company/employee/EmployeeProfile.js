// React
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getCompanyEmployees } from '../../../actions/employee/employeeAction';
import Button from '../../layouts/Button';
import Loader from '../../loader/Loader';
import unclebay from '../../pages/pages-images/ayodele_samuel_adebayo.jpg';



const ProfileRow = (props) => {
    const { title, label } = props
    return(
        <>
            <div className="row">
                <div className="col-sm-3">
                <h6 className="mb-0">{title}</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    {label}
                </div>
            </div>
            <hr />
        </>
    )
}



const EmployeeProfile = () =>{
    const params = useParams()
    const { employees, isFetching } = useSelector(state => state.employees)
    const [ employeeProfile, setEmployeeProfile ] = useState([{}])
    const dispatch = useDispatch()
    
    useEffect(() => {
        // fetch the company's employees from the server
        dispatch(getCompanyEmployees())
    },[dispatch])


    useEffect(() => {
        const getEmployeeProfile = employees.filter((employee)=>employee.staffID === parseInt(params.id))
        setEmployeeProfile(getEmployeeProfile[0])
    }, [employees, params.id, setEmployeeProfile])

    if(employeeProfile === undefined){
        return(
            <>
                <Loader />
            </>
        )
    }

    const fullName = employeeProfile.firstName + ' ' + employeeProfile.lastName
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
                <div className="main-body">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="main-breadcrumb mt-2">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" aria-current="page">
                                <Link to='/dashboard/employee-list' className="text-grey">
                                        Employee List
                                </Link>
                            </li>
                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                        </ol>
                    </nav>
                    
                    {/* /Breadcrumb */}
                    <div className="row gutters-sm mt-3">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} /> */}
                                        <img src={unclebay} alt="Admin" className="rounded-circle" width={150} />
                                        <div className="mt-3">
                                            <h4 className="text-capitalize">{employeeProfile.firstName === undefined ? '' : employeeProfile.firstName} {employeeProfile.lastName === undefined ? '' : employeeProfile.lastName}</h4>
                                            {/* <h4>{employeeProfile.id} </h4> */}
                                            {/* <h4>{params.id} </h4> */}
                                            <p className="text-secondary mb-1">Frontend Engineer</p>
                                            {/* <p className="text-muted font-size-sm">{employeeProfile.address.street}</p> */}
                                            <Link to={`/dashboard/employee/profile/update/${params.id}`}>
                                                <Button className="btn btn-primary m-2 mr-2" label="Update  "/>
                                            </Link>
                                            <Button className="btn btn-danger m-2" label="Disable" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    {/* <ProfileRow title="Full Name" label={ ` ${employeeProfile.firstName} ${employeeProfile.LastName}` } /> */}
                                    <ProfileRow title="Full Name" label={ ` ${fullName === undefined ? ' smam ' : fullName}` } />
                                    <ProfileRow title="Email" label={employeeProfile.email} />
                                    <ProfileRow title="Department" label="Web development" />
                                    <ProfileRow title="Role" label="Frontend Engineer" />
                                    <ProfileRow title="Salary" label={ `# ${employeeProfile.billRateCharge === null ? '' : employeeProfile.billRateCharge}` } />
                                    <ProfileRow title="Phone" label={employeeProfile.phone} />
                                    {/* <ProfileRow title="Address" label={employeeProfile.address.city} /> */}
                                    <ProfileRow title="Work Hours" label={employeeProfile.expectedWorkHours} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeProfile;
