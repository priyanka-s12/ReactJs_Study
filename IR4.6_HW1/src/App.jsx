import { useState } from 'react';

const InstrumentSelect = () => {
  const [selectedInstrument, setSelectedInstrument] = useState('');

  const instrumentHandler = (event) => {
    setSelectedInstrument(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectInstrument">Select a musical instrument: </label>
      <select id="selectInstrument" onChange={instrumentHandler}>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      <p>Type: {selectedInstrument}</p>
    </div>
  );
};

const LanguageSelect = () => {
  const [language, setLanguage] = useState('');

  const languageHandler = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectLanguage">Select a language: </label>
      <select id="selectLanguage" onChange={languageHandler}>
        <option value="England">English</option>
        <option value="France">French</option>
        <option value="Spain">Spanish</option>
      </select>
      {language && <p>Origin: {language}</p>}
    </div>
  );
};

const CarSelect = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const carHandler = (event) => {
    setSelectedCar(event.target.value);
  };

  return (
    <div>
      <label htmlFor="selectCar">Select a car brand: </label>
      <select id="selectCar" onChange={carHandler}>
        <option value="Audi - German luxury automobile manufacturer">
          Audi
        </option>
        <option value="BMW- Bavarian Motor Works, a German multinational company">
          BMW
        </option>
        <option value="Tesla - American electric vehicle and clean energy company">
          Tesla
        </option>
      </select>
      <p>Details: {selectedCar}</p>
    </div>
  );
};

const ContinentSelect = () => {
  const [continent, setContinent] = useState('');

  const continentHandler = (event) => {
    setContinent(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectContinent">Select a continent: </label>
      <select id="selectContinent" onChange={continentHandler}>
        <option value="Africa - The second largest and second most populous continent">
          Africa
        </option>
        <option value="Asia - The largest continent by land area and population">
          Asia
        </option>
        <option value="Europe - The third most populous continent">
          Europe
        </option>
      </select>
      <p>Details: {continent}</p>
    </div>
  );
};

const MovieGenreSelect = () => {
  const [movieGenre, setMovieGenre] = useState('');
  const movieGenreHandler = (event) => {
    setMovieGenre(event.target.value);
  };
  return (
    <div>
      <label htmlFor="selectMovieGenre">Select a movie genre: </label>
      <select id="selectMovieGenre" onChange={movieGenreHandler}>
        <option value="Action - Films with exciting and fast-paced sequences">
          Action
        </option>
        <option value="Comedy - Films intended to make the audience laugh">
          Comedy
        </option>
        <option value="Drama - Films with serious themes and emotions">
          Drama
        </option>
      </select>
      <p>Description: {movieGenre}</p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <InstrumentSelect />
      <LanguageSelect />
      <br />
      <CarSelect />
      <ContinentSelect />
      <MovieGenreSelect />
    </main>
  );
}
