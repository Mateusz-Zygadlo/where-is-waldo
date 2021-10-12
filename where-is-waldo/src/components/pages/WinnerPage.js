import React from 'react';

const WinnerPage = (props) => {
    return(
        <div className="winnerPageContainer">
            <div className="winnerPage">
                <h1>You are winner</h1>
                <div>Your time: [{props.minutes}:{props.addZero ? `0${props.seconds}` : `${props.seconds}`}]</div>
            </div>
        </div>
    )
}

export default WinnerPage;