import { useState } from 'react';

const ColorSelect = () => {
  const [color, setColor] = useState('');
  //only 1 str val, so empty string

  const colorSelectHandler = (event) => {
    setColor(event.target.value);
  };
  return (
    <div>
      <label htmlFor="colorSelect">Select a color: </label>
      <select id="colorSelect" onChange={colorSelectHandler}>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select>
      {color && <p>Color selected: {color}</p>}
    </div>
  );
};

const DaySelect = () => {
  const [day, setDay] = useState('');
  const daySelectHandler = (event) => {
    setDay(event.target.value);
  };
  return (
    <div>
      <label htmlFor="daySelect">Select a day: </label>
      <select id="daySelect" onChange={daySelectHandler}>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Saturday">Saturday</option>
      </select>
      {day && (
        <p>
          {day === 'Sunday' || day === 'Saturday'
            ? `${day} is a weekend.`
            : `${day} is a weekday.`}
        </p>
      )}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <ColorSelect />
      <br />
      <DaySelect />
    </main>
  );
}
