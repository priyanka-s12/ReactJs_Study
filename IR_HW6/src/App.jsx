import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function App() {
  return (
    <>
      <Header />
      <main className="">
        <section className="">
          {/* <img
            src="https://via.placeholder.com/1700x300?text=Players+Banners"
            className="img-fluid"
          /> */}
          <img
            src="https://placehold.co/1800x500?text=Players+Banners"
            className="img-fluid"
          />
        </section>
        <section className="py-5 text-center bg-light">
          <h2>Cricket Player Database</h2>
          <p>Explore the profilrs of your favorite cricket players.</p>
          <Link className="btn btn-primary" to="/players">
            Explore Players
          </Link>
        </section>
        <section className="py-5 text-center">
          <h2>Players Report</h2>
          <p>
            Explore our latest players report to gain insights into our ICCC's
            performance and growth.
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
