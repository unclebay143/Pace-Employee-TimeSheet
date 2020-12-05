import { Component } from "react";
import'../dashboard/dashboard-styles/timer.css';


class Timer extends Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <>
                <li className="nav-item">
                    <div id="searchForm" className="ml-auto d-none d-lg-block">
                        <div className="position-relative mb-0">
                            <div id="right-i">
                                <button id="start-time" onClick="startTime()">Start Time</button>
                                <div id="time"><span id="hours">00</span> : <span id="mins">00</span> : <span id="seconds">00</span></div>
                                <button id="stop-time" onClick="stopTime()">Stop Time</button>
                            </div>
                        </div>
                    </div>
                </li>
            </>
        )
    }
}

export default Timer;