import { useState } from 'react';
//Object - array within obj
const TravelDestinationApp = () => {
  const [selectContinent, setSelectContinent] = useState('');
  const [selectDestination, setSelectDestination] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const questions = {
    question: 'Select Your Preferred Continent:',
    options: {
      Asia: ['Japan', 'Thailand', 'India'],
      Europe: ['France', 'Italy', 'Spain'],
      'North America': ['USA', 'Canada', 'Mexico'],
    },
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (selectContinent && selectDestination) {
      setShowMessage(true);
    }
  };
  return (
    <div>
      <h2>Travel Destination App</h2>
      {!showMessage ? (
        <div>
          <form onSubmit={formHandler}>
            <label htmlFor="continentSelect">{questions.question} </label>
            <select
              id="continentSelect"
              onChange={(event) => setSelectContinent(event.target.value)}
            >
              <option value="">--Select Continent--</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
            </select>
            <br />
            <br />
            {selectContinent && (
              <>
                <label>Select Your Preferred Destination: </label>
                <br></br>
                {/* {console.log(questions.options[selectContinent])} */}
                {questions.options[selectContinent].map((option, index) => (
                  <div key={index}>
                    <label htmlFor={option}>
                      <input
                        id={option}
                        type="radio"
                        value={option}
                        name="destination"
                        checked={selectDestination === option}
                        onChange={(event) =>
                          setSelectDestination(event.target.value)
                        }
                      />
                      {option}
                    </label>
                    <br />
                  </div>
                ))}
              </>
            )}
            <br />
            <button>Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>Thank You for Sharing Your Preferences!</h3>
          <p>Preferred Continent: {selectContinent}</p>
          <p>Preferred Destination: {selectDestination}</p>
        </div>
      )}
    </div>
  );
};

const MusicPreferenceApp = () => {
  const [genre, setGenre] = useState('');
  const [subGenre, setSubGenre] = useState('');
  const [message, setMessage] = useState(false);

  const questions = {
    question: 'Which type of music do you prefer?',
    options: {
      Rock: ['Classic Rock', 'Alternative Rock', 'Indie Rock'],
      Pop: ['Pop Rock', 'Synth-pop', 'Electropop'],
      'Hip Hop': ['East Coast Hip Hop', 'West Coast Hip Hop', 'Trap Music'],
    },
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (genre && subGenre) {
      setMessage(true);
    }
  };
  return (
    <div>
      <h2>Music Preference App</h2>
      {!message ? (
        <div>
          <form onSubmit={formHandler}>
            <label htmlFor="musicGenreSelect">
              Select Your Preferred Genre:{' '}
            </label>
            <select
              id="musicGenreSelect"
              onChange={(event) => setGenre(event.target.value)}
            >
              <option value="">--Select Genre--</option>
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="Hip Hop">Hip Hop</option>
            </select>
            <br />
            <br />
            {genre && (
              <div>
                <label>Select Your Preferred Subgenre: </label>
                {questions.options[genre].map((option, index) => (
                  <div key={index}>
                    <label htmlFor={option}>
                      <input
                        id={option}
                        type="radio"
                        value={option}
                        name="genre"
                        checked={subGenre === option}
                        onChange={(event) => setSubGenre(event.target.value)}
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
            <br />
            <br />
            <button>Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>Thank You for Sharing Your Preferences!</h3>
          <p>Selected Genre: {genre}</p>
          <p>Selected Sub Genre: {subGenre}</p>
        </div>
      )}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <TravelDestinationApp />
      <br />
      <br />
      <MusicPreferenceApp />
    </main>
  );
}
