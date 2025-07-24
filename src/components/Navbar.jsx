import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-10 px-10">
        <div className="bg-gray-800 px-4 py-3 rounded">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/art" className="text-gray-300 hover:text-white transition">
                Art
              </Link>
            </li>
            <li>
              <Link to="/programming" className="text-gray-300 hover:text-white transition">
                Programming
              </Link>
            </li>
            <li>
              <Link to="/bio" className="text-gray-300 hover:text-white transition">
                Bio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
