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
            src="https://placehold.co/400x300?text=Employees+Smiling"
            alt="employees smiling"
            className="img-fluid"
          />
        </section>

        <section className="mt-5">
          <h2>Our Employees</h2>
          <p>
            Meet our dedicated team of professionals who work tirelessly to
            achieve our company's goals.
          </p>
          <Link className="btn btn-primary" to="/employees">
            View Employees
          </Link>
        </section>

        <section className="mt-5">
          <h2>Company Report</h2>
          <p>
            Explore our latest financial report to gain insights into our
            company's performance and growth.
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
