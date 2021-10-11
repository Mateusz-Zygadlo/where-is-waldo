import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(1);
    const [minutes, setMinutes] = useState(0);
    const [addZero, setAddZero] = useState(true);

    useEffect(() => {
        const TimerInt = seconds > 0 && setInterval(() => {
            if(seconds / 9 == 1){
                setAddZero(false);
            }
            if(seconds == 60){
                setSeconds(1);
                setMinutes(minutes + 1);
                setAddZero(true);
            }else{
                setSeconds(seconds + 1);
            }
        }, 1000);
        
        return () => {
            clearInterval(TimerInt)
        }
    }, [seconds]);

    return (
        <div className="timer">
            <div>{minutes}:{addZero ? `0${seconds}` : `${seconds}`}</div>
        </div>
    );
}

export default Timer;