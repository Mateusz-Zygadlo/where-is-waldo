import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import WinnerPage from './pages/WinnerPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
            exact 
            path='/' 
            render={() => (
                <HomePage />
            )} />
        <Route 
            exact 
            path='/game'
            render={() => (
                <GamePage />
            )} />
        <Route 
            exact 
            path='/winner'
            render={() => (
                <WinnerPage />
            )} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;