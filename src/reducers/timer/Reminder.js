

import useSound from 'use-sound';
import notify from './notify.wav'

import { React } from "react";


const reminder = () => {
    const [ playSound ] = useSound(
        notify, { volume: 0.25 }
    )

    playSound()
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

// setTimeout(() => {
//     reminder()
// }, 2000)

export default reminder;