import { Component } from "react";
import'../dashboard/dashboard-styles/timer.css';
import Timer from 'react-compound-timer';
import { ToastContainer, toast } from 'react-toastify';



const reminder = () => toast("Did you forgot to start your time?")

class TimerHolder extends Component{
    constructor(props){
        super(props)
        this.state = {
            timerOff: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            if(this.state.timerOff) reminder()
            
        }, 2000)
    }

    
    onStop = (value)=>{
        console.log(this.state)
        console.log("end")
        this.setState((timerOff)=>({timerOff: timerOff = true}))
        console.log(value)
    }

    render(){
        const { hour, minute, second, timerOff } = this.state;
        return(
            <>
                <li className="nav-item">
                    <style>
                        {
                            `
                                .Toastify__toast{
                                    background: #FF6584;
                                    color: #FFFFFF;
                                }
                            `
                        }
                    </style>
                    <ToastContainer
                        autoClose={9000}
                        position="bottom-center"
                    />
                    <div id="searchForm" className="ml-auto d-none d-lg-block">
                        <div className="position-relative mb-0">
                            <div id="right-i">
                                <Timer
                                    initialTime={0}
                                    startImmediately={false}
                                    onStart = {()=>{
                                        console.log("timer is on")
                                        this.setState((timerOff)=>({timerOff: timerOff = false}))
                                        console.log(this.state)
                                    }}
                                    >
                                    {({ start, stop, getTime, reset }) => (
                                        <>
                                            <div id="right-i">
                                                {
                                                    timerOff ? 
                                                        (
                                                        
                                                            <button onClick={start} id="start-time">Start Time</button>
                                                        
                                                        )
                                                    :
                                                        (

                                                            <button 
                                                                onClick={()=>{
                                                                    const stopTime = getTime();
                                                                    this.onStop(stopTime)
                                                                    stop()
                                                                    reset()
                                                                }} 
                                                                id="start-time"
                                                            >Stop Time</button>
                                                        )
                                                }
                                                
                                                <div id="time">
                                                    <span id="hours">
                                                        <Timer.Hours formatValue={((hour)=> `${(hour < 10 ? `0${hour}` : `${hour}`)}`)} />
                                                    </span> 
                                                    : 
                                                    <span id="mins">
                                                        <Timer.Minutes formatValue={((minute)=> `${(minute < 10 ? `0${minute}` : `${minute}`)}`)}/>
                                                    </span> 
                                                    : 
                                                    <span id="seconds">
                                                        <Timer.Seconds formatValue={((second)=> `${(second < 10 ? `0${second}` : `${second}`)}`)}/>
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </Timer>
                            </div>
                        </div>
                    </div>
                </li>
            </>
        )
    }
}




export default TimerHolder;