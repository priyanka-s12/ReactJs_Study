import './App.css';
const WelcomeMessage = () => {
  return <h1>Discover the World of JSX!</h1>;
};

const GreetActor = () => {
  const name = 'Tom Hardy';
  return <h1>Welcome, {name} fans!</h1>;
};

const ExternalLink = () => {
  const url = 'https://reactjs.org';
  return (
    <a href={url} target="_blanl">
      Explore React Documentation
    </a>
  );
};

const VideoPlayer = () => {
  const videoUrl = 'https://www.example.com/video.mp4';
  return (
    <div>
      <video controls>
        <source src={videoUrl} type="video/mp4"></source>
      </video>
    </div>
  );
};

const MovieDetails = () => {
  const movie = {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    year: 1994,
    rating: 'PG-13',
    duration: '2h 22min',
  };
  return (
    <>
      <h2>Movie Details</h2>
      <p>
        <strong>Title: </strong>
        {movie.title}
      </p>
      <p>
        <strong>Director: </strong>
        {movie.director}
      </p>
      <p>
        <strong>Year: </strong>
        {movie.year}
      </p>
      <p>
        <strong>Rating: </strong>
        {movie.rating}
      </p>
      <p>
        <strong>Duration: </strong>
        {movie.duration}
      </p>
    </>
  );
};
export default function App() {
  return (
    <div>
      <WelcomeMessage />
      <GreetActor />
      <ExternalLink />
      <VideoPlayer />
      <MovieDetails />
    </div>
  );
}
