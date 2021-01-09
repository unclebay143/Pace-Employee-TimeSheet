// React
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { param } from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '../components/layouts/Button';
import { TextInput } from '../components/layouts/FormInput';
import { AddEmployeeSchema } from '../components/Validation/Schema';

const sampleCompany = {
    departments: [ 'web development', 'quality assurance', 'web design' ],
    employeeRoles: ['backend', 'frontend', 'database manager'],
    employeeType: ['admin', 'internal', 'staff'],
}
const names = [
    {value: "Wale", label: "boy"},
    {value: "Wale", label: "boy"},
    {value: "Wale", label: "boy"},
    {value: "Wale", label: "boy"}
]

const existingDepartment = sampleCompany.departments.map((department, index)=><option value={department} key={index}>{department}</option>)
const availableRole = sampleCompany.employeeRoles.map((role, index)=><option value={role} key={index}>{role}</option>)
const availableType = sampleCompany.employeeType.map((type, index)=><option value={type} key={index}>{type}</option>)



const AddEmployee = () =>{
    const params = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.authenticationState)
    console.log(
        currentUser
    );
    const user = {
        userName: 'Ayodele Samuel Adebayo'
    }
    const firstName = 'ayodele'
    const lastName = 'samuel adebayo'
    const email = 'unclebigbay@gmail.com'
    const phone = '090987773663'
    const role = 'frontend'
    const department = 'web development'
    const type = 'admin'
    const salary = 9000000
    const password = 9000000
    const password2 = 900000
    const address = 'eko'
    const city = 'abuka'
    const state = 'lagos'
    const country = 'nigeria'

    useEffect(() => {
        
        


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
                                    initialValues={
                                        {
                                            firstName,
                                            lastName,
                                            email,
                                            phone,
                                            role,
                                            department,
                                            type,
                                            salary,
                                            password,
                                            password2,
                                            address,
                                            city,
                                            state,
                                            country
                                        }
                                    }
                                    // validationSchema={AddEmployeeSchema}
                                    onSubmit={(values)=>{
                                        const { firstName, lastName, address } = values
                                        const data = {
                                            firstName,
                                            lastName,
                                            address,
                                            phone,
                                            userName: 'unclebay143',

                                        }

                                        
                                        // alert(JSON.stringify(values, null, 2))
                                        alert(JSON.stringify(data, null, 2))
                                        const getCurrentUser = JSON.parse(localStorage.getItem('token'));
                                        const accessToken1 = getCurrentUser.data.accessToken
                                        console.log(typeof accessToken1);

                                        const options = {
                                            'Content-Type': 'application/json',
                                            "Accept": "application/json",
                                            'Authorization': `basic ${accessToken1}`
                                          }

                                          axios.get('https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/')
                                        axios.put(`https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/updateProfile/${params.id}`, data, {headers:options})
                                        .then((response)=>{
                                            console.log(response)
                                        }).catch((error)=>{
                                            console.log(error)
                                        })
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

                                            {/* PHONE NUMBER */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Phone Number</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                <TextInput
                                                            name="phone"
                                                            placeholder="Enter Phone Number"
                                                            type="tel" 
                                                            className={`form-control ${touched.phone && errors.phone ? "is-invalid" : ""}`} 
                                                            id="phone"
                                                        />
                                                        <ErrorMessage
                                                            component="div"
                                                            name="phone"
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

                                            {/*  DEPARTMENT*/}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3 mb-sm-3">
                                                    <h6 className="mb-0">Department</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="department" className="form-control">
                                                        <option defaultValue>Choose...</option>
                                                        {existingDepartment}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* ROLE */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3 mb-sm-3">
                                                    <h6 className="mb-0">Role</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="role" className="form-control">
                                                        <option defaultValue>Choose...</option>
                                                        {availableRole}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* TYPE */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3 mb-sm-3">
                                                    <h6 className="mb-0">Type</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <Field component="select" name="type" className="form-control">
                                                        <option defaultValue>Choose...</option>
                                                        {availableType}
                                                    </Field>
                                                    <ErrorMessage
                                                        component="div"
                                                        name="email"
                                                        className="invalid-feedback p-0"
                                                    />
                                                </div>
                                            </div>
                                            <hr />

                                            {/* SALARY */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <h6 className="mb-0">Salary</h6>
                                                </div>
                                                <div className="col-sm-12 col-md-9 text-secondary" >
                                                    <TextInput
                                                        name="salary"
                                                        id="salary"
                                                        type="text" 
                                                        placeholder="Salary"
                                                        className={`form-control ${touched.salary && errors.salary ? "is-invalid" : ""}`}
                                                    />
                                                    <ErrorMessage
                                                        component="div"
                                                        name="salary"
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
                                                <Button type="submit" label="Employ" className="btn pace-btn-primary" />
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
