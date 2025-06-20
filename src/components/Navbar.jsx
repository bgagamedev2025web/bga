import { Link } from 'react-router';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-dark bg-success-subtle p-3">
      <div className="container">
        <Link className="navbar-brand text-dark" to="/">Main</Link>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-3">
            <Link className="nav-link text-dark" to="/">Home</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link text-dark" to="/art">Art</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link text-dark" to="/programming">Programming</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link text-dark" to="/bio">Bio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
