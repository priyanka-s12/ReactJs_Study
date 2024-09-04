import { useState } from 'react';

function UpdateCounter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
}

function ToggleBackground() {
  const [backgroundColor, setBackground] = useState('lightblue');

  return (
    <>
      <button
        style={{ background: `${backgroundColor}` }}
        onClick={() =>
          setBackground(backgroundColor === 'lightblue' ? 'grey' : 'lightblue')
        }
      >
        Toggle Background
      </button>
    </>
  );
}

function ShowHideMessage() {
  const [message, setMessage] = useState(false);
  const text = 'This is a toggleable message!';
  return (
    <>
      <button onClick={() => setMessage(!message)}>
        {!message ? 'Hide Message' : 'Show Message'}
      </button>
      <p>{!message ? text : ''}</p>
    </>
  );
}

function ToggleColor() {
  const [colorChange, setColor] = useState('red');

  return (
    <>
      <p style={{ color: `${colorChange}` }}>Text Color Toggler</p>
      <button
        onClick={() => setColor(colorChange === 'green' ? 'red' : 'green')}
      >
        Toggle Color
      </button>
    </>
  );
}

const SelectFruit = () => {
  const fruitsArray = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
  const [fruitVar, setFruit] = useState('');

  const fruitData = fruitsArray.map((fruit, index) => (
    <li key={index} onClick={() => setFruit(fruit)}>
      {fruit}
    </li>
  ));

  return (
    <>
      <h2>Select a Fruit</h2>
      <ul>{fruitData}</ul>
      <p>{fruitVar ? `You selected: ${fruitVar}` : ''}</p>
    </>
  );
};
export default function App() {
  return (
    <main>
      <UpdateCounter />
      <hr />
      <ToggleBackground />
      <hr />
      <ShowHideMessage />
      <hr />
      <ToggleColor />
      <hr />
      <SelectFruit />
    </main>
  );
}
