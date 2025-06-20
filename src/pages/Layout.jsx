import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Layout = ({ user, setUser }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar user={user} setUser={setUser} />

      <main className="flex-fill">
        <div className="container my-4">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
