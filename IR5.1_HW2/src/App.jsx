import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container mt-5">
        <section>
          <img
            src="https://placehold.co/400x300?text=Healthy+Lifestyle"
            alt="healthy lifestyle cover image"
            className="img-fluid"
          />
        </section>

        <section className="mt-5">
          <h2>Healthy Resources</h2>
          <p>
            Discover food and information to support your journey towards a
            healthier lifestyle.
          </p>
          <Link className="btn btn-primary" to="/food">
            Explore Food Items
          </Link>
        </section>

        <section className="mt-5">
          <h2>Healthy Report</h2>
          <p>See healthy report</p>
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
