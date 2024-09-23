import { useState } from 'react';
//in this example I am not tracking any value, just select all 3 radios and submit the form and display message(form disapper)
export default function App() {
  const [message, setMessage] = useState(false);

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

  const formHandler = (event) => {
    event.preventDefault();
    setMessage(true);
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
                      id={option}
                      type="radio"
                      name={`question${question.id}`}
                      value={option}
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
