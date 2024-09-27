import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const EmployeeDetails = () => {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Software Developer',
      department: 'IT',
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Designer',
      department: 'Design',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      title: 'Product Manager',
      department: 'Management',
    },
  ];

  const employeeId = useParams();
  console.log(employeeId);

  const employeeData = employees.find(
    (employee) => employee.id == employeeId.empId
  );
  console.log(employeeData);
  return (
    <>
      <Header />
      <main className="container py-3">
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
      </main>
    </>
  );
};
export default EmployeeDetails;
