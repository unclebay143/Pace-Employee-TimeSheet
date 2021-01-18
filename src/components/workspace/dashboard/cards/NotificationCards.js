// React
import { React } from 'react';

// Card Components
import TodoCard from './TodoCard';
import EventCard from './EventCard';
import EscheduleCard from './EscheduleCard';


const NotificationCards = ()=>{
    return(
        <>
            <div h='3' data-tut='reactour__notification'>
                <TodoCard />
                <EventCard />
                <EscheduleCard />
            </div>
        </>
    )
}

export default NotificationCards;