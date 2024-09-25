import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light ">
      <div className="container">
        <h1 className="display-3 fw-normal py-3">
          <Link to="/" className="text-decoration-none text-light">
            Taj Mahal
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
              <NavLink className="nav-link" to="/history">
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/architecture">
                Architecture
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
