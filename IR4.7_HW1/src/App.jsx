import { useState } from 'react';

export default function App() {
  const [transport, setTransport] = useState('');
  const [usage, setUsage] = useState('');
  const [comments, setComments] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    // console.log(transport, usage, comments, selectedExperience, isChecked);
    if (transport && usage && selectedExperience && isChecked) {
      setFormData(true);
    }
  };
  return (
    <main>
      <h1>Transportation Preference Form</h1>
      <form id="transportForm" onSubmit={formHandler}>
        <label htmlFor="transportSelect">
          Preferred Mode of Transportation:
        </label>
        <select
          id="transportSelect"
          onChange={(event) => setTransport(event.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walk">Walk</option>
        </select>
        <br />
        <br />
        <label htmlFor="usageSelect">Frequency of Usage: </label>
        <select
          id="usageSelect"
          onChange={(event) => setUsage(event.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Occassionaly">Occassionaly</option>
        </select>
        <br />
        <br />
        <label htmlFor="commentsTextarea">Comments (If any): </label>
        <br />
        <textarea
          rows="4"
          cols="50"
          id="commentsTextarea"
          onChange={(event) => setComments(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label>Experience Level: </label>
        <br />
        <label htmlFor="beginner">
          <input
            type="radio"
            name="experience"
            value="Beginner"
            id="beginner"
            onChange={(event) => setSelectedExperience(event.target.value)}
            required
          />
          Beginner
        </label>
        <br />
        <label htmlFor="intermediate">
          <input
            type="radio"
            name="experience"
            value="Intermediate"
            id="intermediate"
            onChange={(event) => setSelectedExperience(event.target.value)}
          />
          Intermediate
        </label>
        <br />
        <label htmlFor="advanced">
          <input
            type="radio"
            name="experience"
            value="Advanced"
            id="advanced"
            onChange={(event) => setSelectedExperience(event.target.value)}
          />
          Advanced
        </label>
        <br />
        <br />
        <label htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
            checked={isChecked}
            onChange={(event) => setIsChecked(event.target.checked)}
            required
          />
          I agree to the terms and conditions.
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h2>Submitted Details: </h2>
          <p>Preferred Mode of Transport: {transport}</p>
          <p>Frequency of Usage: {usage}</p>
          <p>Comments: {comments ? `${comments}` : 'none'}</p>
          <p>Experience Level: {selectedExperience}</p>
        </div>
      )}
    </main>
  );
}
