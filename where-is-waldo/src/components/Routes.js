import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

const Routes = () => {
  const [stop, setStop] = useState(false);
  const [seconds, setSeconds] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [addZero, setAddZero] = useState(true);
  const [winner, setWinner] = useState(false);
  const [winnerNickname, setWinnerNickname] = useState('');

  const reset = () => {
    setSecondsFunc(1);
    setMinutesFunc(0);
    setAddZeroFunc(true);
    setWinnerFunc(false);
    setStopFunc(false);
    setWinnerNickname('');
  }

  const setWinnerNicknameFunc = (value) => {
    setWinnerNickname(value);
  }

  const setSecondsFunc = (value) => {
    setSeconds(value);
  }

  const setMinutesFunc = (value) => {
    setMinutes(value);
  }

  const setAddZeroFunc = (value) => {
    setAddZero(value);
  }

  const setWinnerFunc = (value) => {
    setWinner(value);
  }

  const setStopFunc = (value) => {
    setStop(value);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route 
            exact 
            path='/' 
            render={() => (
              <HomePage reset={reset} />
            )} />
        <Route 
            exact 
            path='/game'
            render={() => (
                <GamePage 
                  setWinnerFunc={setWinnerFunc} 
                  winner={winner}
                  setSecondsFunc={setSecondsFunc}
                  setMinutesFunc={setMinutesFunc}
                  setAddZeroFunc={setAddZeroFunc}
                  seconds={seconds}
                  minutes={minutes}
                  addZero={addZero}
                  stop={stop}
                  setStopFunc={setStopFunc}
                  setWinnerNicknameFunc={setWinnerNickname}
                  winnerNickname={winnerNickname} />
            )} />
        <Route 
            exact
            path='/results'
            render={() => (
              <ResultPage />
            )}  />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;