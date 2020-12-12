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
                 <div className="bg-white shadow pace-roundy px-4 py-3 d-flex align-items-center justify-content-between mb-4">
                    <div className="flex-grow-1 d-flex align-items-center">
                        <div className="dot mr-3 pace-bg-primary"></div>
                        <div className="text">
                            <h6 className="mb-0">{scheduleTitle}</h6><span className="text-gray">{scheduleTime}</span>
                        </div>
                    </div>
                </div>

            </>
        )
    };
};


export default EscheduleCard;