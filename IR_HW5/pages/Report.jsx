import Footer from '../components/Footer';
import Header from '../components/Header';

const Report = () => {
  return (
    <>
      <Header />
      <main className="container py-3">
        <section>
          <h2>Team Performance Report</h2>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <h3>Top Scorer</h3>
              <p>Name: Lionel Messi</p>
              <p>Goals Scored: 25</p>
            </div>
            <div className="col-md-4">
              <h3>Best Assister</h3>
              <p>Name: Neymar Jr.</p>
              <p>Assists: 15</p>
            </div>
            <div className="col-md-4">
              <h3>Most Valuable Player (MVP)</h3>
              <p>Name: Cristiano Ronaldo</p>
              <p>Overall Rating: 9.5</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Report;
