import React from 'react';
import { useSelector }  from 'react-redux';
const HourTimerScreen = () =>{
    const state = useSelector(state => state.timerStatus)
    return (
        <>
            <h2 className="mb-0 d-flex align-items-center"><span>{state.hour} hours</span>
            {/* {
                Object.entries(state).forEach(
                    ([key, value]) => console.log(key, value)
                )
            } */}
            <span className={`dot pace-bg-accent d-inline-block ml-3 ${state ? null: 'timer-blink'} `}></span></h2><span className="text-muted">Worked Hours</span>
            <div className="chart-holder">
                <canvas id="lineChart3" style={{maxHeight: "7rem !important"}} className="w-100"></canvas>
            </div>  
        </>
    )
}


export default HourTimerScreen;
