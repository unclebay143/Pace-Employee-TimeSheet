import React from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import { TextInput } from '../../layouts/FormInput';
import Button from '../../layouts/Button';
import { Link } from 'react-router-dom';
import { addNewCalendarEvent } from '../../../actions/company/calendar/calendarAction';
import { useDispatch } from 'react-redux';


export default function ManageCalendar() {
    const dispatch = useDispatch();
    return (
        <>

            <style>
                {
                    `
                    .rbc-calendar {
                        min-height: 500px ;
                        }
                    `
                }
            </style>
            <div className="py-3">
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <Link to='/dashboard/calendar'>
                                Calendar
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Manage Calendar
                        </li>
                        </ol>
                    </nav>
                
                {/* /Breadcrumb */}
            <div className="">
                <section className="">
                    <div className="mb-3">
                        <Formik 
                        
                            initialValues={{
                                eventName: '',
                                eventDateAndTime: ''
                            }}
                            onSubmit={((values)=>{
                                dispatch(addNewCalendarEvent(values))
                            })}
                        >
                            {({errors, touched, values})=>(
                                <Form className="form-inline">
                                    <pre>{JSON.stringify(values, null, 2)}</pre>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <TextInput 
                                            name="eventName"
                                            type="eventName"
                                            className={`form-control p-2 ${
                                                touched.eventName && errors.eventName ? "is-invalid" : ""
                                            }`}
                                            id="eventName"
                                            placeholder="Enter New Event"
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="eventName"
                                            className="invalid-feedback p-0"
                                        />
                                    </div>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <TextInput 
                                            name="eventDateAndTime"
                                            type="datetime-local"
                                            className={`form-control p-2 ${
                                                touched.eventDateAndTime && errors.eventDateAndTime ? "is-invalid" : ""
                                            }`}
                                            id="eventDateAndTime"
                                            placeholder="Enter New Event"
                                        />
                                    </div>
                                    <div className="input-group mb-2 mr-sm-2">
                                        <Button 
                                            type="submit"
                                            label="Create Event"
                                            className="btn btn-sm btn-info ml-2"
                                        />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div col="col-9">
                        <section>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Cras justo odio
                                    <span>
                                        <button className="btn text-white badge badge-primary badge-pill mr-2">Edit</button>
                                        <button className="btn text-white badge badge-red badge-pill">Delete</button>
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
            </div>
        </div>
            
        </>
    )
}
