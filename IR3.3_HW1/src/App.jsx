//My Food Delivery Webiste - added header and footer components
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-5 fw-normal mb-3">Featured Restaurants</h1>

        <section>
          <img
            src="https://images.pexels.com/photos/974382/pexels-photo-974382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="restaurant 1"
            className="img-fluid rounded"
          />
          <div className="py-3">
            <h3>Taste of Italy</h3>
            <p>Italian | Rating: 4.5</p>
            <p>123, Main Street, Anytown, USA</p>
          </div>
        </section>

        <section className="mt-3">
          <img
            src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="restaurant 2"
            className="img-fluid rounded"
          />
          <div className="py-3">
            <h3>Spice Village</h3>
            <p>Indian | Rating: 4.3</p>
            <p>456, Elm Street, Anytown, USA</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
