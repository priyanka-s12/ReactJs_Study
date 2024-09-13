import { useState } from 'react';

const Proficiency = () => {
  const [proficiency, setProficiency] = useState('');

  const proficiencyHandler = (event) => {
    setProficiency(event.target.value);
  };
  return (
    <>
      <form onChange={proficiencyHandler}>
        <label>Select your proficiency in programming language: </label>
        <br />
        <label>
          <input type="radio" value="beginner" name="level" />
          Beginner
        </label>
        <br />
        <label>
          <input type="radio" value="intermediate" name="level" />
          Intermediate
        </label>
        <br />
        <label>
          <input type="radio" value="advanced" name="level" />
          Advanced
        </label>
        <br />
      </form>
      <p>Selected proficiency level: {proficiency}</p>
    </>
  );
};

const TravelDestination = () => {
  const [destination, setDestination] = useState('');

  const destinationHandler = (event) => {
    setDestination(event.target.value);
  };
  return (
    <>
      <form onChange={destinationHandler}>
        <label>Select your dream travel destination: </label>
        <br />
        <label>
          <input type="radio" value="beach" name="destination" />
          Beach
        </label>
        <br />
        <label>
          <input type="radio" value="mountain" name="destination" />
          Mountain
        </label>
        <br />
        <label>
          <input type="radio" value="city" name="destination" />
          City
        </label>
        <br />
      </form>
      <p>Selected travel destination: {destination}</p>
    </>
  );
};

const CoffeePreference = () => {
  const [selectedCoffee, setSelectedCoffee] = useState('');
  const coffeeHandler = (event) => {
    setSelectedCoffee(event.target.value);
  };
  return (
    <>
      <form onChange={coffeeHandler}>
        <label>Select your coffee preference: </label>
        <br />
        <label>
          <input type="radio" value="black" name="coffee" />
          Black Coffee
        </label>
        <br />
        <label>
          <input type="radio" value="latte" name="coffee" />
          Latte
        </label>
        <br />
        <label>
          <input type="radio" value="cappuccino" name="coffee" />
          Cappiccino
        </label>
        <br />
      </form>
      <p>Selected coffee preference: {selectedCoffee}</p>
    </>
  );
};

const PetPreference = () => {
  const [selectedPet, setSelectedPet] = useState('');
  const petHandler = (event) => {
    setSelectedPet(event.target.value);
  };
  return (
    <>
      <form onChange={petHandler}>
        <label>Select your preferred pet: </label>
        <br />
        <label>
          <input type="radio" value="dog" name="pet" />
          Dog
        </label>
        <br />
        <label>
          <input type="radio" value="cat" name="pet" />
          Cat
        </label>
        <br />
        <label>
          <input type="radio" value="fish" name="pet" />
          Fish
        </label>
        <br />
      </form>
      <p>Selected pet: {selectedPet}</p>
    </>
  );
};

const FavoriteSport = () => {
  const [selectedSport, setSelectedSport] = useState('');

  const sportHandler = (event) => {
    setSelectedSport(event.target.value);
  };
  return (
    <>
      <form onChange={sportHandler}>
        <label>Select your favorite sport: </label>
        <br />
        <label>
          <input type="radio" value="football" name="sport" />
          Football
        </label>
        <br />
        <label>
          <input type="radio" value="basketball" name="sport" />
          Basketball
        </label>
        <br />
        <label>
          <input type="radio" value="tennis" name="sport" />
          Tennis
        </label>
        <br />
      </form>
      <p>Selected sport: {selectedSport}</p>
    </>
  );
};
export default function App() {
  return (
    <main>
      <Proficiency />
      <TravelDestination />
      <CoffeePreference />
      <PetPreference />
      <FavoriteSport />
    </main>
  );
}
