import { useState } from 'react';

const FeedbackApp = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [formData, setFormData] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Rate the overall experience:',
      options: ['Excellent', 'Good', 'Average', 'Poor'],
    },
    {
      id: 2,
      question: 'How likely are you to recommend us to a friend or colleague?',
      options: ['Very Likely', 'Likely', 'Unlikely', 'Very Unlikely'],
    },
  ];

  const optionsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOption([...selectedOption, value]);
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    setFormData(true);
  };

  return (
    <div>
      <h2>Feedback App</h2>
      {!formData ? (
        <form onSubmit={formHandler}>
          {questions.map((question) => (
            <div key={question.id}>
              <h3>{question.question}</h3>
              <ul>
                {question.options.map((option, index) => (
                  <li key={index}>
                    <input
                      id={option}
                      type="radio"
                      value={option}
                      name={`question_${question.id}`}
                      onChange={optionsHandler}
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
        <>
          <h3>Thank you for your feedback!</h3>
          <p>Your answers: {selectedOption.join(', ')}</p>
        </>
      )}
    </div>
  );
};

const MovieApp = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Favorite Movie Genre?',
      options: ['Action', 'Comedy', 'Drama', 'Sci-Fi'],
    },
    {
      id: 2,
      question: 'Favorite Movie of All Time?',
      options: [
        'The Shawshank Redemption',
        'The Godfather',
        'Pulp Fiction',
        'The Dark Knight',
      ],
    },
  ];

  const formHandler = (event) => {
    event.preventDefault();
    if (data) {
      setMessage(true);
    }
  };
  return (
    <div>
      <h2>Favorite Movie App</h2>
      {!message ? (
        <form onSubmit={formHandler}>
          {questions.map((question) => {
            return (
              <>
                <h3>{question.question}</h3>
                <ul>
                  {question.options.map((option) => (
                    <li>
                      <input
                        type="radio"
                        id={option}
                        name={question.id}
                        value={option}
                        onChange={(event) =>
                          setData([...data, event.target.value])
                        }
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              </>
            );
          })}
          <button>Submit</button>
        </form>
      ) : (
        <>
          <h3>Thank You for Sharig Your Favorites!</h3>
          <p>{data.join(', ')}</p>
        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <main>
      <FeedbackApp />
      <MovieApp />
    </main>
  );
}
