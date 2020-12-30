// React 
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Timer from 'react-compound-timer';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import useSound from 'use-sound';

// Actions
import { TIMER_ON, TIMER_OFF } from '../../../../actions/types';
import notify from './notify.wav'

const timerReminder = withReactContent(Swal)

const TimerHolder=()=>{
    const isTimerOff = useSelector(state => state.timerStatus)
    const [ playSound ] = useSound(
        notify, { volume: 0.25 }
    )
    // const [ isTimerOff, setIsTimerOff ] = useState(timeStatus)
    const dispatch = useDispatch()
    useEffect(() => {
    
        setTimeout(() => {
            playSound()
            if(isTimerOff){
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
            
        }, 2000)

    })

    
    const onStop = (value, resume, reset)=>{
        // setIsTimerOff((isTimerOff  )=>({isTimerOff  : isTimerOff   = true}))
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
                dispatch({type: TIMER_OFF, hour:2})
                reset()
            }else{
                resume()
            }
        })
    }

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
                                    // setIsTimerOff((isTimerOff)=>{isTimerOff = true})
                                    dispatch({ type: TIMER_ON, payload: 3})
                                }}
                                >
                                {({ resume, start, stop, getTime, reset }) => (
                                    <>
                                        <div id="right-i">
                                            {
                                                isTimerOff ? 
                                                    (
                                                    
                                                        <button onClick={start} id="start-time">Start Time</button>
                                                    
                                                    )
                                                :
                                                    (
                                                        <button 
                                                            onClick={()=>{
                                                                const stopTime = getTime();
                                                                onStop(stopTime, resume, reset)
                                                                stop()
                                                                // reset()
                                                            }} 
                                                            id="start-time"
                                                            className="bg-red"
                                                        >Stop Time</button>
                                                    )
                                            }

                                            {
                                                // isTimerOff ? console.log('off') : console.log('on') 
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




export default TimerHolder;