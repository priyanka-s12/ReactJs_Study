import Header from '../components/Header';
import { Link } from 'react-router-dom';
const Players = () => {
  const players = [
    {
      name: 'Player 1',
      country: 'India',
      role: 'Batsman',
    },
    {
      name: 'Player 2',
      country: 'Australia',
      role: 'Bowler',
    },
  ];
  return (
    <div>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">List of Cricket Players</h2>
        {players.map((player) => (
          <div className="row mb-3" key={player.name}>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>{player.name}</h3>
                </div>
                <div className="card-body">
                  <p>
                    <strong>Country: </strong>
                    {player.country}
                  </p>
                  <p>
                    <strong>Role: </strong>
                    {player.role}
                  </p>
                  <Link
                    className="btn btn-primary"
                    to={`/players/${player.name}`}
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
export default Players;
