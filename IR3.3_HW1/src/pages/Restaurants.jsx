import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Restaurants() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-5 fw-normal mb-3">Restaurants</h1>
        <section>
          {/* 1st card */}
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="restaurant 1"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className=" col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Golden Spoon</h5>
                  <p>
                    Enjoy authentic Indian cuisine at The Golden Spoon. Explore
                    a variety of delicious dishes from different regions of
                    India..
                  </p>
                  <p className="text-secondary">Rating: 4.7 | Open Now</p>
                  <Link to="/restaurants/1" className="btn btn-primary">
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
                  src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="restaurant 2"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className=" col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Spice Junction</h5>
                  <p>
                    Indulge in mouth-watering pizzas at Spice Junction. With a
                    variety of toppings and crusts, it's a pizza lover's dream.
                  </p>
                  <p className="text-secondary">Rating: 4.5 | Open Now</p>
                  <Link to="/restaurants/2" className="btn btn-primary">
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
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="restaurant 2"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className=" col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Sushi Delight</h5>
                  <p>
                    Indulge in mouth-watering pizzas at Sushi Delight. With a
                    variety of toppings and crusts, it's a pizza lover's dream.
                  </p>
                  <p className="text-secondary">Rating: 4.5 | Open Now</p>
                  <Link to="/restaurants/3" className="btn btn-primary">
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
