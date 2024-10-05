import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const PlayerDetails = () => {
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

  const playerId = useParams();
  console.log(playerId);

  const playerData = players.find(
    (player) => player.name === playerId.playerName
  );
  console.log(playerData);
  return (
    <div>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">Player Details</h2>
        <div className="card">
          <div className="card-header">
            <h3>{playerData.name}</h3>
          </div>
          <div className="card-body">
            <p>
              <strong>Country: </strong>
              {playerData.country}
            </p>
            <p>
              <strong>Role: </strong>
              {playerData.role}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default PlayerDetails;
