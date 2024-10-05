import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { employees } from './Employees';
const EmployeeDetails = () => {
  const employeeId = useParams();
  console.log(employeeId);
  const employeeData = employees.find((emp) => emp.id === employeeId.empId);
  console.log(employeeData);
  return (
    <>
      <Header />
      <main className="container py-3">
        {employeeData ? (
          <>
            <h3 className="mb-3">{employeeData.name}</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Name: </strong>
                {employeeData.name}
              </li>
              <li className="list-group-item">
                <strong>Designation: </strong>
                {employeeData.title}
              </li>
              <li className="list-group-item">
                <strong>Department: </strong>
                {employeeData.department}
              </li>
            </ul>
          </>
        ) : (
          <>
            <p className="alert alert-danger">Employee not found.</p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
export default EmployeeDetails;
