import React from 'react';
import { useSelector }  from 'react-redux';
const HourTimerScreen = () =>{
    const { workedMilliSecond, timerIsOff } = useSelector(state => state.timerStatus)
    console.log(workedMilliSecond);
    const getWorkedHour = Math.round(workedMilliSecond / 3600000)
    return (
        <>
            <h2 className="mb-0 d-flex align-items-center">
                <span>{getWorkedHour} {getWorkedHour > 1 ? 'hours' : 'hour' }</span>
                <span className={`dot pace-bg-accent d-inline-block ml-3 ${timerIsOff ? null : 'timer-blink'} `}></span>
            </h2>
            <span className="text-muted">Worked {getWorkedHour > 1 ? 'Hours' : 'Hour' }</span>
            <div className="chart-holder">
                <canvas id="lineChart3" style={{maxHeight: "7rem !important"}} className="w-100"></canvas>
            </div>  
        </>
    )
}


export default HourTimerScreen;
