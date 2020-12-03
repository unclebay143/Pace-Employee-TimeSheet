import { Component } from "react";

class EventCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            event: [
                {
                    title: "I will be coming home soon", 
                    eventDate: Date.now()
                },
                {
                    title: "2020 TIIDELab Hackathon",
                    eventDate: "30 Dec 2020"
                },

            ]
        }
    }

    render(){
        const { event } = this.state;
        return(
            <>
                <div class="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                    <div class="flex-grow-1 d-flex align-items-center">
                        <div class="dot mr-3 bg-green"></div>
                        <div class="text">
                            <h6 class="mb-0">{event[0].title}</h6><span class="text-gray">{event[0].eventDate}</span>
                        </div>
                    </div>
                </div>

            </>
        )
    };
};


export default EventCard;