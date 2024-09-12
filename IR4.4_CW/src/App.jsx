import { useState } from 'react';

const LanguageForm = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  // multiple selection so empty array

  const handleLanguageCheckbox = (event) => {
    //want to read values together - destructuring
    const { value, checked } = event.target;
    if (checked) {
      //first time empty array, add value in the array, if existing array, it spreads/ expands arrat and add new value to it
      setSelectedLanguages((prevValue) => [...prevValue, value]);
    } else {
      //remove/ filter unchecked value
      setSelectedLanguages((prevValue) =>
        prevValue.filter((lang) => lang != value)
      );
    }
  };
  return (
    <div>
      {/* checkbox has checked property, read value so want onChange */}
      <input
        type="checkbox"
        value="Javascript"
        onChange={handleLanguageCheckbox}
      />
      Javascript
      <input type="checkbox" value="Python" onChange={handleLanguageCheckbox} />
      Python
      <input type="checkbox" value="Java" onChange={handleLanguageCheckbox} />
      Java
      <p>Selected Languages: {selectedLanguages.join(', ')}</p>
    </div>
  );
};

const MusicGenre = () => {
  //for values, need state var
  const [musicGenre, setMusicGenre] = useState([]);
  const handleMusicCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setMusicGenre((prevMusic) => [...prevMusic, value]);
    } else {
      setMusicGenre((prevMusic) => prevMusic.filter((music) => music != value));
    }
  };
  return (
    <div>
      <input type="checkbox" value="Rock" onChange={handleMusicCheckbox} />
      Rock
      <input type="checkbox" value="Jazz" onChange={handleMusicCheckbox} />
      Jazz
      <input type="checkbox" value="Pop" onChange={handleMusicCheckbox} />
      Pop
      <p>Selected Music Genre: {musicGenre.join(', ')}</p>
    </div>
  );
};

// single checkbox
const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
        />
        I agree to above terms and conditions.
      </label>
      {isChecked && <p>You are agreed.</p>}
      {/* <p>You are: {isChecked ? 'checked' : 'unchecked'}</p> */}
    </>
  );
};
export default function App() {
  return (
    <main>
      <LanguageForm />
      <MusicGenre />
      <Terms />
    </main>
  );
}
