import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Stays() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-5 fw-normal mb-3">Featured Stays</h1>

        <section>
          {/* 1st card */}
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn.pixabay.com/photo/2017/04/18/12/57/residence-2238987_1280.jpg"
                  alt="stay 1"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Cozy Cottage Retreat</h5>
                  <p className="card-text">
                    Wake up to a breathtaking view of the Taj Mahal from this
                    luxurious apartment. Explore the rich history and beauty of
                    this iconic monument right from your window.
                  </p>
                  <h6 className="text-secondary">Last updated 3 mins ago</h6>
                  <Link to="/stays/1" className="btn btn-primary mt-3">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="stay 2"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Beachfront Paradise Villa</h5>
                  <p className="card-text">
                    Escape to nature with this cozy mountain retreat. Enjoy
                    tranquility and stunning views while being surrounded by
                    lush forests and fresh mountain air.
                  </p>
                  <h6 className="text-secondary">Last updated 10 mins ago</h6>
                  <Link to="/stays/2" className="btn btn-primary mt-3">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd card */}
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="stay 3"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Urban Loft in the City</h5>
                  <p className="card-text">
                    Indulge in luxury with this stunning seaside villa. Relax on
                    pristine beaches, take a dip in the private pool, and soak
                    up in the sun in this exclusive coastal retreat.
                  </p>
                  <h6 className="text-secondary">Last updated 15 mins ago</h6>
                  <Link to="/stays/3" className="btn btn-primary mt-3">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4th card */}
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://images.pexels.com/photos/27307397/pexels-photo-27307397/free-photo-of-a-modern-apartment-building-with-balconies-and-balconies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="stay 4"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Rustic Cabin in the Woods</h5>
                  <p className="card-text">
                    Experience urban living at its finest with this modern loft.
                    Conveniently located in the city center, it offers style,
                    comfort, and easy access to dining and entertainment
                    options.
                  </p>
                  <h6 className="text-secondary">Last updated 20 mins ago</h6>
                  <Link to="/stays/4" className="btn btn-primary mt-3">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Stays;
