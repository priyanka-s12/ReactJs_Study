import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
export const moviesData = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    director: 'Christopher Nolan',
    views: 2000,
    rating: 7,
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    director: 'Frank Darabont',
    views: 4000,
    rating: 8,
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    genre: 'Crime',
    director: 'Quentin Tarantino',
    views: 1000,
    rating: 6.8,
  },
  {
    id: 4,
    title: 'The Godfather',
    genre: 'Crime',
    director: 'Francis Ford Coppola',
    views: 2000,
    rating: 7.8,
  },
  {
    id: 5,
    title: 'The Dark Knight',
    genre: 'Action',
    director: 'Christopher Nolan',
    views: 5000,
    rating: 9,
  },
];

const Movies = () => {
  const [genreFilter, setGenreFilter] = useState('All');

  const filteredMovies =
    genreFilter === 'All'
      ? moviesData
      : moviesData.filter((movie) => movie.genre === genreFilter);

  return (
    <>
      <Header />
      <main className="container py-3">
        <section className="mb-3">
          <label className="form-label" htmlFor="genreFilter">
            Filter by Genre:{' '}
          </label>
          <select
            className="form-select"
            id="genreFilter"
            onChange={(event) => setGenreFilter(event.target.value)}
          >
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Crime">Crime</option>
          </select>
        </section>

        <section>
          <h2 className="mb-3">List of Movies</h2>
          <ul className="list-group">
            {filteredMovies.map((movie) => (
              <li className="list-group-item" key={movie.id}>
                <h5>{movie.title}</h5>
                <p>Genre: {movie.genre}</p>
                <p>Director: {movie.director}</p>
                <Link className="btn btn-primary" to={`/movies/${movie.id}`}>
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Movies;
