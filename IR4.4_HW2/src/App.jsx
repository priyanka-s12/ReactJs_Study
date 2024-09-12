import { useState } from 'react';

const MovieCheckbox = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);

  const movieHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedMovie((movies) => [...movies, value]);
    } else {
      setSelectedMovie((movies) => movies.filter((movie) => movie !== value));
    }
  };
  return (
    <>
      <label>Choose your favorite movies: </label>
      <br />
      <label>
        <input type="checkbox" value="action" onChange={movieHandler} />
        Action
      </label>
      <br />
      <label>
        <input type="checkbox" value="comedy" onChange={movieHandler} />
        Comedy
      </label>
      <br />
      <label>
        <input type="checkbox" value="drama" onChange={movieHandler} />
        Drama
      </label>
      <br />
      {selectedMovie.length > 0 && (
        <p>Selected Movies: {selectedMovie.join(', ')}</p>
      )}
    </>
  );
};

const FruitCheckbox = () => {
  const [selectedFruit, setSelectedFruit] = useState([]);

  const fruitHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFruit((fruits) => [...fruits, value]);
    } else {
      setSelectedFruit((fruits) => fruits.filter((fruit) => fruit !== value));
    }
  };

  return (
    <>
      <label>Choose your favorite fruits: </label>
      <br />
      <label>
        <input type="checkbox" value="apple" onChange={fruitHandler} />
        Apple
      </label>
      <br />
      <label>
        <input type="checkbox" value="banana" onChange={fruitHandler} />
        Banana
      </label>
      <br />
      <label>
        <input type="checkbox" value="orange" onChange={fruitHandler} />
        Orange
      </label>
      <br />
      {selectedFruit.length > 0 && (
        <p>Selected Fruits: {selectedFruit.join(', ')}</p>
      )}
    </>
  );
};

const DrinkCheckbox = () => {
  const [selectedDrink, setSelectedDrink] = useState([]);

  const drinkHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDrink((drinks) => [...drinks, value]);
    } else {
      setSelectedDrink((drinks) => drinks.filter((drink) => drink !== value));
    }
  };
  return (
    <>
      <label>Choose your favorite drinks: </label>
      <br />
      <label>
        <input type="checkbox" value="coffee" onChange={drinkHandler} />
        Coffee
      </label>
      <br />
      <label>
        <input type="checkbox" value="tea" onChange={drinkHandler} />
        Tea
      </label>
      <br />
      <label>
        <input type="checkbox" value="juice" onChange={drinkHandler} />
        Juice
      </label>
      <br />
      {selectedDrink.length > 0 && (
        <p>Selected Drinks: {selectedDrink.join(', ')}</p>
      )}
    </>
  );
};

const DessertCheckbox = () => {
  const [selectedDessert, setSelectedDessert] = useState([]);

  const dessertHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDessert((desserts) => [...desserts, value]);
    } else {
      setSelectedDessert((desserts) =>
        desserts.filter((dessert) => dessert !== value)
      );
    }
  };
  return (
    <>
      <label>Choose your favorite desserts: </label>
      <br />
      <label>
        <input type="checkbox" value="cake" onChange={dessertHandler} />
        Cake
      </label>
      <br />
      <label>
        <input type="checkbox" value="icecream" onChange={dessertHandler} />
        Ice Cream
      </label>
      <br />
      <label>
        <input type="checkbox" value="pie" onChange={dessertHandler} />
        Pie
      </label>
      <br />
      {selectedDessert.length > 0 && (
        <p>Selected Desserts: {selectedDessert.join(', ')}</p>
      )}
    </>
  );
};

const BookGenreCheckbox = () => {
  const [selectedBookGenre, setSelectedBookGenre] = useState([]);
  const genreHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedBookGenre((genres) => [...genres, value]);
    } else {
      setSelectedBookGenre((genres) =>
        genres.filter((genre) => genre !== value)
      );
    }
  };
  return (
    <>
      <label>Choose your favorite book genres: </label>
      <br />
      <label>
        <input type="checkbox" value="fiction" onChange={genreHandler} />
        Fiction
      </label>
      <br />
      <label>
        <input type="checkbox" value="mystery" onChange={genreHandler} />
        Mystery
      </label>
      <br />
      <label>
        <input type="checkbox" value="biography" onChange={genreHandler} />
        Biography
      </label>
      <br />
      {selectedBookGenre.length > 0 && (
        <p>Selected Genres: {selectedBookGenre.join(', ')}</p>
      )}
    </>
  );
};
export default function App() {
  return (
    <main>
      <MovieCheckbox />
      <br />
      <FruitCheckbox />
      <br />
      <DrinkCheckbox />
      <br />
      <DessertCheckbox />
      <br />
      <BookGenreCheckbox />
    </main>
  );
}
