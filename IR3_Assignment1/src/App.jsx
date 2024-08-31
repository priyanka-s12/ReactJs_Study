import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h2 className="display-5 fw-normal mb-3">Featured Products</h2>
        <section>
          <div className="row">
            {/* card 1 */}
            <div className="col-md-4">
              <div className="card mb-3">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="product 1"
                />
                <div className="card-body">
                  <h5>Product 1</h5>
                  <p>
                    Description of Product 1. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <Link to="/products/1" className="btn btn-primary">
                    View Product
                  </Link>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="col-md-4">
              <div className="card mb-3">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="product 2"
                />
                <div className="card-body">
                  <h5>Product 2</h5>
                  <p>
                    Description of Product 2. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <Link to="/products/2" className="btn btn-primary">
                    View Product
                  </Link>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="col-md-4">
              <div className="card mb-3">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="product 3"
                />
                <div className="card-body">
                  <h5>Product 3</h5>
                  <p>
                    Description of Product 3. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <Link to="/products/3" className="btn btn-primary">
                    View Product
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
