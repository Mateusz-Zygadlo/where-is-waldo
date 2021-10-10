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

  const findWaldo = (x, y) => {
    if(x > 450 && x < 510){
      if(y > 70 && y < 200){
        setWinner(true)
        
        return;
      }
    }

    return 'missed';
  }

  const finalFunction = (e) => {
    if(findWaldo(e.clientX, e.clientY) == 'missed'){
      console.log(true);
    }
  }

  return(
    <div className={winner ? 'winnerBackground' : null}>
      {winner ? <div className="winner">You are winner</div> : 
        <div className="bg" onClick={(e)=>{finalFunction(e)}}>
          <img src={Waldo} alt="Nature" className="responsive" />
        </div>
      }
    </div>
  )
}

export default App;