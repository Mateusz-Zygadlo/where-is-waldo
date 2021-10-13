import React from 'react';
import Waldo from '../Wheres-waldo-wally-google-maps-380.webp';
import '../App.css';
import NavBar from './Navbar';
import WinnerPage from './pages/WinnerPage';

const App = (props) => {
  const findWaldo = (e) => {
    const xPos = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
    const yPos = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);

    if(xPos > 46 && xPos < 50){
      if(yPos > 62 && yPos < 74){
        props.setStopFunc(true);
        props.setWinnerFunc(true);
        return 'Waldo';
      }
    }
  }

  const finalFunction = (e) => { 
    findWaldo(e);

    if(e.target.className == 'Waldo'){
      props.setStopFunc(true);
      props.setWinnerFunc(true);
    }else{
      return 'missed';
    }
  }

  return(
    <div>
      {props.winner ? <WinnerPage 
                        seconds={props.seconds} 
                        minutes={props.minutes} 
                        addZero={props.addZero} 
                        setWinnerNicknameFunc={props.setWinnerNicknameFunc} 
                        winnerNickname={props.winnerNickname} /> : 
        <div>
          <NavBar {...props} />
          <div className="bg">
            <img src={Waldo} alt="Nature" className="responsive" onClick={(e)=>{finalFunction(e)}} />
          </div>
        </div>
      }
    </div>
  )
}

export default App;