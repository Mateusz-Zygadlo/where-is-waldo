import React, { useState } from 'react';
import Waldo from '../Wheres-waldo-wally-google-maps-380.webp';
import '../App.css';
import NavBar from './Navbar';

const App = () => {
  const [winner, setWinner] = useState(false);
  const [stop, setStop] = useState(false);

  const findWaldo = (e) => {
    const xPos = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
    const yPos = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);

    if(xPos > 46 && xPos < 50){
      if(yPos > 62 && yPos < 74){
        setStop(true);
        setWinner(true);
        return 'Waldo';
      }
    }
  }

  const finalFunction = (e) => { 
    findWaldo(e);

    if(e.target.className == 'Waldo'){
      setStop(true);
      setWinner(true);
    }else{
      return 'missed';
    }
  }

  return(
    <div className={winner ? 'winnerBackground' : null}>
      {winner ? <div className="winner">You are winner</div> : 
        <div>
        <NavBar stop={stop} />
          <div className="bg">
            <img src={Waldo} alt="Nature" className="responsive" onClick={(e)=>{finalFunction(e)}} />
          </div>
        </div>
      }
    </div>
  )
}

export default App;