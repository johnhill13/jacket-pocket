import React, { Component } from 'react';
import GameWindow from './components/gameWindow/gameWindow';
import PlayerNames from './components/playerNames/playerNames';
import Title from './components/title/title';

class anotherClassName extends Component {
  render() {
    return (
      <>
        <Title />
        <GameWindow />
        <PlayerNames />
      </>
  )} 
}

export default anotherClassName;
