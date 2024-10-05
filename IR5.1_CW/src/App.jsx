import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="mt-5">
          <img
            src="https://placehold.co/400x300?text=Movies+Cover"
            alt="movies cover image"
            className="img-fluid"
          />
        </section>

        <section className="mt-5">
          <h2>Our Movies</h2>
          <p>
            Explore our collection of movies spanning various genres and themes.
          </p>
          <Link className="btn btn-primary" to="/movies">
            View Movies
          </Link>
        </section>

        <section className="mt-5">
          <h2>Movie Report</h2>
          <p>
            Check out our curated list of recommended movies that you might
            enjoy.
          </p>
          <Link className="btn btn-primary" to="/report">
            View Report
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
