import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <main className="container py-4">
      <h1 className="display-5 fw-normal mb-3">Featured Restaurants</h1>

      <section>
        <img
          src="https://wallpapers.com/images/hd/restaurant-background-9qqixx9l4zqreb5u.jpg"
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
          src="https://i.pinimg.com/originals/3d/a3/7d/3da37dc6421f978a50e165466f221d72.jpg"
          alt="restaurant 2"
          className="img-fluid rounded"
        />
        <div className="py-3">
          <h3>Spice Village</h3>
          <p>Indian | Rating: 4.3</p>
          <p>456, Elm Street, Anytown, USA</p>
        </div>
      </section>

      <section></section>
    </main>
  );
}
