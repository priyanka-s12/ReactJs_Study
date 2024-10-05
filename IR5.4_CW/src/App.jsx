import { useState } from 'react';
import useFetch from './useFetch';

function App() {
  const { data, loading, error, fetchData } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <>
      <h1>Fetch Data on Button Click</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>An error occurred while fetching posts.</p>}
        {data && data.length > 0 && (
          <ul>
            {data.map((post) => (
              <li key="post.id">{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
