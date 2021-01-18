import React, { useEffect, useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Button from '../../layouts/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCalendarEvent } from '../../../actions/company/calendar/calendarAction';
import Loader from '../../loader/Loader';
import { currentUserRoleID } from '../../../services/auth-header';
                    

export default function Calendar() {
    const localizer = momentLocalizer(moment);
    const { events, isFetching } = useSelector(state => state.calendar);
    const [ eventsState, setEventsState ] = useState([]);
    const [ isFetchingState, setIsFetchingState ] = useState(isFetching);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCalendarEvent())
        // console.log('snsnsn')
        // setEventStates(events)
    }, []);
    
    useEffect(() => {
        if(events){
            setEventsState(events)
            setIsFetchingState(false)
        }
    }, [events]);
 
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
                <section>

                    {
                        currentUserRoleID === 5 ? "" : 
                        (
                            <Link to="/dashboard/manageCalendar">
                                <Button
                                    label="Manage Event"
                                    className="btn btn-sm pace-btn-accent mb-2"
                                />
                            </Link>
                        )
                    }
                </section>
                <BigCalendar
                    localizer={localizer}
                    events={eventsState}
                    startAccessor="start"
                    endAccessor="end"
                />

            </div>
        </>
    )
}
