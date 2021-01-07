import { React } from 'react';
import TodoCard from './TodoCard';
import EventCard from './EventCard';
import EscheduleCard from './EscheduleCard';


const NotificationCards = ()=>{
    return(
        <>
            {/* <TodoCard /> */}
            <EventCard />
            <EscheduleCard />
        </>
    )
}

export default NotificationCards;