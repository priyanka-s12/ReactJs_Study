import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { moviesData } from './Movies';

const MovieDetails = () => {
  const movieId = useParams();
  //   console.log(movieId);
  const movie = moviesData.find((mov) => mov.id === parseInt(movieId.movieId));
  //   console.log(movie);
  return (
    <>
      <Header />
      <main className="container py-3">
        <section id="movie-details">
          {movie ? (
            <>
              <h2 className="mb-3">{movie.title}</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Title: </strong>
                  {movie.title}
                </li>
                <li className="list-group-item">
                  <strong>Genre: </strong>
                  {movie.genre}
                </li>
                <li className="list-group-item">
                  <strong>Director: </strong>
                  {movie.director}
                </li>
              </ul>
            </>
          ) : (
            <p className="alert alert-danger">Movie not found.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};
export default MovieDetails;
