import { Component } from "react";
import Timer from 'react-compound-timer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const timerReminder = withReactContent(Swal)
class TimerHolder extends Component{
    constructor(props){
        super(props)
        this.state = {
            isTimerOff  : true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            if(this.state.isTimerOff  ){
                timerReminder.fire({
                    showCloseButton: true,
                    showCancelButton: true,
                    cancelButtonColor: '#FF6584',
                    confirmButtonText: 'Yes, thanks',
                    cancelButtonText: 'Snooze for 5 minutes',
                    icon: 'question',
                    title: 'Reminder!',
                    text: 'Did you forget to start your time?.',
                    footer: '<a href="">Why am I seeing this?</a>'
                })
            }

            
        }, 300000)
    }

    
    onStop = (value, resume, reset)=>{
        this.setState((isTimerOff  )=>({isTimerOff  : isTimerOff   = true}))
        const formatTimer = Math.floor(value / 3600000)
        timerReminder.fire({
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonColor: '#FF6584',
            confirmButtonText: 'Yes, thanks',
            cancelButtonText: 'Resume',
            icon: 'warning',
            title: 'Stop Timer?',
            text: `you worked ${(formatTimer <= 1 ? (`${formatTimer} hour`) : (`${formatTimer} hours`))} are you through?.`,
            footer: '<a href="">Why am I seeing this?</a>'
        }).then((inputValue)=>{
            if(inputValue.isConfirmed === true){
                reset()
            }else{
                resume()
            }
        })
    }

    render(){
        const { isTimerOff   } = this.state;
        return(
            <>
                <li className="nav-item">
                    <div id="searchForm" className="ml-auto d-none d-lg-block">
                        <div className="position-relative mb-0">
                            <div id="right-i">
                                <Timer
                                    initialTime={0}
                                    startImmediately={false}
                                    onStart = {()=>{
                                        this.setState((isTimerOff  )=>({isTimerOff  : isTimerOff   = false}))
                                    }}
                                    >
                                    {({ resume, start, stop, getTime, reset }) => (
                                        <>
                                            <div id="right-i">
                                                {
                                                    isTimerOff   ? 
                                                        (
                                                        
                                                            <button onClick={start} id="start-time">Start Time</button>
                                                        
                                                        )
                                                    :
                                                        (

                                                            <button 
                                                                onClick={()=>{
                                                                    const stopTime = getTime();
                                                                    this.onStop(stopTime, resume, reset)
                                                                    stop()
                                                                    // reset()
                                                                }} 
                                                                id="start-time"
                                                                className="bg-red"
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