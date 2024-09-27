import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <img
          src="https://via.placeholder.com/700x300?text=Players+Playing"
          className="img-fluid py-5"
        />
        <section className="mb-3">
          <h2>Our Players</h2>
          <p>
            Meet our talented team of players who work hard to achieve success
            on the field.
          </p>
          <Link className="btn btn-primary" to="/players">
            View Players
          </Link>
        </section>
        <section className="py-3">
          <h2>Team Performance</h2>
          <p>
            Explore our team's performance statistics to gain insights into our
            success on the field.
          </p>
          <Link className="btn btn-primary" to="/report">
            View Performance
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
