import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand fw-medium text-decoration-none" to="/">
            Company Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employee">
                  Employee
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/report">
                  Report
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
);
export default Header;
