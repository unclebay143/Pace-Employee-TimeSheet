// React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../../layouts/Button';
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
    const [ employeeProfile, setEmployeeProfile ] = useState([])
    
    useEffect(() => {
        const fetchEmployeeProfile = async() =>{
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            console.log(data)
            setEmployeeProfile(data)
        }

        fetchEmployeeProfile()
        
    //     const getCurrentUser = JSON.parse(localStorage.getItem('token'));
    //     if(getCurrentUser){
    //         const currentUser = getCurrentemployeeProfile.response[0];
    //         setUser(currentUser)
    //         syncCurrentUser(params.id)
    //     }

    //     return(()=>{
    //         const currentUser = []
    //     })
    }, [])
    
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
                                            <h4 className="text-capitalize">{employeeProfile.name} {employeeProfile.username}</h4>
                                            {/* <h4>{employeeProfile.id} </h4> */}
                                            {/* <h4>{params.id} </h4> */}
                                            <p className="text-secondary mb-1">Frontend Engineer</p>
                                            {/* <p className="text-muted font-size-sm">{employeeProfile.address.street}</p> */}
                                            <Link to={`/dashboard/employee/profile/update/${params.id}`}>
                                                <Button className="btn btn-primary mr-2" label="Edit"/>
                                            </Link>
                                            <Button className="btn btn-danger" label="Disable" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <ProfileRow title="Full Name" label={ ` ${employeeProfile.name} ${employeeProfile.username}` } />
                                    <ProfileRow title="Email" label={employeeProfile.email} />
                                    <ProfileRow title="Department" label="Web development" />
                                    <ProfileRow title="Role" label="Frontend Engineer" />
                                    <ProfileRow title="Salary" label={`# ${employeeProfile.billRateCharge}`} />
                                    <ProfileRow title="Phone" label={employeeProfile.phone} />
                                    {/* <ProfileRow title="Address" label={employeeProfile.address.city} /> */}
                                    <ProfileRow title="Worked Hours" label={employeeProfile.workedHour} />
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
