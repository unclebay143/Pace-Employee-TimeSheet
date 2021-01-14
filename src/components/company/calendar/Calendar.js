import React from 'react';
import { Calendar as BigCalendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Button from '../../layouts/Button';
import { TextInput } from "../../layouts/FormInput";
import { ErrorMessage, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const myEventsList = [
    {
        title: 'Conference Meeting',
        start: '01/01/2021',
        end: '01/01/2021',
    }
]
export default function Calendar() {
    const localizer = momentLocalizer(moment)
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
                                    eventName: ''
                                }}
                            >
                                {({errors, touched})=>(
                                    <Form className="form-inline">
                                        <div class="input-group mb-2 mr-sm-2">
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
                                        <div class="input-group mb-2 mr-sm-2">
                                            <TextInput 
                                                name="eventDate"
                                                type="datetime-local"
                                                className={`form-control p-2 ${
                                                    touched.eventDate && errors.eventDate ? "is-invalid" : ""
                                                }`}
                                                id="eventDate"
                                                placeholder="Enter New Event"
                                            />
                                        </div>
                                        <div class="input-group mb-2 mr-sm-2">
                                            <Button 
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
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Cras justo odio
                                        <span>
                                            <button class="btn text-white badge badge-primary badge-pill mr-2">Edit</button>
                                            <button class="btn text-white badge badge-red badge-pill">Delete</button>
                                        </span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </section>
                </div>

                {/* <section>
                    <Button
                        label="Manage Event"
                        className="btn btn-sm pace-btn-accent mb-2"
                    />
                </section> */}
                {/* <BigCalendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                /> */}

            </div>
        </>
    )
}
