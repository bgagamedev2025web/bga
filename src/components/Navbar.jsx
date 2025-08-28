import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 shadow-lg shadow-gray-700/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
        <Link
          to="/"
          className="text-3xl font-extrabold text-white tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
        >
          SHROUD
        </Link>

       
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/art"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Art
            </Link>
          </li>
          <li>
            <Link
              to="/bio"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Bio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
