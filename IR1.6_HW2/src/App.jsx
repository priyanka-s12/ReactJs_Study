import './App.css';

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];
  const getReversed = (array) => array.reverse().join(', ');
  // Careful: reverse is destructive -- it changes the original array.
  return (
    <>
      <h1>Reverse Array</h1>
      <p>Reversed Array: {getReversed(originalArray)}</p>
    </>
  );
};

const CalculateBMI = () => {
  const getBMI = (weight, height) => (weight / height ** 2).toFixed(2);

  return (
    <>
      <h1>BMI Calculator</h1>
      <p>BMI: {getBMI(70, 1.75)}</p>
    </>
  );
};

const GenerateQuote = () => {
  const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Innovation distinguishes between a leader and a follower. - Steve Jobs',
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    'Stay hungry, stay foolish. - Steve Jobs',
    'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
  ];

  const showRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <h1>Random Quote</h1>
      <p>{showRandomQuote()}</p>
    </>
  );
};

const GradeAnalyzer = () => {
  const score = 85;

  const displayGrade = (score) => {
    if (score >= 90 && score < 100) {
      return { grade: 'A', message: 'Excellent work!' };
    } else if (score >= 80 && score < 89) {
      return { grade: 'B', message: 'Good job!' };
    } else if (score >= 70 && score < 79) {
      return { grade: 'C', message: 'Not bad, keep it up!' };
    } else if (score >= 60 && score < 69) {
      return { grade: 'D', message: 'You passed, but aim higher next time.' };
    } else {
      return {
        grade: 'F',
        message: "Sorry, you didn't pass. Keep working hard!",
      };
    }
  };

  const { grade, message } = displayGrade(score);

  return (
    <>
      <h1>Grade Analyzer</h1>
      <p>Score: {score}</p>
      {/* <p>Grade: {displayGrade(score).grade}</p>
      <p>{displayGrade(score).message}</p> */}
      <p>Grade: {grade}</p>
      <p>{message}</p>
    </>
  );
};

const TemperatureFeedback = () => {
  const currentTemp = 25;

  const getFeedback = (currentTemp) => {
    if (currentTemp < 0) return "Brr, it's freezing!";
    else if (currentTemp > 0 && currentTemp < 10)
      return "It's quite cold, bundle up!";
    else if (currentTemp >= 10 && currentTemp < 20)
      return 'The weather is cool and comfortable.';
    else if (currentTemp >= 20 && currentTemp < 30) return "It's  a warm day!";
    else return "It's hot outside, stay cool!";
  };

  return (
    <>
      <h1>Temperature Feedback</h1>
      <p>Current Temperature: {currentTemp} degree celcius</p>
      <p>{getFeedback(currentTemp)}</p>
    </>
  );
};
export default function App() {
  return (
    <main>
      <ReverseArray />
      <CalculateBMI />
      <GenerateQuote />
      <GradeAnalyzer />
      <TemperatureFeedback />
    </main>
  );
}
