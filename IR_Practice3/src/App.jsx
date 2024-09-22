import { useState } from 'react';

export default function App() {
  const questions = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      correctAnswer: '4',
    },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin'],
      correctAnswer: 'Paris',
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'J.K. Rowling', 'Stephen King'],
      correctAnswer: 'Harper Lee',
    },
  ];

  //question index number
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const nextQuestionHandler = () => {
    setActiveQuestion(activeQuestion + 1);
    if (selectedOption === questions[activeQuestion].correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);

      // setScore((s) => s + 1);
      //below not updating score on console
      // setScore(score + 1);
      console.log(
        selectedOption,
        questions[activeQuestion].correctAnswer,
        newScore
      );
    }
  };

  return (
    <main>
      <h1>Quiz App</h1>
      {activeQuestion <= questions.length - 1 ? (
        <div>
          <h3>Question {questions[activeQuestion].id}</h3>
          <p>{questions[activeQuestion].question}</p>
          <ul>
            {questions[activeQuestion].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name={`question_${questions[activeQuestion].id}`}
                  value={option}
                  onChange={(event) => setSelectedOption(event.target.value)}
                  checked={selectedOption === option}
                />
                {option}
              </li>
              // using checked attribute here we are communicating state var(selectedOption) with react app means html part
            ))}
          </ul>
          <button onClick={nextQuestionHandler}>Next</button>
        </div>
      ) : (
        <>
          <h3>Quiz Result</h3>
          <p>
            Your score: {score} / {questions.length}
          </p>
        </>
      )}
    </main>
  );
}
