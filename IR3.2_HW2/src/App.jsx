import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
//airbnb kind of app
function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-5 fw-normal mb-3">Latest Listings</h1>
        <section>
          <img
            src="https://cdn.pixabay.com/photo/2020/04/28/04/03/villa-5102551_1280.jpg"
            alt="house 1"
            className="img-fluid rounded"
          />
          <div className="mt-3">
            <h4>Cozy Loft in the City Center</h4>
            <p>Entire loft - 2 huests - 1 bedroom - 1 bed - 1 bath</p>
            <p>
              Enjoy your stay in this stylish loft apartment located in the
              heart of the city. Close to restaurants, shops, and attractions,
              it's the perfect base for exploring the city.
            </p>
            <p>$120 per night</p>
          </div>
        </section>

        <section>
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="house 2"
            className="img-fluid rounded mt-3"
          />
          <div className="mt-3">
            <h4>Beachfront Villa with Stunning Views</h4>
            <p>Entire villa - 6 guests - 3 bedrooms - 3 beds - 2 baths</p>
            <p>
              Relax and unwind in this beautiful villa. Wake up to panoramic
              ocean views, take a dip in the private pool, and enjoy seamless
              indoor-outdoor living.
            </p>
            <p>$300 per night</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
