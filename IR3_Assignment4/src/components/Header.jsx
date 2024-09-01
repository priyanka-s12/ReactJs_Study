import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container">
        <h1 className="display-4 fw-normal py-4">Todos</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todos">
                Todos
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
};

export default Header;
