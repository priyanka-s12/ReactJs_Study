import { useState } from 'react';
const SurveyTextarea = () => {
  const [response, setResponse] = useState('');

  const handleResponse = () => {
    alert(`Survey Response: ${response}`);
  };

  return (
    <>
      <label>Take the survey: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setResponse(event.target.value)}
      ></textarea>
      <button onClick={handleResponse}>Submit Survey</button>
    </>
  );
};

const RecipeTextarea = () => {
  const [recipe, setRecipe] = useState('');
  const [text, setText] = useState('');

  const handleClick = () => {
    setText(recipe.split('. '));
    // console.log(recipe, 'Text: ', text);
  };

  return (
    <>
      <label>Enter your recipe: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setRecipe(event.target.value)}
      ></textarea>
      <button onClick={handleClick}>Save Recipe</button>
      {/* {console.log(recipe, 'Text: ', text)} */}
      <ol>
        {text.length > 0 &&
          text.map((sentence, index) => <li key={index}>{sentence}</li>)}
      </ol>
    </>
  );
};

const DiaryTextarea = () => {
  const [entry, setEntry] = useState('');
  const [text, setText] = useState('');
  return (
    <>
      <label>Write your diary entry: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setEntry(event.target.value)}
      ></textarea>
      <button onClick={() => setText(entry)}>Save Diary Entry</button>
      {text && <p style={{ fontStyle: 'italic' }}>Diary entry saved: {text}</p>}
    </>
  );
};

const StoryTextarea = () => {
  const [story, setStory] = useState('');
  const [text, setText] = useState('');
  return (
    <>
      <label>Share your story: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setStory(event.target.value)}
      ></textarea>
      <button onClick={() => setText(story)}>Submit Story</button>
      {text && <p>Your Story: {text}</p>}
    </>
  );
};

const ListTextarea = () => {
  const [items, setItems] = useState('');
  const [list, setList] = useState('');
  return (
    <>
      <label>Enter a list of items: </label>
      <textarea
        rows={5}
        cols={40}
        onChange={(event) => setItems(event.target.value)}
      ></textarea>
      <button onClick={() => setList(items.split(', '))}>Display Items</button>
      <ul>
        {list.length > 0 &&
          list.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  );
};
export default function App() {
  return (
    <main>
      <h1>Textarea Programs</h1>
      <SurveyTextarea />
      <br />
      <br />
      <RecipeTextarea />
      <br />
      <DiaryTextarea />
      <br />
      <br />
      <StoryTextarea />
      <br />
      <br />
      <ListTextarea />
    </main>
  );
}
