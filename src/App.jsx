import React, { useState } from 'react';
import './App.css';


import Dice1 from "./images/dice.png";
import Dice2 from "./images/dice1.png";
import Dice3 from "./images/dice2.png";
import Dice4 from "./images/dice3.png";
import Dice5 from "./images/dice4.png";
import Dice6 from "./images/dice5.png";


import diceSound from "./dice-sound.mp3";

function App() {
  const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  
  const [image, setNewImage] = useState(diceImages[0]);
  const [image2, setNewImage2] = useState(diceImages[1]);
  const [sum, setSum] = useState(3);

 
  const rollDice = () => {
    const randomNum1 = Math.floor(Math.random() * 6);
    const randomNum2 = Math.floor(Math.random() * 6);

    
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);

   
    setSum((randomNum1 + 1) + (randomNum2 + 1));

    
    const audio = new Audio(diceSound);
    audio.play().catch(error => console.log("Audio play error:", error));
  };

  return (
    <div className="App">
      <center>
        <h1>DICE ROLLER</h1>
        <div className="container">
          <img className="square" src={image} alt="Dice 1" />
          <div style={{ width: '5px', display: 'inline-block' }}></div>
          <img className="square" src={image2} alt="Dice 2" />
        </div>

        <h2>Sum: {sum}</h2> 

        <button className="btn" onClick={rollDice}>Roll</button>
      </center>
    </div>
  );
}

export default App;
