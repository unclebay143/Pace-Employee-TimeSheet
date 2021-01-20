// React
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { geteScheduleEvent } from '../../../../actions/eschedule/eScheduleAction';

// Helper
import { formatDate } from "../../../../_helper/dateFormatter";

// Loader
import Loader from '../../../loader/Loader';


const eschedule = [
    {
        eventName: 'schedule 1',
        eventDateandTime: '2021/01/20'
    }
]

const EscheduleRow = () =>{

    const dispatch = useDispatch()
    const {events, isFetching} = useSelector(state => state.eschedule)
    const [eventState, setEventState] = useState([])
    const [isLoading, setIsLoading] = useState(isFetching);

    useEffect(() => {
        dispatch(geteScheduleEvent())
        setIsLoading(false)
    }, [dispatch])


    useEffect(() => {
        if(eschedule){
            setEventState(events)
        }
    }, [dispatch, events])


    console.log(eventState);
    console.log(eschedule);

    if(isLoading){
        return(
            <>
                <Loader />
            </>
        )
    }

    return(
        [...eventState].reverse().map(({eventName, eventDateAndTime})=>{
            return(
                
                <>

                    {/* eschedule Item 1 */}
                <div className="row px-3 align-items-center eschedule-item rounded">
                    <div className="col-auto m-1 p-0 d-flex align-items-center">
                    <h2 className="m-0 p-0">
                        <i className="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete" />
                        <i className="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as eschedule" />
                    </h2>
                    </div>
                    <div className="col px-1 m-1 d-flex align-items-center">
                    {/* <input type="text" className="form-control form-control-lg border-0 edit-eschedule-input bg-transparent rounded px-3" readOnly defaultValue="Buy groceries for next week" title="Buy groceries for next week" /> */}
                    {/* <input type="text" className="form-control form-control-lg border-0 edit-eschedule-input rounded px-3 d-none" defaultValue="Buy groceries for next week" /> */}
                    {eventName}
                    </div>
                    <div className="col-auto m-1 p-0 px-3 d-none">
                    </div>
                    <div className="col-auto m-1 p-0 eschedule-actions">
                    <div className="row d-flex align-items-center justify-content-end">
                        <h5 className="m-0 p-0 px-2">
                        <i className="fa fa-pencil text-dark btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit eschedule"></i>
                        </h5>
                        <h5 className="m-0 p-0 px-2">
                        <i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete eschedule"></i>
                        </h5>
                    </div>
                    <div className="row eschedule-created-info">
                        <div className="col-auto d-flex align-items-center pr-2">
                        <i className="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title data-original-title="Created date" />
                        <label className="date-label my-2 text-black-50">{formatDate(eventDateAndTime)}</label>
                        </div>
                    </div>
                    </div>
                </div>

                </>
                
                
            )
        })
    )
}

export default EscheduleRow;