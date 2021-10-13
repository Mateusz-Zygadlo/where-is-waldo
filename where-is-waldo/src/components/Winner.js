import React from 'react';
import { Link } from 'react-router-dom';
import WinnerPopUp from './WinnerPopUp';
import firebaseConfig from './firebase';
import { getFirestore, collection, addDoc, getDocs, orderBy, query, } from 'firebase/firestore';

const app = firebaseConfig;
const db = getFirestore(app);

const Winner = (props) => {
    async function saveNickname() {
        const time = `${props.minutes}:${props.addZero ? `0${props.seconds}` : `${props.seconds}`}`

        await addDoc(collection(db, 'gameNickname'), {
            name: props.winnerNickname,
            time: time,
        });
    }

    return(
        <div>
            <WinnerPopUp setWinnerNicknameFunc={props.setWinnerNicknameFunc} />
            <div className="winnerPageContainer">
                <div className="winnerPage">
                    <h1>{props.winnerNickname ? `${props.winnerNickname} are winner` : 'You are winner'}</h1>
                    <div>Your time: [{props.minutes}:{props.addZero ? `0${props.seconds}` : `${props.seconds}`}]</div>
                    <div className="goHome"><Link to='/'>Go home</Link></div>
                    {props.winnerNickname ? <button className="addToDatabase" onClick={()=>{saveNickname()}}><Link to='/'>Add to database</Link></button> : null}
                </div>
            </div>
        </div>
    )
}

export default Winner;