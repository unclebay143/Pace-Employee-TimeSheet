// React 
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Timer from 'react-compound-timer';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import useSound from 'use-sound';

// Actions
import { TIMER_OFF, SET_WORKED_MILLISECOND } from '../../../../actions/types';
import notify from './notify.wav'
import { initializeNewDayTimer, startTimer, stopTimer } from "../../../../actions/timer/timerAction";

const timerReminder = withReactContent(Swal)

const TimerContainer=()=>{
    const { timerIsOff } = useSelector(state => state.timerStatus)
    const [ isTimerOff, setisTimerOff ] = useState(timerIsOff)
    const [ shouldRemindUser ] = useState(isTimerOff)
    const [ isTimerSessionExist, setTimerSessionExist ] = useState(null)
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
                })
                playSound()
            }
        }
        const reminderTracker = setTimeout(reminder, 300000);
        
        // setTimeout(() => {
        //     reminder()
        // }, 3000000)

        return(()=>{
            clearTimeout(reminderTracker)
        })

    }, [shouldRemindUser, playSound])
    
    

    
    const onStop = (stopMillsecond, resume, reset)=>{
        dispatch(stopTimer())
        const convertedStopHour = Math.floor(stopMillsecond / 3600000)
        timerReminder.fire({
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonColor: '#FF6584',
            confirmButtonText: 'Yes, thanks',
            cancelButtonText: 'Resume',
            icon: 'warning',
            title: 'Stop Timer?',
            text: `you worked ${(convertedStopHour <= 1 ? (`${convertedStopHour} hour`) : (`${convertedStopHour} hours`))} are you through?.`,
            footer: '<a href="">Why am I seeing this?</a>'
        }).then((inputValue)=>{
            if(inputValue.isConfirmed === true){
                setisTimerOff(true)
                dispatch({type: TIMER_OFF, hour: convertedStopHour})
                reset()
            }else{
                console.log('resumeeeeeeee');
                resume()
            }
        })
    }
    const onStart = (start, getTime) =>{
        start()
        dispatch(startTimer())
        setInterval(() => {
            const currentMilliSecond = getTime();
            localStorage.setItem('currentMilliSecond', JSON.stringify(currentMilliSecond))
            setisTimerOff(false)
            dispatch({ type: SET_WORKED_MILLISECOND, payload: currentMilliSecond})
            
        }, 1000);
    }

    // useEffect(() => {
        // const isTimerSessionExist = localStorage.getItem('currentMilliSecond')
        // if(isTimerSessionExist){
        //     console.log('session', Number(isTimerSessionExist) )
        //     dispatch({ type: TIMER_ON })
        //     setInterval(() => {
        //         const currentMilliSecond = Number(isTimerSessionExist);
        //         localStorage.setItem('currentMilliSecond', JSON.stringify(currentMilliSecond))
        //         setisTimerOff(false)
        //         setTimerSessionExist(isTimerSessionExist)
        //         dispatch({ type: SET_WORKED_MILLISECOND, payload: currentMilliSecond})
                
        //     }, 1000);
        // }
    // })

    
    return(
        <>
            <li className="nav-item" h='4' data-tut='reactour__timer'>
                <div id="searchForm" className="ml-auto d-non d-lg-block">
                    <div className="position-relative mb-0">
                        <div id="right-i">
                            {/* <button onClick={()=>dispatch(initializeNewDayTimer())}>initialize timer</button> */}
                            <Timer
                                initialTime={ isTimerSessionExist ? Number(isTimerSessionExist) : 0 }
                                startImmediately={ isTimerSessionExist ? true : false}
                                >
                                {({ resume, start, stop, getTime, reset }) => (
                                    <>
                                        <div id="right-i">
                                            {/* {console.log(Hours())} */}
                                            {

                                                isTimerOff ?
                                                
                                                (
                                                    
                                                    <button onClick={()=>{

                                                        
                                                        onStart(start, getTime)
                                                    }
                                                        
                                                    }
                                                    id="start-time">
                                                    
                                                        Start Time
                                                    
                                                    </button>

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
                                )}
                            </Timer>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}




export default TimerContainer;