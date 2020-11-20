import React, { useState } from 'react';
import './App.css';
import KeyboardIcon from './assets/icons/keyboard.svg';
import Input from './components/Input/Input';
import Dropdown from './components/Dropdown/Dropdown';
import { DifficultyLevel } from './constants/difficultyLevel';
import Button from './components/Button/Button';
function App() {
  const [difficultyLevel] = useState(DifficultyLevel);
  
  return (
    <div className="app">

      <img className="app__logo" src={KeyboardIcon} alt="logo" />

      <h1 className="app__title">fast fingers</h1>
      <p className="app__subTitle pb-4">
        the ultimate typing game
      </p>


      {/* Type your name */}
      <Input placeholder="type your name" />

      <Dropdown
        options={
          difficultyLevel
        }
      />


      <div className="mt-5">
        <Button
          
          title="Start Game" icon="play" type="submit" />
      </div>

    </div>
  );
}

export default App;
