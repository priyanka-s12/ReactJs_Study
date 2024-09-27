import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <main className="container py-5">
        <section className="pb-5">
          <img
            src="https://via.placeholder.com/400x300?text=Employees+Smiling"
            alt="employees smiling"
            className="img-fluid"
          />
        </section>
        <section className="mb-3">
          <h2>Our Employees</h2>
          <p>
            Meet our dedicated team of professionals who work tirelessly to
            achieve our company's goals.
          </p>
          <Link className="btn btn-primary" to="/employee">
            View Employees
          </Link>
        </section>
        <section className="py-3">
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
    </div>
  );
}
