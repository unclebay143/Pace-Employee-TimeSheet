import React from 'react'

export default function ManageCalendar() {
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
                </section>
            </div>
        </div>
            
        </>
    )
}
