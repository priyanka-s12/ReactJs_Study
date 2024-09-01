import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <section className="text-center">
          <img
            src="https://images.pexels.com/photos/7718886/pexels-photo-7718886.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1"
            className="img-fluid rounded mb-3"
            alt="todo image"
          />
          <h2>Todos</h2>
          <p>Welcome to the Todo application!</p>
          <p>
            <Link className="btn btn-primary" to="/todos">
              View Todos
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
