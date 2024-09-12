import { useState } from 'react';

const HighestDegree = () => {
  const [degree, setDegree] = useState('');

  const degreeHandler = (event) => {
    setDegree(event.target.value);
  };
  return (
    <>
      <form onChange={degreeHandler}>
        <label>Choose your highest education level: </label>
        <br />
        <label>
          <input type="radio" value="high school" name="education" />
          High School
        </label>
        <br />
        <label>
          <input type="radio" value="bachelors" name="education" />
          Bachelor's Degree
        </label>
        <br />
        <label>
          <input type="radio" value="masters" name="education" />
          Master's Degree
        </label>
        <br />
        <label>
          <input type="radio" value="ph.d" name="education" />
          Ph.D
        </label>
        <br />
      </form>
      {degree && <p>Education level: I have a {degree} degree.</p>}
    </>
  );
};

const MusicGenre = () => {
  const [genre, setGenre] = useState('');
  const genreHandler = (event) => {
    setGenre(event.target.value);
  };
  return (
    <>
      <form onChange={genreHandler}>
        <label>Choose your favorite music genre: </label>
        <br />
        <label>
          <input type="radio" value="pop" name="genre" />
          Pop
        </label>
        <br />
        <label>
          <input type="radio" value="rock" name="genre" />
          Rock
        </label>
        <br />
        <label>
          <input type="radio" value="hiphop" name="genre" />
          Hip Hop
        </label>
        <br />
        <label>
          <input type="radio" value="classical" name="genre" />
          Classical
        </label>
        <br />
      </form>
      {genre && <p>I like {genre} music.</p>}
    </>
  );
};

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const methodHandler = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <>
      <form onChange={methodHandler}>
        <label>Select your preferred payment method: </label>
        <br />
        <label>
          <input type="radio" value="creditcard" name="method" />
          Credit Card
        </label>
        <br />
        <label>
          <input type="radio" value="paypal" name="method" />
          PayPal
        </label>
        <br />
        <label>
          <input type="radio" value="bitcoin" name="method" />
          Bitcoin
        </label>
        <br />
        <label>
          <input type="radio" value="cash" name="method" />
          Cash
        </label>
      </form>
      <p>Selected Payment Method: {paymentMethod}</p>
    </>
  );
};

const Weather = () => {
  const [weather, setWeather] = useState('');

  const weatherHandler = (event) => {
    setWeather(event.target.value);
  };
  return (
    <>
      <form onChange={weatherHandler}>
        <label>Choose your preferred weather: </label>
        <br />
        <label>
          <input type="radio" value="sunny" name="weather" />
          Sunny
        </label>
        <br />
        <label>
          <input type="radio" value="rainy" name="weather" />
          Rainy
        </label>
        <br />
        <label>
          <input type="radio" value="cloudy" name="weather" />
          Cloudy
        </label>
        <br />
        <label>
          <input type="radio" value="snowy" name="weather" />
          Snowy
        </label>
      </form>
      {weather && <p>Selected weather: I like {weather} weather.</p>}
    </>
  );
};

const Occupation = () => {
  const [occupation, setOccupation] = useState('');

  const occupationHandler = (event) => {
    setOccupation(event.target.value);
  };

  return (
    <>
      <form onChange={occupationHandler}>
        <label>Choose your occupation: </label>
        <br />
        <label>
          <input type="radio" name="occupation" value="student" />
          Student
        </label>
        <br />
        <label>
          <input type="radio" name="occupation" value="teacher" />
          Teacher
        </label>
        <br />
        <label>
          <input type="radio" name="occupation" value="engineer" />
          Engineer
        </label>
        <br />
        <label>
          <input type="radio" name="occupation" value="doctor" />
          Doctor
        </label>
      </form>
      <p>Selected occupation: {occupation}</p>
    </>
  );
};
export default function App() {
  return (
    <main>
      <HighestDegree />
      <br />
      <MusicGenre />
      <br />
      <PaymentMethod />
      <Weather />
      <br />
      <Occupation />
    </main>
  );
}
