import React, { useEffect, useState } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import { TextInput } from '../../layouts/FormInput';
import Button from '../../layouts/Button';
import { Link } from 'react-router-dom';
import { addNewCalendarEvent, deleteCalendarEvent, editCalendarEvent, getCalendarEvent } from '../../../actions/company/calendar/calendarAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../loader/Loader';
import { formatDate } from '../../../_helper/dateFormatter';
import { date } from 'yup';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { eventDeletedSuccessfullyLogger, eventNotDeletedLogger, eventUpdatedSuccessfullyLogger, eventnNotUpdatedLogger } from '../../../toaster';


export default function ManageCalendar() {
    const { events, isFetching } = useSelector(state => state.calendar);
    const [eventsState, setEventsState] = useState([]);
    const [ isFetchingState, setIsFetchingState ] = useState(isFetching);
    const [ editMode, setEditMode ] = useState(false);
    const [ eventInEditMode, setEventInEditMode ] = useState({});
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(getCalendarEvent())
    }, [dispatch]);
    
    useEffect(() => {
        if(events){
            setEventsState(events)
            setIsFetchingState(false)
        }
    }, [events]);

    const handleDelete = (eventID) =>{
        dispatch(deleteCalendarEvent(eventID))
        .then((response)=>{
            eventDeletedSuccessfullyLogger()
            // history.push('/dashboard/calendar')
        })
        .catch((error)=>{
            eventNotDeletedLogger()
        })
    }

    const handleEdit = (eventID, title, end) =>{
        setEventInEditMode({
            eventName: title,
            eventDateAndTime: end,
            eventID,
        })
        setEditMode(true)
        
    }

    if(isFetchingState){
        return(
            <Loader />
        )
    }

   
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
                            {
                                editMode ?
                                (
                                    
                                    //  EDIT EVENT MODE
                                    <div className="d-flex justify-content-between">
                                        <Formik 
                                            enableReinitialize
                                            initialValues={eventInEditMode}
                                            onSubmit={((values, action)=>{
                                                dispatch(editCalendarEvent(values))
                                                .then((response)=>{
                                                    action.setSubmitting(false)
                                                    eventUpdatedSuccessfullyLogger()
                                                    history.push('/dashboard/calendar')
                                                })
                                                .catch((error)=>{
                                                    action.setSubmitting(false)
                                                    eventnNotUpdatedLogger()
                                                })
                                            })}
                                        >
                                        {({errors, touched, values, isSubmitting})=>(
                                            <Form className="form-inline">
                                                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
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
                                                        label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Updating Event</span>) : "Update Event"}
                                                        className="btn btn-sm btn-info ml-2"
                                                    />
                                                </div>
                                                
                                                <div className="input-group mb-2 mr-sm ml-lg- pl-lg-" style={{marginLeft: '280px'}}>
                                                    <Button 
                                                        icon="fa fa-back-arrow"
                                                        type="button"
                                                        label="New Event"
                                                        className="btn btn-sm btn-info ml-2"
                                                        onClick={(()=>setEditMode(false))}
                                                    />
                                                </div>
                                            </Form>
                                        )}
                                        </Formik>
                                    </div>
                            )
                            :
                            (

                                // ADD EVENT MODE
                                // <div className="mb-3">
                                    <Formik 
                                        enableReinitialize
                                        initialValues={{
                                            eventName: '',
                                            eventDateAndTime: ''
                                        }}
                                        onSubmit={((values, action)=>{
                                            dispatch(addNewCalendarEvent(values, action))
                                            .then((response)=>{
                                                history.push('/dashboard/calendar')
                                            })
                                        })}
                                        >
                                        {({errors, touched, values, isSubmitting})=>(
                                            <Form className="form-inline">
                                                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
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
                                                        label={isSubmitting ? (<span><i className="fa fa-spinner fa-spin"></i> Creating Event</span>) : "Create Event"}
                                                        className="btn btn-sm btn-info ml-2"
                                                        />
                                                </div>
                        
                                            </Form>
                                        )}
                                    </Formik>
                                )
                            }
                        </div>
                    <div col="col-9">
                        <section>
                            <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center h5">
                                <span>Event Name</span>
                                {/* <span className="mr-5 pr-5">Event Name</span> */}
                            </li>

                                {
                                    eventsState.map(({title, end, eventID}, index)=>{
                                        return(
                                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                                <span>
                                                {title}
                                                </span>
                                                <section>
                                                    <span className="text-center mr-5 pr-5">
                                                        {formatDate(end)}
                                                    </span>
                                                    <span className="   ">
                                                        <button className="btn text-white badge badge-primary badge-pill mr-2" onClick={(()=>handleEdit(eventID, title, end))}>Edit</button>
                                                        <button className="btn text-white badge badge-red badge-pill" onClick={(()=>handleDelete(eventID))}>Delete</button>
                                                    </span>
                                                </section>
                                            </li>
                                        )

                                    })
                                }
                            </ul>
                        </section>
                    </div>
                </section>
            </div>
        </div>
            
        </>
    )
}
