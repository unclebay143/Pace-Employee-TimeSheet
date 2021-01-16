import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarEvent } from "../../../../actions/company/calendar/calendarAction";
import { formatDate } from "../../../../_helper/dateFormatter";
import Loader from "../../../loader/Loader";

// event: [
//     {
//         title: "I will be coming home soon", 
//         eventDate: Date.now()
//     },
//     {
//         title: "2020 TIIDELab Hackathon",
//         eventDate: "30 Dec 2020"
//     },

// ]
const EventCard = () =>{
    const {events, isFetching} = useSelector(state => state.calendar);
    const [ isFetchingState, setIsFetchingState ] = useState(isFetching);
    const [eventState, setEventState] = useState(events[0]);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCalendarEvent())
    }, [dispatch]);

    useEffect(() => {
        if(events.length > 0){

            // Set the eventState with event in redux
            setEventState(events[0])
            
            // Set the fetching state to false
            setIsFetchingState(false)
        }
    }, [events]);

    if(isFetchingState){
        return <Loader />
    }


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