import 'bootstrap/dist/css/bootstrap.min.css';
//airbnb kind of app
function App() {
  return (
    <main className="container py-4">
      <h1 className="display-5 fw-normal mb-3">Latest Listings</h1>
      <section>
        <img
          src="./public/home2.jpg"
          alt="house 1"
          className="img-fluid rounded"
        />
        <div className="mt-3">
          <h4>Cozy Loft in the City Center</h4>
          <p>Entire loft - 2 huests - 1 bedroom - 1 bed - 1 bath</p>
          <p>
            Enjoy your stay in this stylish loft apartment located in the heart
            of the city. Close to restaurants, shops, and attractions, it's the
            perfect base for exploring the city.
          </p>
          <p>$120 per night</p>
        </div>
      </section>

      <section>
        <img
          src="./public/home1.jpg"
          alt="house 2"
          className="img-fluid rounded mt-3"
        />
        <div className="mt-3">
          <h4>Beachfront Villa with Stunning Views</h4>
          <p>Entire villa - 6 guests - 3 bedrooms - 3 beds - 2 baths</p>
          <p>
            Relax and unwind in this beautiful villa. Wake up to panoramic ocean
            views, take a dip in the private pool, and enjoy seamless
            indoor-outdoor living.
          </p>
          <p>$300 per night</p>
        </div>
      </section>
    </main>
  );
}

export default App;
