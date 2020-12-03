import { React, Component } from 'react';
import TodoCard from './TodoCard';
import EventCard from './eventCard';
import EscheduleCard from './EscheduleCard';


class NotificationCards extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <>

                <TodoCard />
                <EventCard />
                <EscheduleCard />

            </>
        )
    }
}