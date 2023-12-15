import { useState } from 'react';
import './App.css';

function GenerateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

function App() {
  const randomNumber = GenerateRandomNumber();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <>
      <div className='center-box'>
        <div className='Head'>
          <h1>Tente acertar o Número de 0 a 9:</h1>
          <p>{inputValue == randomNumber ? "Você Acertou!" : "Você Errou!"}</p>
        </div>
        <div className='content'>
          <label>
            <p>Digite um Número</p>
            <input type="number" name="Random-user" id="Random-user" value={inputValue} onChange={handleInputChange} />
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
