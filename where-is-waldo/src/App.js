import React, { useState } from 'react';
import Waldo from './waldo.png';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDum1S9rK1r7PVi3nhybg_7DkznOdYf5EQ",
  authDomain: "where-s-waldo-77974.firebaseapp.com",
  projectId: "where-s-waldo-77974",
  storageBucket: "where-s-waldo-77974.appspot.com",
  messagingSenderId: "607103542662",
  appId: "1:607103542662:web:721f84db67270edfadf807"
})

const db = getFirestore(firebaseApp);

const App = () => {
  const [winner, setWinner] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [visiblityMode, setVisiblityMode] = useState(false);

  const findWaldo = (x, y) => {
    if(x > 450 && x < 510){
      if(y > 70 && y < 200){
        return 'Waldo';
      }
    }

    return 'missed';
  }

  const finalFunction = (e) => {
    if(e.target.className == 'Waldo'){
      return;
    }else{
      if(findWaldo(e.clientX, e.clientY) == 'Waldo'){
        if(e.target.className == 'Waldo'){
          setWinner(true);
        }else{
          setPositionX(e.clientX);
          setPositionY(e.clientY);
          setVisiblityMode(false);
  
          return 'missed';
        }
      }
  
      setPositionX(e.clientX);
      setPositionY(e.clientY);

      setVisiblityMode(false);
    }
  }

  const clickBtn = (e) => {
    if(e.target.className == 'Waldo'){
      if(positionX > 450 && positionX < 510){
        if(positionY > 70 && positionY < 200){
          setWinner(true);
          return;
        }
      }
    }
    console.log('missed');
    setVisiblityMode(true);
    return false;
  }

  return(
    <div className={winner ? 'winnerBackground' : null}>
      {winner ? <div className="winner">You are winner</div> : 
        <div className="bg" onClick={(e)=>{finalFunction(e)}}>
          <img src={Waldo} alt="Nature" className="responsive" />
          <div className={visiblityMode ? 'visiblity' : 'absolute'} style={{top: positionY, left: positionX}}>
            <div className="Waldo" onClick={(e)=>{clickBtn(e)}}>Waldo</div>
            <div onClick={(e)=>{clickBtn(e)}}>Object 2</div>
            <div onClick={(e)=>{clickBtn(e)}}>Element 3</div>
          </div>
        </div>
      }
    </div>
  )
}

export default App;