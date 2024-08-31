import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
//anchor tag - when click on link, page refreshes(entire url changes)/ entire page loads
//but in Link tag entire app doesn't refreshes
export default function Blogs() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Blogs</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5>Blog 1</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
                <Link to="/blogs/1" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          {/* 1/2/3 are ids, blogs is object */}

          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5>Blog 2</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/blogs/2" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5>Blog 3</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link to="/blogs/3" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
