import { useState } from 'react';

export default function App() {
  const questions = [
    {
      id: 1,
      question: 'Favorite Color?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
    },
    {
      id: 2,
      question: 'Favorite Animal?',
      options: ['Dog', 'Cat', 'Bird', 'Fish'],
    },
    {
      id: 3,
      question: 'Favorite Food?',
      options: ['Pizza', 'Burger', 'Pasta', 'Salad'],
    },
  ];

  const [message, setMessage] = useState(false);
  const [answers, setAnswers] = useState([]);

  const answerHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAnswers([...answers, value]);
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    // console.log(questions);
    console.log(answers);
    if (answers.length === questions.length) {
      setMessage(true);
    }
  };
  return (
    <main>
      <h1>Polling App</h1>
      {!message ? (
        <form onSubmit={formHandler}>
          {questions.map((question, index) => (
            <div key={index}>
              <h3>{question.question}</h3>
              <ul>
                {question.options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name={`question${question.id}`}
                      value={option}
                      onChange={answerHandler}
                      required
                    />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button>Submit</button>
        </form>
      ) : (
        <h2>Thank you for Participating!</h2>
      )}
    </main>
  );
}
