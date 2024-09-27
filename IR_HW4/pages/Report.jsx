import Header from '../components/Header';

const Report = () => {
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">HR Report</h2>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3>Most Worked Employee</h3>
            <p>Name: John Doe</p>
            <p>Hours Worked: </p>
          </div>
          <div className="col-md-4">
            <h3>Highest Rated Employee</h3>
            <p>Name: Jane Smith</p>
            <p>Performance Rate: 0.95</p>
          </div>
          <div className="col-md-4">
            <h3>Total Overtime Hours</h3>
            <p>Total Overtime Hours: 35</p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Report;
