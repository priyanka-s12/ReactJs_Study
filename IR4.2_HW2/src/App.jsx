import { useState } from 'react';

const ValidateZipcode = () => {
  const [zipcode, setZipcode] = useState('');

  const handleZipcode = () => {
    zipcode.length === 5
      ? alert('Valid zipcode.')
      : alert('Invalid zipcode. Please enter 5 digits.');
  };
  return (
    <>
      <label>Enter your zipcode: </label>
      <input
        id="zipcode"
        onChange={(event) => setZipcode(event.target.value)}
      />
      <button onClick={handleZipcode}>Validate Zipcode</button>
    </>
  );
};

const CapptalizedName = () => {
  const [fullName, setFullname] = useState('');

  const handlleClick = () => {
    const nameArray = fullName.split(' ');
    // console.log(nameArray);
    const capitalized = nameArray.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    alert(`Capitalized Full Name: ${capitalized.join(' ')}`);
    // console.log(capitalized);
  };
  return (
    <>
      <label>Enter your full name: </label>
      <input
        id="fullName"
        onChange={(event) => setFullname(event.target.value)}
      />
      <button onClick={handlleClick}>Capitalize Name</button>
    </>
  );
};

const SearchTerm = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <label>Enter search term: </label>
      <input
        id="searchInput"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={() => setSearchInput('')}>Reset Search Term</button>
      {searchInput && <p>{searchInput}</p>}
    </>
  );
};

const ResetAddress = () => {
  const [addressInput, setAddressInput] = useState('');
  return (
    <>
      <label>Enter your address: </label>
      <input
        id="addressInput"
        value={addressInput}
        onChange={(event) => setAddressInput(event.target.value)}
      />
      <button onClick={() => setAddressInput('')}>Reset Address</button>
      {addressInput && <p>{addressInput}</p>}
    </>
  );
};

const ClearMessage = () => {
  const [messageInput, setMessageInput] = useState('');
  return (
    <>
      <label>Enter a message: </label>
      <input
        id="messageInput"
        value={messageInput}
        onChange={(event) => setMessageInput(event.target.value)}
      />
      <button onClick={() => setMessageInput('')}>Clear Message</button>
    </>
  );
};
export default function App() {
  return (
    <main>
      <ValidateZipcode />
      <br />
      <br />
      <CapptalizedName />
      <br />
      <br />
      <SearchTerm />
      <br />
      <br />
      <ResetAddress />
      <br />
      <br />
      <ClearMessage />
    </main>
  );
}
