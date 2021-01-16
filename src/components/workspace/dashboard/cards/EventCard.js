//  React
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getCalendarEvent } from "../../../../actions/company/calendar/calendarAction";

// Date Formatter Helper
import { formatDate } from "../../../../_helper/dateFormatter";

const eventHolder = 
    {
        title: 'Event Card',
        end: Date.now()
    }
    
const EventCard = () =>{
    const {events} = useSelector(state => state.calendar);
    const [eventState, setEventState] = useState(eventHolder);
    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getCalendarEvent())

    }, [dispatch]);
    
    useEffect(() => {

        // If the length of the calendar events is equals to 0
        if(events.length === 0){

            // Set the dummy event 
            setEventState(eventHolder)
        }else{
            // Set the eventState with event in redux
            setEventState(events[0])
        }
            
    }, [events]);

    return(
        <>
            <div className="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                <div className="flex-grow-1 d-flex align-items-center">
                    <div className="dot mr-3 bg-green"></div>
                    <div className="text">
                        <h6 className="mb-0">{eventState.title}</h6><span className="text-gray">{formatDate(eventState.end)} - Calendar</span>
                    </div>
                </div>
            </div>

        </>
    )
};


export default EventCard;