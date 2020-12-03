import { Component } from "react";

class EscheduleCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            scheduleTitle: "Holiday by air",
            scheduleTime: Date.now()
        }
    }

    render(){
        const { scheduleTitle, scheduleTime } = this.state;
        return(
            <>
                 <div class="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                    <div class="flex-grow-1 d-flex align-items-center">
                        <div class="dot mr-3 bg-green"></div>
                        <div class="text">
                            <h6 class="mb-0">{scheduleTitle}</h6><span class="text-gray">{scheduleTime}</span>
                        </div>
                    </div>
                </div>

            </>
        )
    };
};


export default EscheduleCard;