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
                            {/* <!-- <button type="submit" style="top: -3px; left: 0;" className="position-absolute bg-white border-0 p-0"><i className="o-search-magnify-1 text-gray text-lg"></i></button> --> */}
                            <div id="right-i">
                                <button id="start-time" onclick="startTime()">Start Time</button>
                                <div id="time"><span id="hours">00</span> : <span id="mins">00</span> : <span id="seconds">00</span></div>
                                <button id="stop-time" onclick="stopTime()">Stop Time</button>
                            </div>

                            {/* <!-- <input type="search" placeholder="Search ..." className="form-control form-control-sm border-0 no-shadow pl-4"> --> */}
                        </div>
                    </div>
                </li>
            </>
        )
    }
}

export default Timer;