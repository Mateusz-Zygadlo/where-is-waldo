import React from 'react';
import { Link } from 'react-router-dom';
import WinnerPopUp from './WinnerPopUp';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDum1S9rK1r7PVi3nhybg_7DkznOdYf5EQ",
    authDomain: "where-s-waldo-77974.firebaseapp.com",
    projectId: "where-s-waldo-77974",
    storageBucket: "where-s-waldo-77974.appspot.com",
    messagingSenderId: "607103542662",
    appId: "1:607103542662:web:721f84db67270edfadf807"
};

const app = initializeApp(firebaseConfig);
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
                    {props.winnerNickname ? <button className="addToDatabase" onClick={()=>{saveNickname()}}>Add to database</button> : null}
                </div>
            </div>
        </div>
    )
}

export default Winner;