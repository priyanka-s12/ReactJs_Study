import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');
  const [interests, setInterests] = useState([]);
  const [update, setUpdate] = useState('');
  const [comments, setComments] = useState('');
  const [formData, setFormData] = useState(false);

  const interestHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest != value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    // console.log(name, email, plan, interests.join(', '), update, comments);
    if (name && email && plan && interests.length > 0 && update) {
      setFormData(true);
    }
  };

  return (
    <main>
      <h1>Subscription Form</h1>
      <form id="subscriptionForm" onSubmit={formHandler}>
        <label htmlFor="nameInput">Full Name: </label>
        <input
          type="text"
          id="nameInput"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="emailInput">Email: </label>
        <input
          type="email"
          id="emailInput"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="planSelect">Subscription Plan: </label>
        <select
          id="planSelect"
          onChange={(event) => setPlan(event.target.value)}
          required
        >
          <option value="">Select Plan</option>
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="ultimate">Ultimate</option>
        </select>
        <br />
        <br />
        <label>Interests: </label>
        <br />
        <label htmlFor="technology">
          <input
            type="checkbox"
            id="technology"
            value="Technology"
            onChange={interestHandler}
          />
          Technology
        </label>
        <br />
        <label htmlFor="fitness">
          <input
            type="checkbox"
            id="fitness"
            value="Fitness"
            onChange={interestHandler}
          />
          Fitness
        </label>
        <br />
        <label htmlFor="cooking">
          <input
            type="checkbox"
            id="cooking"
            value="Cooking"
            onChange={interestHandler}
          />
          Cooking
        </label>
        <br />
        <br />
        <label>Want to Receive Updates: </label>
        <br />
        <label htmlFor="yes">
          <input
            type="radio"
            id="yes"
            value="yes"
            name="update"
            required
            onChange={(event) => setUpdate(event.target.value)}
          />
          Yes
        </label>
        <br />
        <label htmlFor="no">
          <input
            type="radio"
            id="no"
            value="no"
            name="update"
            required
            onChange={(event) => setUpdate(event.target.value)}
          />
          No
        </label>
        <br />
        <br />
        <label htmlFor="commentsTextarea">Comments: </label>
        <br />
        <textarea
          rows="4"
          cols="50"
          id="commentsTextarea"
          onChange={(event) => setComments(event.target.value)}
        ></textarea>
        <br />
        <br />
        {/* <button type="submit">Subscribe</button> */}
        <input type="submit" value="Subscribe" />
      </form>
      {formData && (
        <div>
          <h2>Submitted details</h2>
          <p>Full Name: {name}</p>
          <p>Email: {email}</p>
          <p>Subscription Plan: {plan}</p>
          <p>Interests: {interests.join(', ')}</p>
          <p>Want to receive updates: {update}</p>
          <p>Comments: {comments ? comments : 'none'}</p>
        </div>
      )}
    </main>
  );
}
