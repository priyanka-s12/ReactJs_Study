import './App.css';

const ArrayOperations = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / numbers.length;
  const max = numbers.reduce(
    (acc, curr) => (curr > acc ? curr : acc),
    numbers[0]
  );
  const min = numbers.reduce(
    (acc, curr) => (curr < acc ? curr : acc),
    numbers[0]
  );

  return (
    <>
      <h1>Array Operations</h1>
      <p>Sum: {sum}</p>
      <p>Average: {avg}</p>
      <p>Maximum: {max}</p>
      <p>Minimum: {min}</p>
    </>
  );
};

const ObjectManipulation = () => {
  const person = {
    name: 'Sarah',
    age: 28,
    city: 'New York',
  };
  person.age = person.age + 1;

  return (
    <>
      <h1>Person Details</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </>
  );
};

const SquareArea = () => {
  const side = 5;
  const square = side * side;
  return (
    <>
      <h1>Area of Square</h1>
      <p>The area of the square is: {square}</p>
    </>
  );
};

const CapitalizeString = () => {
  const str = 'hello world';
  return (
    <>
      <h1>Capitalize Text</h1>
      <p>{str.toUpperCase()}</p>
    </>
  );
};

const CircleArea = () => {
  const radius = 8;
  const area = 3.14 * radius * radius;
  return (
    <>
      <h1>Area of Circle</h1>
      <p>The area of the circle is: {area}</p>
    </>
  );
};

export default function App() {
  return (
    <>
      <main>
        <ArrayOperations />
        <ObjectManipulation />
        <SquareArea />
        <CapitalizeString />
        <CircleArea />
      </main>
    </>
  );
}
