import { useState } from 'react';

const FeedbackTextarea = () => {
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleFeedback = () => {
    setMessage(feedback);
    // console.log('feedback:', feedback, 'message: ', message);
  };
  return (
    <>
      <label>Give your feedback: </label>
      <textarea
        rows={5}
        cols={40}
        id="feedback"
        onChange={(event) => setFeedback(event.target.value)}
      ></textarea>
      <button onClick={handleFeedback}>Submit</button>
      {message && <p>Your feedback: {message}</p>}
    </>
  );
};

const MovieReviewTextarea = () => {
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <label>Write your movie review: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setReview(event.target.value)}
      ></textarea>
      <button onClick={() => setMessage(review)}>Submit Review</button>
      {message && <p>Your review: {message}</p>}
    </>
  );
};

const MessageTextarea = () => {
  const [message, setMessage] = useState('');
  const handleMessage = () => {
    alert(`Message: ${message.toUpperCase()}!`);
  };

  return (
    <>
      <label>Enter your message: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>
      <button onClick={handleMessage}>Display Message</button>
    </>
  );
};

const NotesTextarea = () => {
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <label>Take your notes: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setNotes(event.target.value)}
      ></textarea>
      <button onClick={() => setMessage(notes)}>Save Notes</button>
      {message && <p>Notes saved: {message}</p>}
    </>
  );
};

const QuestionTextarea = () => {
  const [question, setQuestion] = useState('');
  const [text, setText] = useState('');
  return (
    <>
      <label>Ask your question: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setQuestion(event.target.value)}
      ></textarea>
      <button onClick={() => setText(question)}>Submit Question</button>
      {text && <p>Your Question: {text.includes('?') ? text : `${text}?`}</p>}
    </>
  );
};

const CommentTextarea = () => {
  const [comment, setComment] = useState('');
  const [text, setText] = useState('');
  return (
    <>
      <label>Leave your comment: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      <button onClick={() => setText(comment)}>Submit Comment</button>
      {text && <p>//{text}</p>}
    </>
  );
};
export default function App() {
  return (
    <main>
      <FeedbackTextarea />
      <br />
      <br />
      <MovieReviewTextarea />
      <br />
      <br />
      <MessageTextarea />
      <br />
      <br />
      <NotesTextarea />
      <br />
      <br />
      <QuestionTextarea />
      <br />
      <br />
      <CommentTextarea />
      <br />
      <br />
    </main>
  );
}
