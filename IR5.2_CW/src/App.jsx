import { useState } from 'react';
import useFetch from './useFetch';
//useFetch - custom hook, fetch data from api
const App = () => {
  const [showData, setShowData] = useState(false);
  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);
  return (
    <div>
      <h1>Todo API</h1>
      <button onClick={() => setShowData(true)}>Get Todo</button>
      {showData && (
        <div>
          {data ? (
            <p>{JSON.stringify(data)}</p>
          ) : (
            <p>An error occurred while fetching todo.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
