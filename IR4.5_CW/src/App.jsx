import { useState } from 'react';

const GenderForm = () => {
  const [gender, setGender] = useState('');
  //one value sp empty string

  //handler at the end - handle the functionality - name convention
  const onChangeHandler = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <form onChange={onChangeHandler}>
        {/* no need to attch handler to each of the radio btn */}
        <label>Select Gender: </label>
        <br />
        <input type="radio" value="Female" name="gender" />
        Female
        <br />
        <input type="radio" value="Male" name="gender" />
        Male
        <br />
        <input type="radio" value="Others" name="gender" />
        Others
        <br />
      </form>
      {gender && <p>Selected Gender: {gender}</p>}
    </>
  );
};

const MealPreference = () => {
  const [meal, setMeal] = useState('');

  const mealPreferenceHandler = (event) => {
    setMeal(event.target.value);
  };
  return (
    <>
      <form onChange={mealPreferenceHandler}>
        <label>Choose your meal preference: </label>
        <br />
        <input type="radio" value="vegetarian" name="meal" />
        Vegetarian
        <br />
        <input type="radio" value="non-vegetarian" name="meal" />
        Non-Vegetarian
        <br />
      </form>
      {meal && <p>Selected Meal Preference: {meal}</p>}
    </>
  );
};
export default function App() {
  return (
    <main>
      <GenderForm />
      <br />
      <MealPreference />
    </main>
  );
}
