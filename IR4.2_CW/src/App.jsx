//how to take user input in react

import { useState } from 'react';

const GreetUser = () => {
  const [username, setUsername] = useState('');

  const inputHandler = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div>
      <label for="username">Enetr your Name: </label>
      <input id="username" onChange={inputHandler} />
      {username && <p>Hello, {username}</p>}
    </div>
  );
};

const ValidateEmail = () => {
  const [email, setEmail] = useState('');

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const clickHandler = () => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.');
    if (atIndex > 0 && dotIndex > atIndex) {
      alert('Valid Email Address');
    } else {
      alert('Invalid Email Address');
    }
  };

  return (
    <div>
      <label for="emailInput">Enter an email: </label>
      <input id="emailInput" onChange={handleEmailInput} />
      <button onClick={clickHandler}>Validate Email</button>
    </div>
  );
};

const CalculateSquare = () => {
  const [numberInput, setNumberInput] = useState();
  const [squaredValue, setSquaredValue] = useState();

  const handleClick = () => {
    const sqaureValue = numberInput * numberInput;
    setSquaredValue(sqaureValue);
  };
  return (
    <div>
      <label for="numberInput">Enetr a number: </label>
      <input
        id="numberInput"
        onChange={(event) => setNumberInput(event.target.value)}
      />
      <button onClick={handleClick}>Calculate Square</button>
      {/* <p>{squaredValue}</p> */}
      {/* unnecesserily occupying p tag space on dom so write a condition  */}
      {squaredValue && <p>{squaredValue}</p>}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <GreetUser />
      <br />
      <br />
      <ValidateEmail />
      <br />
      <CalculateSquare />
    </main>
  );
}
