import Header from '../components/Header';
import Footer from '../components/Footer';
const Report = () => (
  <>
    <Header />
    <main className="container py-3">
      <h2 className="mb-3">Health Report</h2>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <h3>Weight Loss Progress</h3>
          <p>Current Weight: 180lbs</p>
          <p>Starting Weight: 200lbs</p>
          <p>Weight Loss: 20lbs</p>
        </div>
        <div className="col-md-4">
          <h3>Exercise Goals</h3>
          <p>Weekly Exercise Hours Goals: 5 hours</p>
          <p>Exercise Hours This Week: 7 hours</p>
          <p>Remaining Hours to Goal: 0 hours</p>
        </div>
        <div className="col-md-4">
          <h3>Healthy Eating Habits</h3>
          <p>Vegetables Consumed: 5 servings/ day</p>
          <p>Fruits consumed: 3 servings/ day</p>
          <p>Water Intake: 8 glasses/ day</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);
export default Report;
