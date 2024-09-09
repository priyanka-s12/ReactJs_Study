import { useState } from 'react';

const ValidatePhoneNumber = () => {
  const [phoneNumberInput, setPhoneNumberInput] = useState('');

  const handlePhoneNumber = () => {
    phoneNumberInput.length === 10
      ? alert('Valid Phone Number.')
      : alert('Invalid Phone Number. Please enter 10 digits');
  };
  return (
    <>
      <label for="phoneNumberInput">Enter your phone number: </label>
      <input
        id="phoneNumberInput"
        onChange={(event) => setPhoneNumberInput(event.target.value)}
      />
      <button onClick={handlePhoneNumber}>Validate Phone Number</button>
    </>
  );
};

const CheckPasswordStrength = () => {
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordStrength = () => {
    passwordInput.length >= 10
      ? alert('Password Strength: strong')
      : alert('Password Strength:  weak');
  };
  return (
    <>
      <label for="passwordInput">Enter your password: </label>
      <input
        id="passwordInput"
        type="password"
        onChange={(event) => setPasswordInput(event.target.value)}
      />
      <button onClick={handlePasswordStrength}>Check Password Strength</button>
    </>
  );
};

const CalculateAge = () => {
  const [dateInput, setDateInput] = useState('');

  const handleClick = () => {
    const currentYear = new Date().getFullYear();
    const birthDate = new Date(dateInput);
    // console.log(currentYear, birthDate.getFullYear());
    const age = currentYear - birthDate.getFullYear();
    alert(`You are ${age} years old.`);
  };

  return (
    <>
      <label for="dateInput">Enetr your birthdate: </label>
      <input
        id="dateInput"
        type="date"
        onChange={(event) => setDateInput(event.target.value)}
      />
      <button onClick={handleClick}>Calculate Age</button>
    </>
  );
};

const DisplayColor = () => {
  const [colorInput, setColorInput] = useState('');
  const [colorValue, setColorValue] = useState('');
  // console.log(colorInput);
  const handleClick = () => {
    setColorValue(colorInput);
  };

  return (
    <>
      <label>Enter your favorite color: </label>
      <input
        id="colorInput"
        onChange={(event) => setColorInput(event.target.value)}
      />
      <button onClick={handleClick}>Display Color</button>
      {colorValue && <p>Your favorite color is {colorValue}.</p>}
    </>
  );
};

const SearchQuery = () => {
  const [searchInput, setSearchInput] = useState('');
  const [showQuery, setQuery] = useState('');

  const handleClick = () => {
    console.log(searchInput);
    setQuery(searchInput);
  };
  return (
    <>
      <label>Enetr your search query: </label>
      <input
        id="searchInput"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      {showQuery && <p>Searching for: {showQuery}</p>}
    </>
  );
};
export default function App() {
  return (
    <main>
      <ValidatePhoneNumber />
      <br />
      <br />
      <CheckPasswordStrength />
      <br /> <br />
      <CalculateAge />
      <br />
      <br />
      <DisplayColor />
      <br />
      <br />
      <SearchQuery />
    </main>
  );
}
