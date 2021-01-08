// import React from 'react'
// import { useState, useEffect } from 'react';

// const Timer = (props) => {
//     const {initialMinute = 1,initialSeconds = 1} = props;
//     const [ minutes, setMinutes ] = useState(initialMinute);
//     const [seconds, setSeconds ] =  useState(initialSeconds);
//     useEffect(()=>{
//     let myInterval = setInterval(() => {
//             if (seconds > 0) {
//                 setSeconds(seconds - 1);
//             }
//             if (seconds === 0) {
//                 if (minutes === 0) {
//                     clearInterval(myInterval)
//                 } else {
//                     setMinutes(minutes - 1);
//                     setSeconds(59);
//                 }
//             } 
//         }, 1000)
//         return ()=> {
//             clearInterval(myInterval);
//           };
//     });

//     return (
//         <div>
//         { minutes === 0 && seconds === 0
//             ? null
//             : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
//         }
//         </div>
//     )
// }

// export default Timer;


import React, { Component } from "react";

class Timer2 extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this.props;
    console.log(startDate);
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      return;
    }
    this.setState({ days, hours, minutes, seconds, expired: false });
  };

  render() {
    const { days, hours, minutes, seconds, expired } = this.state;
    if (expired) {
      return <div className="expired">Expired : </div>;
    }
    return (
      <div className="timer">
          <style>
              {
                  `
                  .timer {
                    display: flex;
                    font-size: 20px;
                    justify-content: center;
                  }
                  .timer > div {
                    padding: 10px;
                    background: #444;
                    color: #fff;
                    font-size: 30px;
                    margin-right: 2px;
                    width: 100px;
                    display: flex;
                    justify-content: center;
                  }
                  .timer > div > span {
                    text-transform: uppercase;
                    color: #999;
                    font-size: 20px;
                    display: flex;
                    align-items: center;
                  }
                  .expired {
                    font-size: 20px;
                    color: rgb(126, 49, 49);
                    border: 1px solid rgb(126, 49, 49);
                    padding: 20px;
                  }
                  

                  `
              }
          </style>
        <div>
          {days}
          <span>d</span>
        </div>
        <div>
          {hours}
          <span>h</span>
        </div>
        <div>
          {minutes}
          <span>m</span>
        </div>
        <div>
          {seconds}
          <span>s</span>
        </div>
      </div>
    );
  }
}
export default Timer2;

// const startDate = new Date().getTime() + 31536000000;

// <Timer2 startDate={startDate} />
