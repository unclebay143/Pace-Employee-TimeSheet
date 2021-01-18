// React 
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Timer from 'react-compound-timer';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import useSound from 'use-sound';

// Actions
import { TIMER_OFF, SET_WORKED_MILLISECOND, TIMER_ON, SMOOVE_TIMER } from '../../../../actions/types';
import notify from './notify.wav'
import { initializeNewDayTimer, startTimer, stopTimer } from "../../../../actions/timer/timerAction";
import { logout } from "../../../../actions/auth/authAction";

const timerReminder = withReactContent(Swal)

const TimerContainer=()=>{
    const { smooveTime } = useSelector(state => state.authenticationState)
    const [ isTimerOff, setisTimerOff ] = useState(true)
    const [ shouldRemindUser ] = useState(isTimerOff)
    const [ timerStatus, setTimerStatus ] = useState()
    const dispatch = useDispatch()
    const [ playSound ] = useSound(
        notify, { volume: 0.25 }
    )

    useEffect(() => {
        const reminder = () => {
            if(shouldRemindUser){
                timerReminder.fire({
                    showCloseButton: true,
                    showCancelButton: true,
                    cancelButtonColor: '#FF6584',
                    confirmButtonText: 'Yes, thanks',
                    cancelButtonText: 'Snooze for 5 minutes',
                    icon: 'question',
                    title: 'Reminder!',
                    text: 'Did you forget to start your time?.',
                    footer: '<a href="">Why am I seeing this?</a>',
                }).then((inputValue)=>{
                    if(inputValue.isConfirmed === true){
                       return null
                    }else{
                        dispatch({type: SMOOVE_TIMER})
                    }
                })
                playSound()
            }
        }
        const reminderTracker = setTimeout(reminder, smooveTime);
        
        return(()=>{
            clearTimeout(reminderTracker)
        })

    }, [shouldRemindUser, playSound, smooveTime])
    
    
    const startTimerFunc = useRef()
    const defaultValue = 0;
    const timerStore = 'currentMilliSecond';
    const [timerSessionFromLocalStorage, setTimerSessionFromLocalStorage] = useState(()=>JSON.parse(localStorage.getItem(timerStore)) || defaultValue);
    const [timerCounterStatus, setTimerCounterStatus] = useState(timerSessionFromLocalStorage); // set the timer in local storage or 0
    
    const handleSync = () =>{
        localStorage.setItem(timerStore, startTimerFunc.current.getTime())
        dispatch({ type: SET_WORKED_MILLISECOND, payload: startTimerFunc.current.getTime()  })

    }

    const handleStartTimer = () =>{
        dispatch({type: TIMER_ON})
        setisTimerOff(false)
        startTimerFunc.current.start()
        setInterval(() => {
            handleSync()
        },1000);
    }
    
    const handleStopTimer = () =>{
        const stopMillisecond = startTimerFunc.current.getTime()
        const convertedStopHour = Math.floor(stopMillisecond / 3600000)
        startTimerFunc.current.pause()


        timerReminder.fire({
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonColor: '#FF6584',
            confirmButtonText: 'Yes, thanks',
            cancelButtonText: 'Resume',
            icon: 'question',
            title: 'Stop Timer?',
            text: `you worked ${(convertedStopHour <= 1 ? (`${convertedStopHour} hour`) : (`${convertedStopHour} hours`))} are you through?.`,
            footer: '<a href="">Why am I seeing this?</a>'
        }).then((inputValue)=>{
            if(inputValue.isConfirmed === true){
                timerReminder.fire({
                    title: 'Worked Hour Recorded',
                    showCancelButton: true,
                    showCancelButton: true,
                    cancelButtonColor: '#3085d6',
                    cancelButtonText: `Continue`,
                    confirmButtonText: `Logout`,
                    confirmButtonColor: '#d33',
                    icon: 'success',
                  }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(logout())
                    }else{
                        dispatch({type: TIMER_OFF, hour: convertedStopHour})
                        startTimerFunc.current.stop()
                        setisTimerOff(true)
                        localStorage.removeItem(timerStore)
                        window.location.reload()
                    }
                  })
            }else{
                startTimerFunc.current.resume()
            }
        })
       
    }
    
    useEffect(() => {
        if(timerSessionFromLocalStorage){
            handleStartTimer()
            setTimerCounterStatus(timerSessionFromLocalStorage)
        }
    }, [setTimerCounterStatus, handleStartTimer, timerSessionFromLocalStorage])


    
    
    return(
        <>
            <li className="nav-item" h='4' data-tut='reactour__timer'>
                <div id="searchForm" className="ml-auto d-non d-lg-block">
                    <div className="position-relative mb-0">
                        <div id="right-i">
                            <Timer
                                initialTime={ timerCounterStatus }
                                startImmediately={ false }
                            >
                                {(control) => {
                                    startTimerFunc.current = control;
                                    return(
                                    <>
                                        <div id="right-i">
                                            {

                                                isTimerOff ?
                                                
                                                (
                                                    
                                                    <button 
                                                        onClick={()=> handleStartTimer()}
                                                        id="start-time"
                                                    >
                                                        Start Time
                                                    </button>

                                                )
                                                :
                                                (

                                                    <button 
                                                        onClick={()=>handleStopTimer()}
                                                        id="start-time"
                                                        className="bg-red"
                                                    >
                                                        Stop Time
                                                    </button>

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
                                )}}
                            </Timer>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default TimerContainer;