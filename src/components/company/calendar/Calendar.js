import React from 'react';
import { Calendar as BigCalendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Button from '../../layouts/Button';

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
                <div className="container">
                    <section className="row">
                        <div className="col-6">
                            <Button 
                                label="New Event"
                                className="btn btn-sm btn-info"
                            />
                        </div>
                    </section>
                    <div col="col-9">
                        <section>
                            <ul>
                                <li>Come Home</li>
                                <li>Start Date {Date.now()}</li>
                                <li>End Date {Date.now()}</li>
                            </ul>
                        </section>
                    </div>
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
