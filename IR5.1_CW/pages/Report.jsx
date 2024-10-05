import Footer from '../components/Footer';
import Header from '../components/Header';
import { moviesData } from './Movies';

const Report = () => {
  const mostWatchedMovie = moviesData.reduce(
    (acc, curr) => (curr.views > acc.views ? curr : acc),
    moviesData[0]
  );
  //   console.log(mostWatchedMovie);

  const highestRatedMovie = moviesData.reduce(
    (acc, curr) => (curr.rating > acc.rating ? curr : acc),
    moviesData[0]
  );
  //   console.log(highestRatedMovie);

  const totalMovies = moviesData.length;
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">Movie Report</h2>
        <hr />
        <section>
          <h3>Most Watched Movie</h3>
          {mostWatchedMovie && (
            <>
              <p>Title: {mostWatchedMovie.title}</p>
              <p>Views: {mostWatchedMovie.views}</p>
            </>
          )}

          <h3>Highest Rated Movie</h3>
          {highestRatedMovie && (
            <>
              <p>Title: {highestRatedMovie.title}</p>
              <p>Rating: {highestRatedMovie.rating}</p>
            </>
          )}

          <h3>Total Movies</h3>
          {mostWatchedMovie && (
            <>
              <p>{totalMovies}</p>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Report;
