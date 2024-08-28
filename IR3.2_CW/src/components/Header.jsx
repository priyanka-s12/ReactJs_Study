//small reusable components like header, footer goes in components folder
//in traditional function write {} return stmt, html code
//here using arrow function, want to write html code so no return stmt
import { NavLink } from 'react-router-dom';
//like a
const Header = () => (
  <header className="bg-dark text-light">
    <div className="container py-4">
      <h1>My Blogging Website</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blogs">
              Blogs
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
