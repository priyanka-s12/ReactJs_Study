import Header from '../components/Header';
import Footer from '../components/Footer';
import { employees } from './Employees';
const Report = () => {
  const mostWorkedEmployee = employees.reduce(
    (acc, curr) => (curr.hoursWorked > acc.hoursWorked ? curr : acc),
    employees[0]
  );
  console.log(mostWorkedEmployee);

  const highestRatedEmployee = employees.reduce(
    (acc, curr) => (curr.performanceRate > acc.performanceRate ? curr : acc),
    employees[0]
  );
  console.log(highestRatedEmployee);

  const totalOvertimeHours = employees.reduce(
    (acc, curr) => acc + curr.overTimeHours,
    0
  );

  console.log(totalOvertimeHours);
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2>HR Report</h2>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3>Most Worked Employee</h3>
            <p>Name: {mostWorkedEmployee.name}</p>
            <p>Hours Worked: {mostWorkedEmployee.hoursWorked}</p>
          </div>
          <div className="col-md-4">
            <h3>Highest Rated Employee</h3>
            <p>Name: {highestRatedEmployee.name}</p>
            <p>Performance Rate: {highestRatedEmployee.performanceRate}</p>
          </div>
          <div className="col-md-4">
            <h3>Total Overtime Hours</h3>
            <p>Total Overtime Hours: {totalOvertimeHours}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Report;
