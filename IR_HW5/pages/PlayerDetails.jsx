import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
const PlayerDetails = () => {
  const players = [
    {
      id: 1,
      name: 'Lionel Messi',
      position: 'Forward',
      team: 'Paris Saint-German',
    },
    {
      id: 2,
      name: 'Cristiano Ronaldo',
      position: 'Forward',
      team: 'Manchester United',
    },
    {
      id: 3,
      name: 'Neymar Jr.',
      position: 'Forward',
      team: 'Paris Saint-German',
    },
  ];

  const playerId = useParams();
  console.log(playerId);

  const playerData = players.find((player) => player.id == playerId.playerId);
  console.log(playerData);
  return (
    <>
      <Header />
      <main className="container py-3">
        <h3 className="mb-3">{playerData.name}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name: </strong>
            {playerData.name}
          </li>
          <li className="list-group-item">
            <strong>Position: </strong>
            {playerData.position}
          </li>
          <li className="list-group-item">
            <strong>Team: </strong>
            {playerData.team}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};
export default PlayerDetails;
