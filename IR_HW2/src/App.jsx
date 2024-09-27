import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function App() {
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="display-5 fw-normal mb-3">Overview</h2>
        <img
          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/378300/378307.jpg"
          alt="Virat Kohli"
          className="img-fluid rounded w-50 mb-3"
        />
        <p className="fs-5">
          Virat Kohli was born on November 5, 1988, in Delhi, India, is one of
          the world's leading cricketers. He is known for his aggressive batting
          and strong leadersip as the captain of the Indian cricket team.
        </p>
        <p className="fs-5">
          Kohli has consistently ranked among the world's top batsmen and has
          received numerous awards and accolades for his remarkable cricketing
          skills.
        </p>
      </main>
      <Footer />
    </>
  );
}
