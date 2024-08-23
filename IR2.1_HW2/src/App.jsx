import './App.css';

const Laptops = ({ laptops }) => {
  const laptopsListing = laptops.map((laptop) => (
    <div key={laptop.id}>
      <h3>{laptop.brand}</h3>
      <p>Price: ${laptop.price}</p>
    </div>
  ));

  return (
    <>
      <h2>Laptops</h2>
      {laptopsListing}
    </>
  );
};

const TouristSpots = ({ touristSpots }) => {
  const touristSpotsListing = touristSpots.map((touristSpot) => (
    <div key={touristSpot.id}>
      <h3>{touristSpot.name}</h3>
      <p>Location: {touristSpot.location}</p>
    </div>
  ));

  return (
    <>
      <h2>Tourist Spots</h2>
      {touristSpotsListing}
    </>
  );
};

const PodcastsEpisodes = ({ podcastEpisodes }) => {
  const podcastsListing = podcastEpisodes.map((podcast) => (
    <div key={podcast.id}>
      <h3>{podcast.title}</h3>
      <p>Duration: {podcast.duration}</p>
    </div>
  ));

  return (
    <>
      <h2>Podcasts Episodes</h2>
      {podcastsListing}
    </>
  );
};

const NewsArticles = ({ newsArticles }) => {
  const newsListing = newsArticles.map((article) => (
    <div key={article.id}>
      <h3>{article.title}</h3>
      <p>{article.post}</p>
    </div>
  ));

  return (
    <>
      <h2>News Articles</h2>
      {newsListing}
    </>
  );
};

const Games = ({ games }) => {
  const gamesListing = games.map((game) => (
    <div>
      <h3>{game.name}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  ));

  return (
    <>
      <h2>Games</h2>
      {gamesListing}
    </>
  );
};

export default function App() {
  const laptops = [
    { id: 1, brand: 'Dell', price: 999 },
    { id: 2, brand: 'HP', price: 899 },
    { id: 3, brand: 'Lenovo', price: 1099 },
  ];

  const touristSpots = [
    { id: 1, name: 'Grand Canyon', location: 'Arizona, USA' },
    { id: 2, name: 'Eiffel Tower', location: 'Paris, France' },
    { id: 3, name: 'Great Wall of China', location: 'Beijing, China' },
  ];

  const podcastEpisodes = [
    { id: 1, title: 'Episode 1', duration: '30 minutes' },
    { id: 2, title: 'Episode 2', duration: '45 minutes' },
    { id: 3, title: 'Episode 3', duration: '60 minutes' },
  ];

  const newsArticles = [
    { id: 1, title: 'News 1', post: 'Description 1' },
    { id: 2, title: 'News 2', post: 'Description 2' },
    { id: 3, title: 'News 3', post: 'Description 3' },
  ];

  const games = [
    { id: 1, name: 'Game 1', genre: 'Action' },
    { id: 2, name: 'Game 2', genre: 'Adventure' },
    { id: 3, name: 'Game 3', genre: 'Strategy' },
  ];

  return (
    <main>
      <Laptops laptops={laptops} />
      <hr />
      <TouristSpots touristSpots={touristSpots} />
      <hr />
      <PodcastsEpisodes podcastEpisodes={podcastEpisodes} />
      <hr />
      <NewsArticles newsArticles={newsArticles} />
      <hr />
      <Games games={games} />
    </main>
  );
}
