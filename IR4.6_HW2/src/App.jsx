import { useState } from 'react';

const SizeSelect = () => {
  const [size, setSize] = useState('');

  const sizeHandler = (event) => {
    setSize(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectSize">Select a clothing size: </label>
      <select id="selectSize" onChange={sizeHandler}>
        <option value="Small - Fits chest size 34-36 inches">Small</option>
        <option value="Medium - Fits chest size 38-40 inches">Medium</option>
        <option value="Large - Fits chest size 42-44 inches">Large</option>
      </select>
      <p>Description: {size}</p>
    </div>
  );
};

const JobTypeSelect = () => {
  const [jobType, setJobType] = useState('');
  const jobTypeHandler = (event) => {
    setJobType(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectJob">Select a job type: </label>
      <select id="selectJob" onChange={jobTypeHandler}>
        <option value="Full-time - Employment for a standard 40-hour workweek">
          Full-time
        </option>
        <option value="Part-time - Employment for less than a standard workweek">
          Part-time
        </option>
        <option value="Contract - Temporary employment for a specific project or period">
          Contract
        </option>
      </select>
      <p>Description: {jobType}</p>
    </div>
  );
};

const MealTimeSelect = () => {
  const [mealTime, setMealTime] = useState('');
  const mealHandler = (event) => {
    setMealTime(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectMeal">Select a meal time: </label>
      <select id="selectMeal" onChange={mealHandler}>
        <option value="Breakfast - Morning meal typically eaten before starting the day">
          Breakfast
        </option>
        <option value="Lunch - Midday meal typically eaten aroun noon">
          Lunch
        </option>
        <option value="Dinner - Evening meal typically eaten at the end of the day">
          Dinner
        </option>
      </select>
      <p>Description: {mealTime}</p>
    </div>
  );
};

const SkillLevelSelect = () => {
  const [skillLevel, setSkillLevel] = useState('');
  const skillHandler = (event) => {
    setSkillLevel(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectSkillLevel">Select your skill level: </label>
      <select id="selectSkillLevel" onChange={skillHandler}>
        <option value="Beginner - Just starting out, limited experience or knowledge">
          Beginner
        </option>
        <option value="Intermediate - Some experience or knowledge, moderate skill level">
          Intermediate
        </option>
        <option value="Advanced - Extensive experience or knowledge, high skill level">
          Advanced
        </option>
      </select>
      <p>Description: {skillLevel}</p>
    </div>
  );
};

const TemperatureUnitSelect = () => {
  const [unit, setUnit] = useState('');

  const unitHandler = (event) => {
    setUnit(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectUnit">Select a temperature unit: </label>
      <select id="selectUnit" onChange={unitHandler}>
        <option value="Calsius - Temperature scale in which water freezes at 0 degrees and boils at 100 degrees">
          Celsius
        </option>
        <option value="Fahrenheit - Temperature scale widely used in the United States">
          Fahrenheit
        </option>
        <option value="Kelvin - Absolute temperature scale with 0 representing absolute zero ">
          Kelvin
        </option>
      </select>
      <p>Description: {unit}</p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <SizeSelect />
      <JobTypeSelect />
      <MealTimeSelect />
      <SkillLevelSelect />
      <TemperatureUnitSelect />
    </main>
  );
}
