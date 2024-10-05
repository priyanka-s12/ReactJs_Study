import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const employees = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Software Developer',
    department: 'IT',
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Designer',
    department: 'Design',
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    title: 'Project Manager',
    department: 'Management',
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];
const Employees = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredData =
    selectedDepartment === 'All'
      ? employees
      : employees.filter((emp) => emp.department === selectedDepartment);
  console.log(selectedDepartment);
  console.log(filteredData);

  return (
    <>
      <Header />
      <main className="container py-3">
        <section>
          <h2 className="mb-3">List of Employees</h2>
          <label className="form-label" htmlFor="departmentSelect">
            Filter by Department:
          </label>
          <select
            className="form-select"
            id="departmentSelect"
            onChange={(event) => setSelectedDepartment(event.target.value)}
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </section>

        <section className="mt-3">
          <ul className="list-group">
            {filteredData.map((emp) => (
              <li className="list-group-item" key={emp.id}>
                <h5>{emp.name}</h5>
                <p>{emp.title}</p>
                <Link className="btn btn-primary" to={`/employees/${emp.id}`}>
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Employees;
