import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './useFetch';
import { useState } from 'react';

function App() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { data, loading, error, fetchData } = useFetch(
    'https://randomuser.me/api/?results=3'
  );

  return (
    <main className="container py-3">
      <section>
        <h1 className="mb-3">People Directory</h1>
        <button className="btn btn-primary mb-3" onClick={fetchData}>
          Get People
        </button>
      </section>

      <section>
        {loading && <p>Loading...</p>}
        {error && <p>An error occurred while fetching user data.</p>}

        {data && data.results && data.results.length > 0 && (
          <div className="row">
            {data.results.map((user, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img src={user.picture.thumbnail} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">
                      {user.name.first} {user.name.last}
                    </h5>
                    <p className="card-text">Age: {user.dob.age}</p>
                    <p className="card-text">Gender: {user.gender}</p>
                    <p className="card-text">Username: {user.login.username}</p>
                    <p className="card-text">Email: {user.email}</p>
                    {showMoreInfo && (
                      <div>
                        <p className="card-text">Phone Number: {user.phone}</p>
                        <p className="card-text">
                          Full Address:{' '}
                          {`${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.passcode}`}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="d-grid gap-2 col-4 mx-auto pb-5">
              <button
                className="btn btn-primary mt-3"
                onClick={() => setShowMoreInfo(!showMoreInfo)}
              >
                {showMoreInfo ? 'Show Less Info' : 'Show More Info'}
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
