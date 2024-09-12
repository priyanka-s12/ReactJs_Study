import { useState } from 'react';

const SportsCheckbox = () => {
  const [selectedSports, setSelectedSports] = useState([]);

  const handleSports = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSports((prevSport) => [...prevSport, value]);
    } else {
      setSelectedSports((prevSport) =>
        prevSport.filter((sport) => sport != value)
      );
    }
  };
  return (
    <>
      <label>Choose your favorite sports:</label>
      <br />
      <label>
        <input type="checkbox" value="football" onChange={handleSports} />
        Football
      </label>
      <br />
      <label>
        <input type="checkbox" value="basketball" onChange={handleSports} />
        Basketball
      </label>
      <br />
      <label>
        <input type="checkbox" value="tennis" onChange={handleSports} /> Tennis
      </label>
      <br />
      <label>
        <input type="checkbox" value="swimming" onChange={handleSports} />
        Swimming
      </label>
      <br />
      {selectedSports.length !== 0 && (
        <p>Selected sports: {selectedSports.join(', ')}</p>
      )}
    </>
  );
};

const ColorsCheckbox = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColors = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedColors((colors) => [...colors, value]);
    } else {
      setSelectedColors((colors) => colors.filter((color) => color != value));
    }
  };

  return (
    <>
      <label>Choose your favorite colors:</label>
      <br />
      <label>
        <input type="checkbox" value="red" onChange={handleColors} />
        Red
      </label>
      <br />
      <label>
        <input type="checkbox" value="blue" onChange={handleColors} />
        Blue
      </label>
      <br />
      <label>
        <input type="checkbox" value="green" onChange={handleColors} />
        Green
      </label>
      <br />
      <label>
        <input type="checkbox" value="yellow" onChange={handleColors} />
        Yellow
      </label>
      <br />
      {selectedColors.length !== 0 && (
        <p>Selected Colors: {selectedColors.join(', ')}</p>
      )}
    </>
  );
};

const InstrumentCheckbox = () => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const handleInstruments = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInstruments((instruments) => [...instruments, value]);
    } else {
      setSelectedInstruments((instruments) =>
        instruments.filter((instrument) => instrument != value)
      );
    }
  };

  return (
    <>
      <label>Choose your musical instruments: </label>
      <br />
      <label>
        <input type="checkbox" value="guitar" onChange={handleInstruments} />
        Guitar
      </label>
      <br />
      <label>
        <input type="checkbox" value="piano" onChange={handleInstruments} />
        Piano
      </label>
      <br />
      <label>
        <input type="checkbox" value="drums" onChange={handleInstruments} />
        Drums
      </label>
      <br />
      {selectedInstruments && (
        <p>Selected Instruments: {selectedInstruments.join(', ')}</p>
      )}
    </>
  );
};

const AnimalCheckbox = () => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const handleAnimals = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAnimals((animals) => [...animals, value]);
    } else {
      setSelectedAnimals((animals) =>
        animals.filter((animal) => animal != value)
      );
    }
  };
  return (
    <>
      <label>Choose your favorite animal: </label>
      <br />
      <label>
        <input type="checkbox" value="dog" onChange={handleAnimals} />
        Dog
      </label>
      <br />
      <label>
        <input type="checkbox" value="cat" onChange={handleAnimals} />
        Cat
      </label>
      <br />
      <label>
        <input type="checkbox" value="rabbit" onChange={handleAnimals} />
        Rabbit
      </label>
      <br />
      {selectedAnimals && <p>Selected Animals: {selectedAnimals.join(', ')}</p>}
    </>
  );
};

const CarCheckbox = () => {
  const [selectedCars, setSelectedCars] = useState([]);

  const handleCars = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCars((cars) => [...cars, value]);
    } else {
      setSelectedCars((cars) => cars.filter((car) => car != value));
    }
  };
  return (
    <>
      <label>Choose your favorite cars: </label>
      <br />
      <label>
        <input type="checkbox" value="mercedes" onChange={handleCars} />
        Mercedes
      </label>
      <br />
      <label>
        <input type="checkbox" value="bmw" onChange={handleCars} />
        BMW
      </label>
      <br />
      <label>
        <input type="checkbox" value="audi" onChange={handleCars} />
        Audi
      </label>
      <br />
      {selectedCars && <p>Selected Cars: {selectedCars.join(', ')}</p>}
    </>
  );
};
export default function App() {
  return (
    <main>
      <SportsCheckbox />
      <br />
      <ColorsCheckbox />
      <br />
      <InstrumentCheckbox />

      <AnimalCheckbox />
      <CarCheckbox />
    </main>
  );
}
