import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterestes] = useState([]);
  const [color, setColor] = useState('');

  const [formData, setFormData] = useState(false);

  const interestHandler = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      setInterestes([...interests, value]);
    } else {
      setInterestes(interests.filter((interest) => interest != value));
    }
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (name && address && gender && interests && color) {
      setFormData(true);
    }
    // console.log(name, address, gender, interests.join(', '), color);
  };
  return (
    <main>
      {/* single component so inside App component*/}
      <h1>User Profile Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          id="nameInput"
        />
        <br /> <br />
        <label htmlFor="addressTextarea">Address: </label>
        <br />
        <textarea
          id="addressTextarea"
          rows="4"
          cols="40"
          onChange={(event) => setAddress(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label>Gender: </label>
        <br />
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />
        Female
        <br />
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />
        Male
        <br />
        <input
          type="radio"
          value="Others"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />
        Others
        <br />
        <br />
        <label>Interests: </label>
        <br />
        <input type="checkbox" value="Reading" onChange={interestHandler} />
        Reading
        <br />
        <input type="checkbox" value="Singing" onChange={interestHandler} />
        Singing
        <br />
        <input type="checkbox" value="Painting" onChange={interestHandler} />
        Painting
        <br />
        <br />
        <label htmlFor="colorSelect">Favourite Color: </label>
        <select
          id="colorSelect"
          onChange={(event) => setColor(event.target.value)}
        >
          <option>Select color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Gender: {gender}</p>
          <p>Interests: {interests.join(', ')}</p>
          <p>Favourite color: {color}</p>
        </div>
      )}
    </main>
  );
}
