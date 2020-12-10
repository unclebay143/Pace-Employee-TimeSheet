import React from 'react'

export default function HourTimerScreen() {
    return (
        <>
            <h2 className="mb-0 d-flex align-items-center"><span>0 hours</span>
            <span className="dot pace-bg-accent d-inline-block ml-3 timer-blink"></span></h2><span className="text-muted">Worked Hours</span>
            <div className="chart-holder">
                <canvas id="lineChart3" style={{maxHeight: "7rem !important"}} className="w-100"></canvas>
            </div>  
        </>
    )
}
