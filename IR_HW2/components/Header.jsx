import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container">
      <h1 className="display-3 fw-normal py-3">
        <Link className="text-decoration-none text-light" to="/">
          Virat Kohli
        </Link>
      </h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/biography">
              Biography
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/records">
              Records
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
