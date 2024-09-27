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
          src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.xlarge.jpg"
          alt="iphone"
          className="img-fluid rounded mb-3"
        />
        <p className="fs-5">
          Introducing the all-new iPhone 15, the latest innovation from Apple.
          Exploring its incredible features, specifications, and stunning design
          in this website.
        </p>
      </main>
      <Footer />
    </>
  );
}
