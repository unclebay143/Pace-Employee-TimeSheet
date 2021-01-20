import { ErrorMessage, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNeweScheduleEvent, geteScheduleEvent } from '../../../../actions/eschedule/eScheduleAction';
import { TextInput } from '../../../layouts/FormInput';
import EscheduleRow from './EscheduleRow'

const Eschedule = () => {
    const dispatch = useDispatch()
    dispatch(geteScheduleEvent())
    return(
        <>

        <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
            {/* Create eschedule section */}
            <div className="row m-1 p-3">
                <div className="col col-11 mx-auto"> 
                    <Formik
                        initialValues={{
                            eventName: '',
                            eventDateAndTime: ''
                        }}
                        onSubmit={((values, action)=>{
                            dispatch(addNeweScheduleEvent(values, action))
                            // alert(values)
                        })}
                    >
                        {({values, touched, errors, handleSubmit})=>(
                                <Form onSubmit={handleSubmit}>
                                <div className="row bg-white rounded shadow-sm p-2 add-eschedule-wrapper align-items-center justify-content-center">
                                    {/* <pre>{JSON.stringify(values)}</pre> */}
                                    <div className="col">
                                     {/* <input name="eventName" id="eventName" className="form-control form-control-lg border-0 add-eschedule-input bg-transparent rounded" type="text" placeholder="Add new .." /> */}
                                     <TextInput 
                                            name="eventName"
                                            type="eventName"
                                            className={`form-control form-control-lg border-0 add-eschedule-input bg-transparent rounded p-2 ${
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
                                    <div className="col-4 m-0 px-2 d-flex align-items-center">
                                        {/* <input type="datetime-local" id="testdate" name="testdate" className="form-control" defaultValue /> */}
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
                                    <div className="col-auto px-0 mx-0 mr-2">
                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </div>
                                </div>
                                </Form>
                            )}
                    </Formik>
                </div>
            </div>
            <div className="p-2 mx-4 border-black-25 border-bottom" />
            {/* eschedule list section */}
            <div className="row mx-1 px-5 pb-3 w-80">
                <div className="col mx-auto">
                    <EscheduleRow />                
                </div>
            </div>
            </div>


        </>
    )
}


export default Eschedule;