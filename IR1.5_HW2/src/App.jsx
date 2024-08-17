import './App.css';
//Math.floor(Math.random() * 100); from 0 to 99
//Math.floor(Math.random() * 100) + 1; bttween 1 to 100 bith included
const RandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  return <p>Random Number: {randomNum}</p>;
};

const AbsoluteValue = () => {
  const number = -10;
  return <p>Absolute Value: {Math.abs(number)}</p>;
};

const SumOfEvenNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const sum = numbers.reduce(
    (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
    0
  );
  return <p>Sum of even numbers: {sum}</p>;
};

const PerimeterOfSquare = () => {
  const side = 5;
  const perimeter = 4 * side;
  return (
    <>
      <h1>Square Perimeter Calculator</h1>
      <p>Side Length: {side} cm</p>
      <p>Perimeter: {perimeter} cm</p>
    </>
  );
};

const CurrencyConverter = () => {
  const amount = 50;
  const exchangeRate = 74.5;
  const conversion = amount * exchangeRate;
  return (
    <>
      <h1>Currency Converter</h1>
      <p>Amount in USD: ${amount}</p>
      <p>Exchange Rate: 1 USD = {exchangeRate} INR</p>
      <p>Amount in INR: INR {conversion}</p>
    </>
  );
};

export default function App() {
  return (
    <>
      <main>
        <RandomNumber />
        <AbsoluteValue />
        <SumOfEvenNumbers />
        <PerimeterOfSquare />
        <CurrencyConverter />
      </main>
    </>
  );
}
