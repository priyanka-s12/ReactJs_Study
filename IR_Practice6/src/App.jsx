import { useState } from 'react';

//array of object - access object through index number
const FoodSurveyApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [cuisine, setCuisine] = useState('');
  const [options, setOptions] = useState([]);
  const [formData, setFormData] = useState(false);

  const questions = [
    {
      question: 'Which type of cuisine do you prefer?',
      options: {
        Asian: ['Chinese', 'Japanese', 'Indian'],
        European: ['Italian', 'French', 'Spanish'],
        American: ['Burgers', 'Pizza', 'BBQ'],
      },
    },
  ];

  const optionsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setOptions([...options, value]);
    } else {
      setOptions(options.filter((option) => option !== value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (cuisine && options) {
      setFormData(true);
    }
  };
  return (
    <div>
      <h2>Food Survey App</h2>
      {!formData ? (
        <div>
          <form onSubmit={formHandler}>
            <label htmlFor="cuisineSelect">
              Select Your Preferred Cuisine:
            </label>
            <select
              id="cuisineSelect"
              onChange={(event) => setCuisine(event.target.value)}
            >
              <option value="">--Select Cuisine--</option>
              <option value="Asian">Asian</option>
              <option value="European">European</option>
              <option value="American">American</option>
            </select>
            <br />
            <br />
            {cuisine && (
              <div>
                <label>Select Your Preferred Options: </label>
                <br />
                {/* {console.log(questions[currentQuestion].options)} */}
                {questions[currentQuestion].options[cuisine].map(
                  (option, index) => (
                    <div key={index}>
                      <label htmlFor={option}>
                        <input
                          type="checkbox"
                          id={option}
                          value={option}
                          onChange={optionsHandler}
                        />
                        {option}
                      </label>
                    </div>
                  )
                )}
                <br />
                <button>Submit</button>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div>
          <h3>Thank You for Sharing Your Preferences!</h3>
          <p>Cuisine: {cuisine}</p>
          <p>Preferred Options: {options.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [comment, setComment] = useState('');
  const [formData, setFormData] = useState(false);

  const typeHandler = (event) => {
    setFeedbackType(event.target.value);
    if (feedbackType) {
      setComment('');
      setFormData(false);
    }
  };
  const formHandler = (event) => {
    event.preventDefault();
    if (feedbackType && comment) {
      setFormData(true);
    }
  };
  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={formHandler}>
        <label htmlFor="feedbackTypeSelect">Feedback Type: </label>
        <select
          id="feedbackTypeSelect"
          onChange={typeHandler}
          value={feedbackType}
        >
          <option>--Select Feedback Type--</option>
          <option value="Compliment">Compliment</option>
          <option value="Complaint">Complaint</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        {feedbackType && (
          <div>
            <label htmlFor="commentTextarea">Comments: </label>
            <textarea
              rows={4}
              cols={40}
              id="commentTextarea"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
          </div>
        )}
        <br />
        <button>Submit</button>
      </form>
      {formData && (
        <div>
          <p>{feedbackType}</p>
          <p>{comment}</p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <main>
      <FoodSurveyApp />
      <FeedbackForm />
    </main>
  );
}
