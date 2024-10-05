import Header from '../components/Header';

const Report = () => (
  <div>
    <Header />
    <main className="container py-3">
      <h2>Player Report</h2>
      <hr />
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-header">
              <h3>Top Scorer</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>Name: </strong>Player 1
              </p>
              <p>
                <strong>Total Runs: </strong>12000
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Best Bowler</h3>
            </div>
            <div className="card-body">
              <p>
                <strong>Name: </strong>Player 2
              </p>
              <p>
                <strong>Total Wickets: </strong>500
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);
export default Report;
