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
          src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="img-fluid rounded mb-3"
        />
        <p className="fs-5">
          The Taj Mahal is one of the most famous monuments in the world. It is
          located in Agra, India, and is a symbol of eternal love. This stunning
          white marble museum was built by Mughal Emperor Shah Jahan in memory
          of his beloved wife Mumtaz Mahal.
        </p>
        <p className="fs-5">
          The Taj Mahal is not only a UNESCO World Heritage Site but also
          considered one of the most beautiful architectural masterpieces in
          history.
        </p>
      </main>
      <Footer />
    </>
  );
}
