import React, { useState } from 'react';
import Waldo from './waldo.png';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Timer from './Timer.js';

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
  const [positionXImg, setPositionXImg] = useState(0);
  const [positionYImg, setPositionYImg] = useState(0);
  const [visiblityMode, setVisiblityMode] = useState(false);

  const findWaldo = (e) => {
    const xPos = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
    const yPos = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
    
    if(xPos > 450 && xPos < 510){
      if(yPos > 70 && yPos < 200){
        return 'Waldo';
      }
    }

    return 'missed';
  }

  const finalFunction = (e) => {
    const xPos = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
    const yPos = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);

    setPositionXImg(e.clientX);
    setPositionYImg(e.clientY);

    if(e.target.className == 'Waldo'){
      return;
    }else{
      if(findWaldo(e) == 'Waldo'){
        if(e.target.className == 'Waldo'){
          setWinner(true);
        }else{
          setPositionX(xPos);
          setPositionY(yPos);
          setVisiblityMode(false);
  
          return 'missed';
        }
      }
  
      setPositionX(xPos);
      setPositionY(yPos);
      setVisiblityMode(false);
    }
  }

  const clickBtn = (e) => {
    if(e.target.className == 'Waldo'){
      if(positionX > 46 && positionX < 51){
        if(positionY > 13 && positionY < 36){
          setWinner(true);
          return;
        }
      }
    }
    setVisiblityMode(true);
    return false;
  }

  const xAndY = (e) => {
    const xPos = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
    const yPos = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);

    console.log('x', xPos, 'y', yPos);
  }

  return(
    <div className={winner ? 'winnerBackground' : null}>
      {winner ? <div className="winner">You are winner</div> : 
        <div>
        <Timer />
          <div className="bg">
            <img src={Waldo} alt="Nature" className="responsive" onClick={(e)=>{finalFunction(e); xAndY(e)}} />
            <div className={visiblityMode ? 'visiblity' : 'absolute'} style={{top: positionYImg, left: positionXImg}}>
              <div className="Waldo" onClick={(e)=>{clickBtn(e)}}>Waldo</div>
              <div onClick={(e)=>{clickBtn(e)}}>Object 2</div>
              <div onClick={(e)=>{clickBtn(e)}}>Element 3</div>
            </div>
          </div>
          </div>
      }
    </div>
  )
}

export default App;