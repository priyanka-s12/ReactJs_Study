import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Employee = () => {
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
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">List of Employees</h2>
        <ul className="list-group">
          {employees.map((emp, index) => (
            <div key={index}>
              <li className="list-group-item">
                <h4>{emp.name}</h4>
                <p>{emp.title}</p>
                <Link className="btn btn-primary" to={`/employee/${emp.id}`}>
                  View Details
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};
export default Employee;
