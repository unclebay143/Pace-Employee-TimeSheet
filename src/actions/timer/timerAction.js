import TimerService from "../../services/timer/timer.Service";

const initializeNewDayTimer = () => (dispatch) =>{
    console.log('from initial act');
    return TimerService.initializeTimerRecord()
    .then((response) => {
        console.log('from initial action', response);
    })
    .catch((err) =>{
        console.log('timer initial err ', err)
    })
}


const startTimer = () => (dispatch) =>{
    return TimerService.startTimer()
    .then((response) => {
        console.log('timer action', response);
    })
    .catch((err) =>{
        console.log('timer err ', err)
    })
}


const stopTimer = () => (dispatch) =>{
    return TimerService.stopTimer()
    .then((response) =>{
        console.log('stop timer action', response)
    })
    .catch((err)=>{
        console.log('stopTimer error in action', err)
    })
}


const fetchPersonalTimeSheet = () => (dispatch) =>{
    return TimerService.getPersonalTimeSheet()
    .then((response) =>{
        console.log('personal time sheet action', response)
    })
    .catch((err)=>{
        console.log('personal time sheet error in action', err)
    })

}

export {
    startTimer,
    stopTimer,
    fetchPersonalTimeSheet,
    initializeNewDayTimer,
}