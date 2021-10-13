import React from 'react';
import { Link } from 'react-router-dom';
import WinnerPopUp from './WinnerPopUp';

const Winner = (props) => {
    return(
        <div>
            <WinnerPopUp setWinnerNicknameFunc={props.setWinnerNicknameFunc} />
            <div className="winnerPageContainer">
                <div className="winnerPage">
                    <h1>{props.winnerNickname ? `${props.winnerNickname} are winner` : 'You are winner'}</h1>
                    <div>Your time: [{props.minutes}:{props.addZero ? `0${props.seconds}` : `${props.seconds}`}]</div>
                    <div className="goHome"><Link to='/'>Go home</Link></div>
                    {props.winnerNickname ? <button className="addToDatabase">Add to database</button> : null}
                </div>
            </div>
        </div>
    )
}

export default Winner;