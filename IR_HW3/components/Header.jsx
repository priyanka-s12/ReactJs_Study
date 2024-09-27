import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container">
      <h1 className="display-3 fw-normal py-3">
        <Link className="text-decoration-none text-light" to="/">
          iPhone 15
        </Link>
      </h1>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Overview
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/features">
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/specifications">
            Specifications
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
