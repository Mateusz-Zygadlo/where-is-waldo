import React, {  useEffect } from 'react';

const Timer = (props) => {
    useEffect(() => {
        const TimerInt = props.seconds > 0 && !props.stop && setInterval(() => {
            if(props.seconds / 9 == 1){
                props.setAddZeroFunc(false);
            }
            if(props.seconds == 60){
                props.setSecondsFunc(1);
                props.setMinutesFunc(props.minutes + 1);
                props.setAddZeroFunc(true);
            }else{
                props.setSecondsFunc(props.seconds + 1);
            }
        }, 1000);
        
        return () => {
            clearInterval(TimerInt)
        }
    }, [props.seconds]);

    return (
        <div className="timer">
            <div>{props.minutes}:{props.addZero ? `0${props.seconds}` : `${props.seconds}`}</div>
        </div>
    );
}

export default Timer;