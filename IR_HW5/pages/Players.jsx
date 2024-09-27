import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Players = () => {
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
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">List of Players</h2>
        <ul className="list-group">
          {players.map((player, index) => (
            <li key={index} className="list-group-item">
              <h4>{player.name}</h4>
              <p>{player.position}</p>
              <Link className="btn btn-primary" to={`/players/${player.id}`}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Players;
