import './App.css';

const GenerateGreeting = () => {
  const greetingMessage = (userName) => {
    return `Hello, ${userName}!`;
  };

  return <h1>{greetingMessage('John')}</h1>;
};

const CalculateArea = () => {
  const getArea = (length, width) => length * width;

  return <p>Rectangle Area: {getArea(10, 5)}</p>;
};

const CalculatePerimeter = () => {
  const getPerimeter = (length, width) => 2 * (length + width);

  return <p>Rectangle Perimeter: {getPerimeter(10, 5)}</p>;
};

const GenerateMessage = () => {
  const showMessage = () => {
    const hours = new Date().getHours();
    // console.log(hours)
    return hours < 12
      ? 'Good Morning!'
      : hours >= 18
      ? 'Good Evening!'
      : 'Good Afternoon!';
  };

  return <h1>{showMessage()}</h1>;
};

const CalculateVolume = () => {
  const getVolume = (radius, height) => Math.PI * (radius * radius) * height;

  return <p>Volume of Cylinder: {getVolume(3, 5)}</p>;
};

export default function App() {
  return (
    <main>
      <GenerateGreeting />
      <CalculateArea />
      <CalculatePerimeter />
      <GenerateMessage />
      <CalculateVolume />
    </main>
  );
}
