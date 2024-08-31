import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container">
      <h1 className="display-4 fw-normal py-4">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Ecommerce Website
        </Link>
      </h1>
      <nav className="pb-3">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
